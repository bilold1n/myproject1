import Products from "./product/page";
import TopProducts from "./topProduct/page";
export default function Home() {
  return (
    <main className="mb-10">
      <section className="bg-base-200 ">
        {" "}
        <div className="container flex  justify-between pt-3">
          <div className=" flex flex-col  gap-5 ">
            <div className="w-[590px] flex flex-col gap-5 ">
              <h1 className="font-medium bold   text-6xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
            </div>
            <button className="w-[120px] btn bg-black text-white">
              Shop Now
            </button>
            <div>
              <div className="stats stats-vertical lg:stats-horizontal p-0 m-0 bg-base-200">
                <div className="stat">
                  <div className="stat-value">200+</div>
                  <div className="stat-desc">International Brands</div>
                </div>

                <div className="stat">
                  <div className="stat-value">2,000+</div>
                  <div className="stat-desc">High-Quality Products</div>
                </div>

                <div className="stat">
                  <div className="stat-value">30,000+</div>
                  <div className="stat-desc">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div>
            <img
              style={{ height: "450px" }}
              src="/Rectangle 2.png"
              alt="rasm"
              width={600}
              height={3000}
            />
          </div>
        </div>
      </section>
      <section className="bg-black ">
        <div className="flex w-full items-center justify-center  gap-[110px] container py-[25px]">
          <img src="zara.png" alt="rasm" />
          <img src="gucci.png" alt="rasm" />
          <img src="prada.png" alt="rasm" />
        </div>
      </section>
      <Products data7={"NEW ARRIVALS"} />
      <TopProducts />
      <section>
        <div className="container bg-base-200 rounded-[20px] py-9">
          <h2 className="text-5xl text-center mt-[70px] mb-[65px]">
            BROWSE BY dress STYLE
          </h2>
          <div className="flex flex-col w-full gap-5 items-center justify-between">
            <div className="flex gap-5 items-center">
              <img src="/casual.png" alt="" />
              <img src="/formal.png" alt="" />
            </div>
            <div className="flex gap-5 items-center">
              <img src="/party.png" alt="" />
              <img src="/gym.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
