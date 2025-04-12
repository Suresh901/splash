import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function GallerySection() {
  const images = [
    {
      id: 1,
      src: "https://www.intexzone.com/wp-content/uploads/2021/07/26729EH__95586.1622660199-1000x889.jpg",
      alt: "Children with goggles splashing in pool",
    },
    {
      id: 2,
      src: "https://www.greenpeople.co.uk/cdn/shop/articles/swimmer_pool_a4106fb4-9e76-4a63-b12f-d3e11980c960.jpg?crop=center&height=490&v=1741081224&width=817",
      alt: "Instructor with child in swimming pool",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4ebe7P9NbFPsrgPCDdI8uRWiFvJ2YEheYg&s",

      alt: "Children with floaties at pool edge",
    },
    {
      id: 4,
      src: "https://img.redbull.com/images/c_crop,x_993,y_0,h_3328,w_2662/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/04/04/4a7ce898-8130-4492-b09f-8e150f3bb618/swimmer-pool-lanes",

      alt: "Child with green goggles and float tube",
    },
    {
      id: 5,
      src: "https://backyardpoolpatio.com/wp-content/uploads/2025/03/Health-Benefits-Owning-Pool.webp",

      alt: "Mother and baby in swimming pool",
    },
    {
      id: 6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OkaXjhChcMihTHin2Tgg3TU4nSjc1_K0JCCN68dxBvGbcttOWYMBHTX5NUAPZ0IkWFc&usqp=CAU",

      alt: "Mother and baby with blue swimming cap",
    },
    {
      id: 7,
      src: "https://cdn.prod.website-files.com/5ec69091eb8d32a971f6a1b1/5efa8bfab0171b1b25678b40_NKN2019-Nehalem-020-BrokenBanjo.jpg",

      alt: "Mother and baby with blue swimming cap",
    },
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">OUR GALLERY</h2>
          <div className="flex items-center justify-center">
            <div className="h-px bg-blue-200 w-16"></div>
            <div className="mx-2 h-4 w-4 rounded-full bg-blue-500"></div>
            <div className="h-px bg-blue-200 w-16"></div>
          </div>
        </div>

        {/* Masonry Gallery */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 3, 1024: 4 }}
        >
          <Masonry gutter="16px">
            {images.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto block hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
