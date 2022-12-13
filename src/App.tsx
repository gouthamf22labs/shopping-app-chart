import { useEffect, useState, useCallback } from "react";
import apiconfig from "./api/apiconfig";
import Card from "./component/Card";
import Chart from "./component/Chart";
import fetchapi from "./utils/fetchapi";

function App() {
  const [productData, setproductData] = useState(() => []);
  const [loading, setLoading] = useState(true);

  const fetchfunction = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchapi(apiconfig.newapi);
      console.log(data);
      if (data?.length) {
        setproductData(data);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [setLoading, setproductData]);

  useEffect(() => {
    fetchfunction();
  }, [fetchfunction]);

  return (
    <div className="mx-auto my-0 w-full h-full lg:w-[1020px] lg:h-full ">
      {loading ? (
        <div>
          <h1 className="w-full h-full flex justify-center items-center">
            Loading
          </h1>
        </div>
      ) : (
        <>
          <Card productDatalength={productData.length} />
          <Chart productData={productData} />
        </>
      )}
    </div>
  );
}

export default App;
