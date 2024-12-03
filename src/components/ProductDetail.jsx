import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../utils/constants';

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await fetch(api);
    const json = await data.json();
    // console.log(json);
    const selectedProduct = json.find((item) => item.id == id);
    // console.log(selectedProduct);
    setProduct(selectedProduct);
  };

  if (product === null) {
    return <h1>Loading...</h1>;
  }

  console.log(product.images[0]);

  const cleanImageUrl = product?.images[0]
    .replace(/^\[|\]$/g, '') // Remove [ and ] at the start or end
    .replace(/^"|"$/g, ''); // Remove " at the start or end

  return (
    <>
      <div className="m-5 bg-red-200 rounded-lg">
        <div className="font-bold text-2xl m-2 pt-4 pl-4">{product.title}</div>
        <div className="flex">
          <img
            className="w-72 m-5 ml-6 mb-6 rounded-lg"
            src={cleanImageUrl}
            alt="Err Img"
          />
          <div className="m-5">
            <p className="mb-5 font-semibold text-lg">{product.description}</p>
            <div className="font-bold text-xl">
              ₹
              {product.price < 100
                ? product.price + '00'
                : product.price == 690
                ? product.price + '0'
                : product.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
