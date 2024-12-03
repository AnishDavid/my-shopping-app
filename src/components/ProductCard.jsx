import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const navigate = useNavigate();

  const { id, images, title, price } = props?.prodData;

  const cleanImageUrl = images[0]
    .replace(/^\[|\]$/g, '') // Remove [ and ] at the start or end
    .replace(/^"|"$/g, ''); // Remove " at the start or end

  // console.log(props?.prodData?.category?.name);

  // if (id > 51) {
  //   return null;
  // }

  const handleCardClick = () => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <>
      <div
        className="w-56 m-5 rounded-xl bg-gray-200 hover:bg-gray-300 cursor-pointer"
        onClick={handleCardClick}
      >
        <img
          className="w-48 mx-auto m-2 rounded-xl "
          alt="API's Falut"
          src={cleanImageUrl}
        ></img>
        <div className="ml-3 font-bold">{title}</div>
        <div className="ml-3 font-semibold text-lg py-1">
          ₹{price < 100 ? price + '00' : price == 690 ? price + '0' : price}
        </div>
        <div className="ml-3 mb-3 font-medium pb-0.5">ID: {id}</div>
      </div>
    </>
  );
};

export const HigherOrderComponentExample = (ProductCard) => {
  return (prodData) => {
    return (
      <div className="relative">
        <div className="absolute top-4 left-4 bg-black p-1 rounded-md text-white font-bold z-10">
          {prodData.prodData.category.name}
        </div>
        <ProductCard {...prodData} />
      </div>
    );
  };
};

export default ProductCard;
