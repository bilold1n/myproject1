"use client";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  DocumentData,
  QuerySnapshot,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/config";

// Error interfeysini yaratamiz
interface Error {
  status: boolean;
  message: string;
}
export default function useGetData(collectionName: string, fresh: boolean) {
  const [data, setData] = useState<DocumentData[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<Error>({ status: false, message: "" });

  useEffect(() => {
    const getData = async () => {
      try {
        const documents: DocumentData[] = [];
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
          collection(db, collectionName)
        );
        querySnapshot.forEach((doc) => {
          collectionName === "cart"
            ? documents.push(doc.data())
            : documents.push({ id: doc.id, ...doc.data() });
        });
        setData(documents);
      } catch (error: any) {
        setError({ status: true, message: error.message });
      } finally {
        setIsPending(false);
      }
    };

    getData();
  }, [fresh]);

  return { data, isPending, error };
}
