import React from "react";
import Products from "../page";
import Link from "next/link";
import Addcart from "@/addcart/page";
export default function product({ params }: any) {
  console.log(params?.id);
  return (
    <section>
      <Addcart></Addcart>
    </section>
  );
}
