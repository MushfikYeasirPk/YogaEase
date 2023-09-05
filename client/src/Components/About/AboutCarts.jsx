import { useEffect } from "react";
import { cardList } from "./cardList";
import AOS from 'aos';
function AboutCarts() {
  useEffect(() => {  
    AOS.init();
  });
  return (
    <>
    <div className="mx-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">

      {cardList.map((card, id) => (
        <div data-aos="fade-right" data-aos-duration="4000"
          key={id}
          style={{
            backgroundImage: 'url(https://c8.alamy.com/comp/PCYWYH/yoga-logo-or-label-fitness-meditation-symbol-vector-illustration-PCYWYH.jpg)',
          }}
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px] w-full card-item-div md1000:min-h-[260px] "
        >
          <img src={card.img} alt="box_img" className=" w-[75px] mb-4" />
          <p className=" text-[24px] text-black font-bold uppercase mb-7">{card.title}</p>
          <p className="text-[15px] text-black font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}








    </div>
    </>
  );
}

export default AboutCarts;
