function Card({ productData }: any) {
  return (
    <div className="text-md bg-white w-[150px] h-[100px] rounded-lg m-2 shadow-lg flex justify-center items-center text-center">
      Products: {productData.length}
    </div>
  );
}

export default Card;
