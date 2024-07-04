"use client";
import React, { useState } from "react";

export default function addcart() {
  const [url, seturl] = useState(
    "https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTm20l9BaCMSc-Ov0ds0cxv7RESTMeACk3DMCEPfYAPWz9OdbKtplyAIA~MR2Gjj35EJ8frbr84v~isUCozdOw0Ulyi9OPlxuKSJMCDwPh3aVCZJ1ftgodbr9mvYPwzWScMDSw3nHR9avMYzMZSYx1dLWg4K~YCTh0ucziyZNSFxymmV~JCOK3jJJKDKm4hpL52Fh3SwT6Nh5gU5OI29RVHmrt2WaKCOHQRg3kdtV4sIv6HaHqY88dt9wa8hno5KcOf0mp13QJkqLuoi9DOj~-I4wkZlXj2vdSw2ob9u6k9m-GENsPuOf-ISfUN1CqjmumZ7sKuSny2gZz5KSuHf8g__"
  );
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
              src={
                "https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTm20l9BaCMSc-Ov0ds0cxv7RESTMeACk3DMCEPfYAPWz9OdbKtplyAIA~MR2Gjj35EJ8frbr84v~isUCozdOw0Ulyi9OPlxuKSJMCDwPh3aVCZJ1ftgodbr9mvYPwzWScMDSw3nHR9avMYzMZSYx1dLWg4K~YCTh0ucziyZNSFxymmV~JCOK3jJJKDKm4hpL52Fh3SwT6Nh5gU5OI29RVHmrt2WaKCOHQRg3kdtV4sIv6HaHqY88dt9wa8hno5KcOf0mp13QJkqLuoi9DOj~-I4wkZlXj2vdSw2ob9u6k9m-GENsPuOf-ISfUN1CqjmumZ7sKuSny2gZz5KSuHf8g__"
              }
              alt=""
              className="w-[145px] h-[100px] rounded-xl "
              width={155}
              height={100}
              onClick={() =>
                seturl(
                  "https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTm20l9BaCMSc-Ov0ds0cxv7RESTMeACk3DMCEPfYAPWz9OdbKtplyAIA~MR2Gjj35EJ8frbr84v~isUCozdOw0Ulyi9OPlxuKSJMCDwPh3aVCZJ1ftgodbr9mvYPwzWScMDSw3nHR9avMYzMZSYx1dLWg4K~YCTh0ucziyZNSFxymmV~JCOK3jJJKDKm4hpL52Fh3SwT6Nh5gU5OI29RVHmrt2WaKCOHQRg3kdtV4sIv6HaHqY88dt9wa8hno5KcOf0mp13QJkqLuoi9DOj~-I4wkZlXj2vdSw2ob9u6k9m-GENsPuOf-ISfUN1CqjmumZ7sKuSny2gZz5KSuHf8g__"
                )
              }
            />
            <img
              className="w-[145px] h-[100px] rounded-xl"
              width={155}
              height={150}
              src="https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HygkpS2ut-6re7xsSlK3BlAXia6u3K7A-KFdzd6RJadG6dYInNoNpPx4XE8FZar~hZynpDRYmaKa~DbzJcdsVPHeMqfeiJfXNasV-Mm4pmyb2DB-Yqpzx4Dg2VhTCgp1c47~X7XTVlV7Je1bNayDUvmxvh6kK-NTjmxhiSvKjjmW0UrN0lralE6oYdd76XuIbMODI21nuavJBjKRkhJwRQcko0YHaaxb~YpUBQTQKUT-Zfut7nOBTv0LGpz0Px7MvksaD7EGwdfQtVxUhtX~0Eihl0lRy~Jn-BWq8exBBKzauIVmMSE9mAqHk-fLgoyMKDLtbBDnhkYTmXrNQWEdKA__"
              alt=""
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              onClick={() =>
                seturl(
                  "https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HygkpS2ut-6re7xsSlK3BlAXia6u3K7A-KFdzd6RJadG6dYInNoNpPx4XE8FZar~hZynpDRYmaKa~DbzJcdsVPHeMqfeiJfXNasV-Mm4pmyb2DB-Yqpzx4Dg2VhTCgp1c47~X7XTVlV7Je1bNayDUvmxvh6kK-NTjmxhiSvKjjmW0UrN0lralE6oYdd76XuIbMODI21nuavJBjKRkhJwRQcko0YHaaxb~YpUBQTQKUT-Zfut7nOBTv0LGpz0Px7MvksaD7EGwdfQtVxUhtX~0Eihl0lRy~Jn-BWq8exBBKzauIVmMSE9mAqHk-fLgoyMKDLtbBDnhkYTmXrNQWEdKA__"
                )
              }
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
              src="https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMuwAfhtXAivRZaopGYUOT2pOlThSI58XxuPlr6dnfrqsZ~auVFK~GWLargf1OHhRSISr57yRAL2aO6C7jY46LK3LVW9IjXvzXWhy87fQMpxx7S3AifYi9admsJI-kEIs0TVqiPAYgBRqMDu3BcT5IR7VipCsNkPm3H2~DTQyeuMEHY~EuzeVGdIDH~mASKZ2nhBSW6IBjXgc5uVONVNscyGED4hCPY23rbb53XwGt0aY~yD9DenxkEx2VUAfGxI47FRjqLt1ifEACHFqgfy3hTDa74zVCYxjXTMhsoQwODrbcwHIpUZj452OwyPsKD287PlOrbUu2y37yl96I-JYw__"
              alt=""
              onClick={() =>
                seturl(
                  "https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMuwAfhtXAivRZaopGYUOT2pOlThSI58XxuPlr6dnfrqsZ~auVFK~GWLargf1OHhRSISr57yRAL2aO6C7jY46LK3LVW9IjXvzXWhy87fQMpxx7S3AifYi9admsJI-kEIs0TVqiPAYgBRqMDu3BcT5IR7VipCsNkPm3H2~DTQyeuMEHY~EuzeVGdIDH~mASKZ2nhBSW6IBjXgc5uVONVNscyGED4hCPY23rbb53XwGt0aY~yD9DenxkEx2VUAfGxI47FRjqLt1ifEACHFqgfy3hTDa74zVCYxjXTMhsoQwODrbcwHIpUZj452OwyPsKD287PlOrbUu2y37yl96I-JYw__"
                )
              }
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
        <div className="flex flex-col gap-4 " style={{ width: "630px" }}>
          <h2 className="text-4xl">One Life Graphic T-shirt</h2>
          <p>4.5/5</p>
          <p className="text-xl">$260</p>
          <p className="w-[300px]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr />
          <div>
            <p>color</p>
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
            ></span>
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
              className="join-item btn"
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
                padding: "10px",
              }}
              className="flex gap-5 items-center bg-base-200"
            >
              <button
                className="btn btn-primary"
                onClick={increment}
                style={{ marginRight: "10px" }}
              >
                +
              </button>
              <h1>{count}</h1>
              <button
                className="btn btn-primary disabled:bg-base-200"
                onClick={decrement}
                disabled={count <= 1}
              >
                -
              </button>
            </div>
            <button style={{ width: "400px" }} className="btn bg-black ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
