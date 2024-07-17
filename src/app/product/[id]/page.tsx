import React from "react";
import Addcart from "@/addcart/page";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config";
export default async function product({ params }: any) {
  console.log(params?.id);
  const docRef = doc(db, "products", params?.id);
  const docSnap = await getDoc(docRef);
  console.log(params?.id);

  console.log(docSnap.data());
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
  return (
    <section>
      <Addcart data7={docSnap.data()} id={params?.id}></Addcart>
    </section>
  );
}
