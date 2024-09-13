import "../App.css";
const DrawingType = ({ drawing, drawingType }) => {
  return (
    <div className="relative sm:w-full h-full">
      <img
        src={drawing}
        alt="Drawing"
        className="w-full h-[300px] rounded-xl object-cover"
      />
      <div className="overlay absolute bottom-0 rounded-b-xl left-0 w-full  p-2 text-white text-md">
        <p>{drawingType}</p>
      </div>
    </div>
  );
};

export default DrawingType;
