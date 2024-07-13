"use client";
import Products from "@/app/product/page";
import Link from "next/link";
import React, { useState } from "react";

export default function addcart() {
  const [url, seturl] = useState("/image 1.png");
  const [count, setCount] = useState<number>(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <section className="mb-[55px]" style={{ marginBottom: "55px" }}>
      {" "}
      <div className="container flex justify-between ">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <img
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              src={"/image 1.png"}
              alt=""
              className="w-[145px] h-[100px] rounded-xl "
              width={155}
              height={100}
              onClick={() => seturl("/image 1.png")}
            />
            <img
              className="w-[145px] h-[100px] rounded-xl"
              width={155}
              height={150}
              src="/image 2.png"
              alt=""
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              onClick={() => seturl("/image 2.png")}
            />
            <img
              width={155}
              height={100}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              src="/image 3.png"
              alt=""
              onClick={() => seturl("/image 3.png")}
            />
          </div>
          <div>
            <img
              style={{
                width: "400px",
                height: "468px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              className="object-scale-down "
              width={450}
              height={530}
              src={url}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col" style={{ width: "630px", gap: "14px" }}>
          <h2 className="text-4xl">One Life Graphic T-shirt</h2>
          <p>4.5/5</p>
          <p className="text-xl">$260</p>
          <p className="w-[300px]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr />
          <div>
            <p>Select Colors</p>
            <span
              style={{
                borderEndEndRadius: "50%",
                background: "red",
                width: "50px",
                height: "50px",
              }}
            ></span>
            <span
              style={{
                borderEndEndRadius: "50%",
                background: "red",
                width: "50px",
                height: "50px",
              }}
            ></span>
            <span
              style={{
                borderEndEndRadius: "50%",
                background: "red",
                width: "50px",
                height: "50px",
              }}
            >
              {" "}
            </span>
          </div>
          <hr />
          <p>Choose Size</p>
          <div className="join  gap-3">
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="Small"
              style={{ marginRight: "12px" }}
            />
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="Medium"
              style={{ marginRight: "12px" }}
            />
            <input
              className="join-item btn "
              type="radio"
              name="options"
              aria-label="Large"
              style={{ marginRight: "12px" }}
            />
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="X-Large"
            />
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
                className=" disabled:bg-base-200"
                onClick={decrement}
                disabled={count <= 1}
                style={{ zoom: "2" }}
              >
                -
              </button>
            </div>
            <button
              style={{ width: "400px" }}
              className="btn bg-black text-white rounded-full "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <Link href={"/"}> */}
        <Products></Products>
        {/* </Link> */}
      </div>
    </section>
  );
}
