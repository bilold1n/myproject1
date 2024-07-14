import React from "react";
import Addcart from "@/addcart/page";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config";
export default async function product({ params }: any) {
  console.log(params?.id);
  const docRef = doc(db, "products", params?.id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  console.log(params?.id);
  return (
    <section>
      <Addcart data={docSnap.data()}></Addcart>
    </section>
  );
}
