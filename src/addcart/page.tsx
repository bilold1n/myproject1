"use client";
import Products from "@/app/product/page";
import React, { useState } from "react";

export default function AddCart({ data }: any) {
  console.log(data);

  const [url, setUrl] = useState(data.image);
  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <section className="mb-[55px]" style={{ marginBottom: "55px" }}>
      <div className="container flex justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {data.image.map((image: string, index: number) => (
              <img
                key={index}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
                src={image}
                alt=""
                className="w-[145px] h-[100px] rounded-xl"
                width={155}
                height={100}
                onClick={() => setUrl(image)}
              />
            ))}
          </div>
          <div>
            <img
              style={{
                width: "400px",
                height: "468px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              className="object-scale-down"
              width={450}
              height={530}
              src={url}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col" style={{ width: "630px", gap: "14px" }}>
          <h2 className="text-4xl">{data.title}</h2>
          <p>{data.rating}/5</p>
          <p className="text-xl">${data.price}</p>
          <p className="w-[300px]">{data.description}</p>
          <hr />
          <div>
            <p>Select Colors</p>
            <span
              style={{
                borderRadius: "50%",
                background: data.color,
                width: "30px",
                height: "30px",
                display: "inline-block",
                marginRight: "10px",
              }}
            ></span>
          </div>
          <hr />
          <p>Choose Size</p>
          <div className="join gap-3">
            {data.size.map((size: string, index: number) => (
              <label key={index}>
                <input
                  className="join-item btn"
                  type="radio"
                  name="size"
                  value={size}
                  aria-label={size}
                  style={{ marginRight: "12px" }}
                />
              </label>
            ))}
          </div>
          <hr />
          <div className="flex justify-between">
            <div
              style={{
                width: "180px",
              }}
              className="flex gap-5 items-center bg-base-200 justify-center rounded-full"
            >
              <button className="" onClick={increment} style={{ zoom: "2" }}>
                +
              </button>
              <h1 style={{ zoom: "1.3" }}>{count}</h1>
              <button
                className="disabled:bg-base-200"
                onClick={decrement}
                disabled={count <= 1}
                style={{ zoom: "2" }}
              >
                -
              </button>
            </div>
            <button
              style={{ width: "400px" }}
              className="btn bg-black text-white rounded-full"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Products />
      </div>
    </section>
  );
}
