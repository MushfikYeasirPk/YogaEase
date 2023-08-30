import { useState } from "react";

function BmiCalc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));

      // logic for message
      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };

  return (
    <>
      <section className="bg-slate-700">
        <div className=" ">
          <span className="w-full h-full absolute bg-transparent min620:bg-[#00000063] top-0 left-0"></span>
          <div className="text-white ">
            <h2 className="text-xl font-bold text-center pt-5">
              Let's Calculate Your <span className="text-[#FF0336]">BMI</span>
            </h2>
            <p className="text-[16px] text-white text-center m-5">
              Easily determine your body mass index with our accurate
              calculation tool.
            </p>
            <div className="">
              <form className=" w-full gap-6 mt-10 text-white flex items-start justify-start  ">
              <input onChange={(e) => setWeight(e.target.value)}
               type="text" placeholder="Weight / kg" className="input w-full max-w-xs text-white" />
              <input onChange={(e) => setHeight(e.target.value)}
              type="text" placeholder="Height / cm" className="input w-full max-w-xs text-white" />
              </form>
              <form >
                

              </form>
              {/* output */}

              </div>
              <div>
              <p className=" text-[16px] gap-40 font-medium flex items-center justify-center ">
                <span className="">
                  Your BMI is: &nbsp;
                  <span className="text-[#ff0336] text-xl">{bmi}</span>
                </span>
                <span className="">
                  Your weight is: &nbsp;
                  <span className="text-[#ff0336] text-xl">{message}</span>
                </span>
              </p>
              <div className="flex items-center justify-center text-center">

            
              <button
                onClick={calcBmi}
                style={{ transition: "all 0.3s" }}
                type="submit"
                className="text-[15px] uppercase font-bold m-10 bg-[#323232] w-40 h-10  hover:bg-[#FF0336]"
              >
                Calculate
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BmiCalc;
