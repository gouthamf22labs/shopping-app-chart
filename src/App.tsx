import { useEffect, useState } from "react";
import apiconfig from "./api/apiconfig";
import Card from "./component/Card";
import Chart from "./component/Chart";
import fetchapi from "./utils/fetchapi";

function App() {
  const [productData, setproductData] = useState(() => []);
  const [loading, setLoading] = useState(true);

  async function fetchfunction() {
    try {
      setLoading(true);
      const data = await fetchapi(apiconfig.productsapi);
      console.log(data);
      setproductData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchfunction();
  }, []);

  return (
    <div className="mx-auto my-0 xw-full h-full lg:w-[1020px] lg:h-full ">
      {loading ? (
        <div>
          <h1 className=" w-full h-full flex justify-center items-center">
            Loading
          </h1>
        </div>
      ) : (
        <>
          <Card productData={productData} />
          <Chart productData={productData} />
        </>
      )}
    </div>
  );
}

export default App;
