import React from "react";
// Component
import SignUpNav from "../components/SignUpNav";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import DefaultCard from "../components/DefaultCard";
import Reasons from "../components/Reasons";
import FAQ from "../components/FAQ";
import MemberShip from "../components/MemberShip";
import Footer from "../components/Footer";

// Data 
import movieData from '../assets/data/movie_image/movieImage';

const SignUpPage = () => {
  return (
    <>
      <SignUpNav />
      <Hero /> 
      <NewsLetter />
      <DefaultCard title={"Trending Now"} content={"Trending"} movieData={movieData} />
      <DefaultCard title={"Only On IAStream"} content={"Only IAStream"} movieData={movieData} />
      <Reasons />
      <FAQ />
      <MemberShip />
      <Footer />
    </>
  )
}

export default SignUpPage;