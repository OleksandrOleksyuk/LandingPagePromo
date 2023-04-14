const Card = ({
  product: { id, href, src, brand, title, description, price },
}) => {
  const promoPrice = +price * 1.3;
  return (
    <a href={href}>
      <div
        id={id}
        className="transition-all duration-500 ease-linear col-span-1 mb-4 w-80 h-[448px] rounded-xl shadow-lg shadow-primary text-primary swiper-slide hover:scale-105"
      >
        <div className="w-80 h-[448px] text-left flex flex-col rounded-xl">
          <div
            id="containerImageCard"
            className="flex h-48 items-center justify-center overflow-hidden relative rounded-t-xl p-3"
          >
            <img className="h-full object-contain" src={src} />
            <div className="absolute top-3 left-3 border-2 border-primary rounded-full">
              <div className="animate-pulse duration-1000 w-16 h-16 rounded-full bg-primary text-white flex justify-center items-center">
                <p className="text-xl font-semibold">-30%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-64 p-5">
            <div>
              <p className="uppercase text-sm tracking-widest">{brand}</p>
              <h4 className="font-semibold text-2xl overflow-hidden">
                {title}
              </h4>
              <p className="font-light first-letter:uppercase">{description}</p>
            </div>
            <div className="">
              <h3 className="text-4xl font-semibold text-yellow-500 pb-3 flex flex-col">
                <span className="text-base text-yellow-900 line-through">
                  &euro; {promoPrice.toFixed(2)}
                </span>
                &euro; {price}
              </h3>
              <button className="btnStyle min-w-full text-lg">
                Vai alla promo
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
export default Card;
