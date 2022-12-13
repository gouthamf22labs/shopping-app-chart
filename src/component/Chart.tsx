import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart({ productData }: any) {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="lg:w-[700px] lg:h-[500px] md:w-[600px] md:h-[300px] rounded-lg shadow-lg m-2 bg-white">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={200}
            data={productData}
            margin={{
              top: 5,
              right: 30,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#227C70"
              strokeDasharray="3 4 5 2"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
