import React, { FC, useMemo } from "react";
import {
  BannerContainer,
  BannerContent,
  BannerSlider,
  LeftArrow,
  RightArrow,
} from "../styles/Banner.ui";
import { useState } from "react";
import ContentInfo from "./ContentInfo";
import { ArticleAtributes } from "../types/types";
import { formatObject } from "../utils/formatObject";

export const data = [
  {
    title: "Attention switches to Champions League",
    writter: "Ossama Elbelamachi",
    date: "20-04-2022",
    img: "stadium.jpg",
    tag: "Sport",
  },
  {
    title: "Bidden attacks China and Russia for missing COP26",
    writter: "Ossama Elbelamachi",
    date: "20-04-2022",
    img: "Biden.jpg",
    tag: "Politic",
  },
  {
    title:
      "The Destructionists review: brilliant study of Republican rage pre-Trump",
    writter: "Ossama Elbelamachi",
    date: "20-04-2022",
    img: "trump.jpg",
    tag: "Politic",
  },
];

const Banner: FC<{ transformedData: { [key: string]: ArticleAtributes[] } }> = (
  props
): JSX.Element => {
  const bannerList = useMemo(
    () => formatObject(props.transformedData),
    [props.transformedData]
  );
  const [isHovering, setIsHoverging] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const leftClickHandler = () => {
    setCurrentSlide((prevVal) =>
      prevVal === 0 ? bannerList.length - 1 : prevVal - 1
    );
  };

  const rightClickHandler = () => {
    setCurrentSlide((prevVal) =>
      prevVal === bannerList.length - 1 ? 0 : prevVal + 1
    );
  };
  return (
    <BannerSlider
      onMouseEnter={() => {
        setIsHoverging(true);
      }}
      onMouseLeave={() => {
        setIsHoverging(false);
      }}
    >
      {isHovering && (
        <LeftArrow
          onClick={() => {
            leftClickHandler();
          }}
        ></LeftArrow>
      )}
      {isHovering && (
        <RightArrow
          onClick={() => {
            rightClickHandler();
          }}
        ></RightArrow>
      )}
      {bannerList.map((item, index) => {
        if (currentSlide === index) {
          return (
            <BannerContainer
              key={index}
              src={`${process.env.BASE_URL_API}${item.imgUrl}`}
              isActive={index === currentSlide}
            >
              <BannerContent>
                <ContentInfo
                  title={item.Title}
                  postDate={item.publishedAt.split("T")[0]}
                  tag={item.Tag}
                  writterInfo={item.Writter}
                  titleFS="50px"
                />
              </BannerContent>
            </BannerContainer>
          );
        }
      })}
    </BannerSlider>
  );
};

export default Banner;
