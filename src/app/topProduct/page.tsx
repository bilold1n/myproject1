"use client";
import Link from "next/link";
import React from "react";
import useGetData from "../hooks/usegetdata";

export default function topProducts() {
  const { data } = useGetData("products", false);
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 0.5;
      return (
        <div key={index} className="relative">
          <svg
            className="w-4 h-4 fill-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L0 7.545l6.561-.954L10 1l2.439 5.591L19 7.545l-5.244 4.999 1.122 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-500 absolute top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            style={{
              clipPath:
                rating >= index + 1
                  ? "none"
                  : rating > index
                  ? "inset(0 50% 0 0)"
                  : "inset(0 0 0 100%)",
            }}
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L0 7.545l6.561-.954L10 1l2.439 5.591L19 7.545l-5.244 4.999 1.122 6.545z" />
          </svg>
        </div>
      );
    });
  };
  return (
    <section>
      <div className="container">
        <h1 className="w-full text-center text-5xl my-[72px]">TOP SELLING</h1>
        <div className="mygrid">
          {data.map(({ id, title, rating, price, image }) => (
            <Link href={`/topProduct/${id}`} key={id}>
              <div className="card card-compact bg-base-100 w-[280px] shadow-xl">
                <figure>
                  <img
                    className="w-[295px] h-[300px]"
                    src={image[0]}
                    alt={title}
                    width={295}
                    height={300}
                  />
                </figure>
                <div className="card-body">
                  <h1 className="font-bold">{title}</h1>
                  <p>{rating}/5</p>
                  <div className="text-yellow-500 mb-2">
                    <div className="flex justify-start items-center">
                      {renderStars(rating)}
                      <span className="text-sm text-gray-500 ml-2">
                        {typeof rating === "number"
                          ? rating.toFixed(1)
                          : rating}
                        /5
                      </span>
                    </div>
                  </div>
                  <div className="flex w-5 gap-2 items-center">
                    <h2 className="font-bold text-xl">${price}</h2>
                    <h2 className="font-bold text-xl text-[#c0bebc86] line-through">
                      ${Number(price) + Number(price) * 0.3}
                    </h2>
                    <p className="text-[#d82c2c] bg-[#ca3a3a61] rounded-full p-1 text-sm">
                      -30%
                    </p>
                  </div>{" "}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex item-center justify-between w-full mx-auto mt-[35px] mb-[64px]">
          <button className="mx-auto btn btn-outline rounded-full w-[220px]">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
