import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.allMovies);
  if (!movies) return;
  const nowPlaying = movies[0];
  // console.log("render")
  const { original_title, overview, id } = nowPlaying[0];

  return (
    <>
      <div className="">
      <VideoTitle title={original_title} info={overview} id={id} />
      </div>
      <VideoBackground movieId={id} />
  </>
  );
};

export default MainContainer;
