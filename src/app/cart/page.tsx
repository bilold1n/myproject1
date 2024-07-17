"use client";
import useGetData from "@/app/hooks/usegetdata";
import React from "react";

export default function Cart() {
  const { data } = useGetData("cart", false);
  const data7: any = data[0]?.instruct;
  // console.log("data", Object.keys(data7));
  return <div>Cart</div>;
}
