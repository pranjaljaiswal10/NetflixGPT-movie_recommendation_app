const VideoTitle = ({ title, info }) => {
  
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6 ">{info}</p>
      <div className="m-0">
        <button className="bg-white text-black text-xl rounded-lg px-12 py-4 hover:opacity-80 ">
          play
        </button>
        <button className=" inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
