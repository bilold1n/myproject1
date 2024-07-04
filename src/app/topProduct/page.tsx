import React from "react";

export default function topProducts() {
  const data = [
    {
      name: "VERTICAL STRIPED SHIRT",
      rating: "5",
      price: 212,
      image:
        "https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9WpOMniQN9tGWxt-zuevJ~I6vIbfN6iTxl9K1w2cnU2awQ8PtNVPsuA37FUlBI3d1QWO1HXHJFXYBUVSSc4fcIt3~K9-tzQcf0DepwARw8~EbkVkyUnTxcb5E3EPItPVG0XbgJth3lWob2hcI~6hFtWk6e1OvJYW~jE93SEfl14eBO2EB1mLzqzI7RMqXDFlX8GnLyQ5GTFX0PotI~zPbExRTVLjf3mF2yt2KfCz29u-bqhP6gt8RIQE1oZXOAJ6~nPQ4RcYIeg0XGDbyK0XIr2-vQuMxg2vCJ8lJG3TFtFhUBYb5nRFlsyGhoHd2nqLj~jFtdlYGT8xGv3GjOQWA__",
    },
    {
      name: "COURAGE GRAPHIC T-SHIRT",
      rating: "4",
      price: 145,
      image:
        "https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KpvtbvpXqLbgBwWq7yLLkWErr8wgR0LNtyQYvBUCxXMZLi1MUXFfECCMWVUe~v9TcahOIIuH8dbV2tjOgISOs-PWS2N~icqLrBu6WFjEHebNocWPn0WMeJoWWQohyfS~P7KnEpmFF0MF5DFSqGhMASiwF1ciZ3QvFJUvZiBqfdKp9IGpX42A4h7tu2rfVGeP6F3zPVLoMiIqjx3klXSZEhfhkJMAS7te7sIouLHyt955NBzq174r58B~iHAQwQ3iuWZ30ZWAUPq1qKnKEBsYwLaVZ48PLcg4rEsqzBKRm2y3-RsDnyP9z~XYMCRgWHkCGDx4HJFAMVTEQXFsZ6-QHA__",
    },
    {
      name: "LOOSE FIT BERMUDA SHORTS",
      rating: "3",
      price: 80,
      image:
        "https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5lndIegHHdLPhUJ5EkmrhimwcgAaOV7I804p4LCjGu7U~XWmUhtA6DL56LenXKzx0A8TK-0yT21iUcwu1YWQc52Eo2FwiHrIHDKoyvlQcu7k50brwCNQQKf67wwp-Jxn-iNMxuK1M4VfPIugkwd57ts9QoHQrh65vQIMTERPyychZHBfKlCigJp4DlbAnfa5XRcstrvkpXgxj5wQqihEBTRlppS1j~v53VWDAdBuasnJuKD4eUiqtP5N~u0zq~RO-YqbPbzuYqK5WxJ-gNQV4qg7FQbgoDcW06zsq7d3A7Tdt95NsheJe32rgIiJlXR64~RHDWv8E3SapQDprzUzA__",
    },
    {
      name: "FADED SKINNY JEANS",
      rating: "4.5",
      price: 210,
      image:
        "https://s3-alpha-sig.figma.com/img/f180/c768/08e2ff8a46be56aa933f031aed3abe75?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WWW38nNPt0-KbM6cFRQa0hpe~XNldWTQLCmZaz0VmcCqGChhVKCMhfviE7uc40NXWB4UDvoYzIdR8-m1qevIV1phVP9y16VjweLokvCoZ-cB4ychdrvQl7D5KRNMgCVdQKOIIxB4WDVwXVXRB3ltKVTKaO-nUnFU2jBLm8~GQ0ZqAnTtdhhP8lVmpsIBmNVVmNNKpOEtVIe7u6v-H5~V749tfZlFMGb5IryHFka--Eyr0u8LG0A6BWU55-MyLxqhec3Rdt88BParcM~cI46oqcJw11oP1J4R6TD09t4ZXdMIi5o7DOSVDIp7cQf1LjuvcUJOum7jES2Z~y7KCbUhjg__",
    },
  ];
  return (
    <section>
      <div className="container">
        <h1 className="w-full text-center text-5xl my-[72px]">TOP SELLING</h1>
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
      </div>
    </section>
  );
}
