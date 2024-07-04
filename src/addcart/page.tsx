"use client";
import React, { useState } from "react";

export default function addcart() {
  const [url, seturl] = useState(
    "https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTm20l9BaCMSc-Ov0ds0cxv7RESTMeACk3DMCEPfYAPWz9OdbKtplyAIA~MR2Gjj35EJ8frbr84v~isUCozdOw0Ulyi9OPlxuKSJMCDwPh3aVCZJ1ftgodbr9mvYPwzWScMDSw3nHR9avMYzMZSYx1dLWg4K~YCTh0ucziyZNSFxymmV~JCOK3jJJKDKm4hpL52Fh3SwT6Nh5gU5OI29RVHmrt2WaKCOHQRg3kdtV4sIv6HaHqY88dt9wa8hno5KcOf0mp13QJkqLuoi9DOj~-I4wkZlXj2vdSw2ob9u6k9m-GENsPuOf-ISfUN1CqjmumZ7sKuSny2gZz5KSuHf8g__"
  );
  return (
    <section className="mb-[55px]">
      {" "}
      <div className="container">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <img
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
              className="w-[145px] h-[100px] rounded-xl "
              width={155}
              height={100}
              src="https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HygkpS2ut-6re7xsSlK3BlAXia6u3K7A-KFdzd6RJadG6dYInNoNpPx4XE8FZar~hZynpDRYmaKa~DbzJcdsVPHeMqfeiJfXNasV-Mm4pmyb2DB-Yqpzx4Dg2VhTCgp1c47~X7XTVlV7Je1bNayDUvmxvh6kK-NTjmxhiSvKjjmW0UrN0lralE6oYdd76XuIbMODI21nuavJBjKRkhJwRQcko0YHaaxb~YpUBQTQKUT-Zfut7nOBTv0LGpz0Px7MvksaD7EGwdfQtVxUhtX~0Eihl0lRy~Jn-BWq8exBBKzauIVmMSE9mAqHk-fLgoyMKDLtbBDnhkYTmXrNQWEdKA__"
              alt=""
              onClick={() =>
                seturl(
                  "https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HygkpS2ut-6re7xsSlK3BlAXia6u3K7A-KFdzd6RJadG6dYInNoNpPx4XE8FZar~hZynpDRYmaKa~DbzJcdsVPHeMqfeiJfXNasV-Mm4pmyb2DB-Yqpzx4Dg2VhTCgp1c47~X7XTVlV7Je1bNayDUvmxvh6kK-NTjmxhiSvKjjmW0UrN0lralE6oYdd76XuIbMODI21nuavJBjKRkhJwRQcko0YHaaxb~YpUBQTQKUT-Zfut7nOBTv0LGpz0Px7MvksaD7EGwdfQtVxUhtX~0Eihl0lRy~Jn-BWq8exBBKzauIVmMSE9mAqHk-fLgoyMKDLtbBDnhkYTmXrNQWEdKA__"
                )
              }
            />
            <img
              className="w-[145px] h-[100px] rounded-xl "
              width={155}
              height={100}
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
              className="object-scale-down "
              width={450}
              height={530}
              src={url}
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
