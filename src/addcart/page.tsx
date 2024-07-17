"use client";
import { getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase/config";
export default function AddCart({ data7, id }: any) {
  const [url, setUrl] = useState(data7?.image[0]);
  const [count, setCount] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>(data7?.size[0]);
  const [usedata, setUsedata] = useState<any>({});
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    const docRef = doc(db, "cart", user.uid);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUsedata({ ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    });
  }, []);
  console.log(id);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addToCart = async () => {
    const cartItem = {
      color: data7.color,
      size: selectedSize,
      count: count,
    };
    if (user && user.uid) {
      usedata[`${id}`] = { ...cartItem };
      console.log(usedata);
      setDoc(doc(db, "cart", user.uid), { ...usedata });
      alert("Item added to cart.");
    } else {
      alert("User not logged in, cannot add to cart.");
    }
  };
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
    <section className="mb-[55px]" style={{ marginBottom: "55px" }}>
      <div className="container flex justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {data7.image.map((image: string, index: number) => (
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
          <h2 className="text-4xl">{data7.title}</h2>
          <div className="text-yellow-500 mb-2">
            <div className="flex justify-start items-center">
              {renderStars(data7.rating)}
              <span className="text-sm text-gray-500 ml-2">
                {typeof data7.rating === "number"
                  ? data7.rating.toFixed(1)
                  : data7.rating}
                /5
              </span>
            </div>
          </div>
          <div className="flex w-5 gap-2 items-center">
            <h2 className="font-bold text-xl">${data7.price}</h2>
            <h2 className="font-bold text-xl text-[#c0bebc86] line-through">
              ${Number(data7.price) + Number(data7.price) * 0.3}
            </h2>
            <p className="text-[#d82c2c] bg-[#ca3a3a61] rounded-full p-1 text-sm">
              -30%
            </p>
          </div>
          <p className="w-[300px]">{data7.description}</p>
          <hr />
          <div>
            <p>Select Colors</p>
            <span
              style={{
                borderRadius: "50%",
                background: data7.color,
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
            {data7.size.map((size: string, index: number) => (
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
