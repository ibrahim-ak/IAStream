// Component
import Hero from "../../components/Hero";
import NewsLetter from "../../components/NewsLetter";
import DefaultCard from "../../components/DefaultCard";
import Reasons from "../../components/Reasons";
import FAQ from "../../components/FAQ";
import MemberShip from "../../components/MemberShip";

// Data 
import movieData from '../../assets/data/movie_image/movieImage';

const SignUpPage = () => {
  return (
    <>
      <Hero />
      <NewsLetter />
      <DefaultCard title={"Trending Now"} content={"Trending"} movieData={movieData} />
      <DefaultCard title={"Only On IAStream"} content={"Only IAStream"} movieData={movieData} />
      <Reasons />
      <FAQ />
      <MemberShip />
    </>
  )
}

export default SignUpPage;