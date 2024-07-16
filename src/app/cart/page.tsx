"use client";
import useGetData from "@/app/hooks/usegetdata";
import React, { useEffect } from "react";

export default function Cart() {
  const { data } = useGetData("cart", false);
  console.log("data", Object.keys(data[0]));

  console.log(data);
  return <div>Cart</div>;
}
