"use client";
import useGetData from "@/app/hooks/usegetdata";
import React from "react";

export default function Cart() {
  const { data } = useGetData("cart", false);
  const data7: any = data[0]?.instruct;
  console.log(data7);

  if (data7) {
    data7.map((data: any) => console.log(Object.keys(data)));
  } else {
    console.log("No instruct data available or instruct is empty");
  }

  return <div>Cart</div>;
}
