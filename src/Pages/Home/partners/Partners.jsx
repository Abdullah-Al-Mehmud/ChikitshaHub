/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";

// import "./clients.css";
const Partners = () => {
  const url = "partners-data.json";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const partnersData = data.partners;
  return (
    <>
      <h1 className="text-center font-bold text-3xl">Partners</h1>
      <Splide
        options={{
          type: "loop",
          gap: "20px",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 5,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: true,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
        className="lg:p-10 p-3 rounded-lg max-w-6xl mx-auto"
      >
        {partnersData?.map((dd) => (
          <SplideSlide key={dd._id}>
            <img src={dd.image_link} alt="Image 1" width="100px" />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Partners;
