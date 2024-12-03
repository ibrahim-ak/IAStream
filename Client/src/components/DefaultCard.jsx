import React, { useState } from "react";
import PopUp from "./PopUp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DefaultCard = ({title, content, movieData}) => {
  const [CardPopUp, setCardPopUp] = useState(false);
  const [Id, setId] = useState(null);
  
  const handlePopUp = () => {
    setCardPopUp(!CardPopUp);
  }
  
  const CloseBtn = () => {
    setCardPopUp(false);
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slideToScroll: 4,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
          slideToScroll: 4,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slideToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slideToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  };
  
  return (
    <div>

      <div className="w-5/6 m-auto py-6 transition-all duration-500">
      <h1 className="text-lg font-bold mb-4 lg:text-4xl">{title}</h1>
      <Slider {...settings}>
        {
          movieData.map((data, i) => {
            if (data.content == content)
            {
              return (
                <>
                    <img className="card-size" onClick={() => {setId(data.id); handlePopUp();} } key={i} src={data.image} alt={data.title} />
                </>
              )
            }
          })  
        }
        </Slider>
      </div>
      <div>
        {
          movieData.map((data, i) =>{
            if (data.content == content && Id == data.id) {
              return (
                  CardPopUp && <PopUp key={i} iconSrc={data.icon} serial={data.id} bgSrc={data.bg} name={data.title} description={data.description} category={data.category} type={data.type} mature={data.mature} year={data.year}  OnClose={CloseBtn} />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default DefaultCard;

    {/*  */}


          {/*  */}