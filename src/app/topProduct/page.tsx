"use client";
import Link from "next/link";
import React from "react";
import useGetData from "../hooks/usegetdata";

export default function topProducts() {
  const { data } = useGetData("products", false);

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
