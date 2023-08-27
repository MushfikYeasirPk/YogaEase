const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

app.use(cors())
app.use(express.json())
const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: 'unauthorized access Happen' });
  }
  // bearer token
  const token = authorization.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: true, message: 'unauthorized access Happend' })
    }
    req.decoded = decoded;
    next();
  })
}




const uri = `mongodb+srv://${process.env.S3_BUCKET}:${process.env.SECRET_KEY}@cluster0.c6qt32p.mongodb.net/?retryWrites=true&w=majority`;
// const uri = "mongodb+srv://<username>:<password>@cluster0.c6qt32p.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const yogaUserCollection = client.db("yogaUserDB").collection("allYogaUser");
    const instructorCollection = client.db("InstructorDB").collection("allinstructor");
    const classesCollection = client.db("ClassesDB").collection("allClasses");
    const SelectedClassCollection = client.db("SelectedClassCollectionDB").collection("allSelectedClasses");





    app.get('/instructors', async (req, res) => {
      const cursor = instructorCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })
    app.get('/classes', async (req, res) => {
      const cursor = classesCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get('/dashboard', async (req, res) => {
      const email = req.query.email;

      if (!email) {
        res.send([]);
      }

      // const decodedEmail = req.decoded.email;
      // if (email !== decodedEmail) {
      //   return res.status(403).send({ error: true, message: 'forbidden access' })
      // }

      const query = { email: email };
      const result = await SelectedClassCollection.find(query).toArray();
      res.send(result);
    });

    
    app.get('/users', async (req, res) => {
      const result = await yogaUserCollection.find().toArray();
      res.send(result);
    });
    app.get('/users/admin/:email', verifyJWT, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        res.send({ admin: false })
      }

      const query = { email: email }
      const user = await yogaUserCollection.findOne(query);
      const result = { admin: user?.role === 'admin' }
      res.send(result);
    })
    app.post('/jwt', (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' })

      res.send({ token })
    })


    app.post('/users', async (req, res) => {
      const user = req.body;
      const query = { email: user.email }
      console.log(query);
      const checkExistingUser = await yogaUserCollection.findOne(query);
      if (checkExistingUser) {
        return res.send({ message: 'user already exists in our database' })
      }
      const result = await yogaUserCollection.insertOne(user);
      res.send(result);
      
    });


    app.post('/classes', async (req, res) => {
      const item = req.body;
      const result = await SelectedClassCollection.insertOne(item);
      res.send(result);
    })
    app.patch('/users/admin/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: 'admin'
        },
      };

      const result = await yogaUserCollection.updateOne(filter, updateDoc);
      res.send(result);

    })

    app.post('/create-payment-intent', async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
      });

      res.send({
        clientSecret: paymentIntent.client_secret
      })
    })

    app.delete('/myselectedclasses/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await SelectedClassCollection.deleteOne(query);
      res.send(result);
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
