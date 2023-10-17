"use client";
import React, { useState } from "react";
import { MoviesSectionType } from "./MoviesSection.types";
import Heading from "../Heading/Heading";
import classNames from "classnames";
import MovieCard from "../MovieCard/MovieCard";

const MoviesSection = ({
  title,
  tabs,
  moviesList,
  extraClasses,
}: MoviesSectionType) => {
  const movieClasses = classNames("flex flex-col mt-6");
  const [activeTab, setActiveTab] = useState(0);
  const tabButtonClasses = classNames(
    "py-1 px-5  rounded-30 data-[isactive=true]:bg-darkBlue data-[isactive=true]:text-lightGreen font-semibold"
  );
  return (
    <div className={`${movieClasses} ${extraClasses ?? ""}`}>
      <div className="flex gap-6 mx-4">
        <Heading text={title} variant="24" extraClasses="font-bold" />
        {tabs && (
          <div className="border-2 border-darkBlue rounded-30">
            {tabs.map((tab, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    //@ts-ignore
                    tab.onClick();
                  }}
                  className={tabButtonClasses}
                  data-isactive={activeTab == index}
                >
                  {tab.tabName}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-6 relative ">
        <div className="flex overflow-x-scroll hide-scrollbar max-w-[1300px] gap-4">
          {moviesList?.map((movie, index) => {
            return (
              <MovieCard
                key={index}
                movieImage={movie.movieImage}
                title={movie.title}
                date={movie.date}
                rating={movie.rating}
                onCardClick={movie.onCardClick}
                popupMenuLinks={movie.popupMenuLinks}
              />
            );
          })}
        </div>
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white  to-transparent"></div>
      </div>
    </div>
  );
};

export default MoviesSection;
