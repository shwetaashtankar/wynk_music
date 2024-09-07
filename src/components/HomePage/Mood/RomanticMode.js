import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RomanticMode = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };

  const [Data, setData] = useState([]);
  const getData = async () => {
    let res = await fetch(
      `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}&limit=100,`,
      {
        headers: {
          projectId: "fgq9fidgo5dw",
        },
      }
    );
    let data = await res.json();
    let data1 = data.data;
    setData(data1)
    console.log(data1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mode" id="RomanticMode">
    <h4>Romantic Songs</h4>
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      showDots={false}
      autoPlay={false}
      // autoPlaySpeed={3000}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
    >
     
        {Data.map((e) => (
          <div className="card" key={e._id}>
            <img src={e.thumbnail} alt="image" />
            <p>{e.title}</p>
          </div>
        ))}
    </Carousel>
  </div>
  )
}

export default RomanticMode