import { api } from '../utils/constants';
import ProductCard, { HigherOrderComponentExample } from './ProductCard';
import { useEffect, useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [originalProdData, setOriginalProdData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const onlineStatus = useOnlineStatus();

  const HigherOrderProductCard = HigherOrderComponentExample(ProductCard);

  useEffect(() => {
    fetchData();

    return () => {
      // used to Unmount...
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch(api);

    // Swiggy Api
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setListOfProduct(json?.map((data) => data));
    setOriginalProdData(json?.map((data) => data));
    console.log(json);
  };

  if (!onlineStatus) {
    return <h1>Looks like you're Offline</h1>;
  }

  if (originalProdData.length === 0) {
    return <h1> Loading... </h1>;
  }

  return (
    <>
      <div className="body-card">
        <div className="p-5 pt-7 flex">
          <input
            type="text"
            className="border-2 border-solid border-black rounded-md p-1 pl-2"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="ml-2 pl-3 pr-3 pt-0.5 text-white font-semibold rounded-md bg-black hover:bg-slate-700"
            onClick={() => {
              const filteredProduct = originalProdData.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
              );
              // if(filteredProduct.length === 0)
              setListOfProduct(filteredProduct);
            }}
          >
            Search
          </button>

          <button
            className="ml-12 pl-3 pr-3 text-white font-semibold rounded-md bg-black hover:bg-slate-700"
            onClick={() => {
              const filteredProduct = originalProdData.filter(
                (store) => store.price > 100
              );
              setListOfProduct(filteredProduct);
            }}
          >
            Low Cost
          </button>
          <button
            className="ml-6 pl-3 pr-3 text-white font-semibold rounded-md bg-black hover:bg-slate-700"
            onClick={() => {
              setListOfProduct(originalProdData);
            }}
          >
            All Product
          </button>
        </div>

        <div className="ml-5 mr-5 grid grid-cols-5 gap-4">
          {listOfProduct.map((store) => (
            <>
              {store.category.name.length !== 0 ? ( // Condition controls HOC ( Higher Order Component )
                <>
                  <HigherOrderProductCard key={store.id} prodData={store} />
                </>
              ) : (
                <>
                  <ProductCard key={store.id} prodData={store} />
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
