import React from "react";

export default function Products() {
  const data = [
    {
      name: "T-SHIRT WITH TAPE DETAILS",
      rating: "4.5",
      price: 120,
      image:
        "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VWPQpqFWrJ9kImwhR~9scbEXY3s3VC2m2a89JsF-1Ll82U2ht1ZBJE8-eAhQjAzE84ZaBH-YYWdJah7oRm3uKc~Q3iG9y0A6hdahIAy-cZ7abRDLaPt~TrzfRtiMY5QL2YNR~gaTmoTH0LgwGdNsbuxbe2YvCjrEFugh8RECvtx3SeMzsyPDqcrrghnG11Nsb53tl8yPTTrWh~Rw4thWuG-mV9B-ATh2VgOgkRk0ONdfz91ai6T8VyZRDe0k4gnta4XtSAhn0oxgy98gE6nu8p-xq0DDVuoZa8TRxVPKae0vjBxjuv6rWiyE8nVK-9MeeV3dHMhIXVa2vwVus9gbyA__",
    },
    {
      name: "SKINNY FIT JEANS",
      rating: "3.5",
      price: 240,
      image:
        "https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKZ5B6GrbDrUtU~8dqLuev6SBPwz4ug40NSkHwxk-TEfU1NvCfkgpZt3~x2qRhmS9tFTDEMVeG03i0xcxbYXdvi6BwzMe3RYHLSHMYcYvvvaCGVSQvl7UxvkQBuyVlAMMXyryv0Fq-6CRlhPE65JIqoyKB1IPT0xp-xq0~5nfLoWShPCaLXblG3~RMfxDc8W2yNzUooguUCy~HHtaZYSArHgHqZGC5oc00Ch0o1ifYVkJjU~Am-1VOfkJ0TVZpD8QA9WOISRcmxIGIuDRElzm~R-LoAuORFCUiyjzV34JScy9L4Lfkyj4F00-vQMrs05qS0O-sXjWQPZC8KNKRFSZA__",
    },
    {
      name: "CHECKERED SHIRT",
      rating: "4.5",
      price: 180,
      image:
        "https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YnApBg2VgnNi-iWP5QkPUvxzQkwhNB8pZcrbC7zJI-LfbT4NNcvEux~79EwLCQl3QXYSzw5fAgo1RlHrWq44RbAtMHSwPZB9tB9yxmw~pRpvhGIfATLW1YT15AUEjZwzXq6eohK5IDL94wRiKfZPZJywVOuZGxFa9scH26ftRZReOzpXrIPtjMKtuoWCxEzMoN32CWABZdww3r-BHkEwcWbCQy6E2FrXKKg-dV6~J0P89mSMtjy8K~nzjiP5s1yvxK0P2k1OKV9lk5dvEnuWGlsbMkG7wrGrsH4B95btFeMaKEyZoxgg6YR7UpLM-1J54ef5Zd29h-o6n1IMIKUyPQ__",
    },
    {
      name: "SLEEVE STRIPED T-SHIRT",
      rating: "4.5",
      price: 130,
      image:
        "https://s3-alpha-sig.figma.com/img/3457/42c2/7cc557f42cf1d489f7cc811856b90e9f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q68ykxE~bpsrCieXUnnslEs8p3RIGm7ymJE6LizE8zT3GBO0jrgrEl3QeoNVXgQEf3HTJ7JGnlvHCXstRuEcsqU0s-pNw9Po7yPmEmyWvnK5pMfOSa5wQXrbvMOu4NnAiuVnBwf3cIcZARx9NyOI0QKLoFH9X2ioFwsJBNAKM-mS3kwCOQvyePXqpuW9WSHkOCSAgRlaYPvNCJ3XRmet5Ie8QYau1eubXJRAYGlX8xna5QDYR7DxfufYTaD2Qx~hXiOrhiMhU3aj5~rJW8YzQYF~T1kkPe7p1C9A1hVbosKLM~e8LU-veKNzA-Q4QU2MblRLWypYCMZg6-fnwZ84ag__",
    },
  ];
  return (
    <section>
      <div className="container">
        <h1 className="w-full text-center text-5xl my-[72px]">NEW ARRIVALS</h1>
        <div className="mygrid">
          {data.map(({ name, rating, price, image }) => (
            <div className="card card-compact bg-base-100 w-[280px] shadow-xl">
              <figure>
                <img
                  className="w-[295px] h-[300px]"
                  src={image}
                  alt="Shoes"
                  width={295}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="text-sm">{name}</h2>
                <p>{rating}/5</p>
                <p>${price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex item-center justify-between w-full mx-auto mt-[35px] mb-[64px]">
          <button className="mx-auto btn btn-outline rounded-full w-[220px]">
            View All
          </button>
        </div>
        <hr />
      </div>
    </section>
  );
}
