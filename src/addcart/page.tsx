"use client";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase/config";

export default function AddCart({ data }: any) {
  const [url, setUrl] = useState(data.image[0]);
  const [count, setCount] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>(data.size[0]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    const cartItem = {
      color: data.color,
      size: selectedSize,
      count: count,
    };
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user && user.uid) {
      setDoc(doc(db, "cart", user.uid), cartItem);
      console.log("Adding to cart:", cartItem);
    } else {
      console.log("User not logged in, cannot add to cart.");
    }
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
          <div className="flex w-5 gap-2 items-center">
            <h2 className="font-bold text-xl">${data.price}</h2>
            <h2 className="font-bold text-xl text-[#c0bebc86] line-through">
              ${Number(data.price) + Number(data.price) * 0.3}
            </h2>
            <p className="text-[#d82c2c] bg-[#ca3a3a61] rounded-full p-1 text-sm">
              -30%
            </p>
          </div>
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
                cursor: "pointer",
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
                  checked={size === selectedSize}
                  onChange={() => setSelectedSize(size)}
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
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
