// Component
import Hero from "../../components/hero";
import DefaultCard from "../../components/default-card";
import Reasons from "../../components/reasons";
import FAQ from "../../components/faq";
import MemberShip from "../../components/membership";

// Data 
import movieData from '../../assets/data/movie_image/movieImage';

const SignUpPage = () => {
  return (
    <>
      <Hero />
      <DefaultCard title={"Trending Now"} content={"Trending"} movieData={movieData} />
      <DefaultCard title={"Only On IAStream"} content={"Only IAStream"} movieData={movieData} />
      <Reasons />
      <FAQ />
      <MemberShip />
    </>
  )
}

export default SignUpPage;