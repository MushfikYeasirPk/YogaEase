import { cardList } from "./cardList";

function AboutCarts() {
  return (
    <>
    <div className="mx-10 grid grid-cols-3 gap-6">

      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]"
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
