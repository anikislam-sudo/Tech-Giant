"use client";

import FeatureCategory from "@/Components/ui/FeatureCategory";
import ProductCard from "@/Components/ui/ProductCard";
import SliderItem from "@/Components/ui/SliderItem";


export default function Home({allProducts}) {
  return (
    <div max-w-7xl mx-auto pb-10 min-h-screen>
      <SliderItem></SliderItem>
      <div className="p-4">
        <h2 className="text-center text-2xl font-semibold mb-1 mt-5">
          Fresh Choice,Fresh Deal <br></br> Don’t Delay.
        </h2>
        <p className="text-center text-lg mb-3">Best Choice Of Yours</p>
        <FeatureCategory />
      </div>
      <div className="mt-10">
        <h2 className="text-center text-2xl font-semibold mb-1">
          Popular{" "}
          <span className="text-emerald-400 font-bold px-3">Featured</span>{" "}
          Products
        </h2>
        <p className="text-center text-lg mb-1">Hurry Up!!!</p>
        <p className="text-center mb-3 text-lg">Dont Miss the Deal</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {allProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}


export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:5000/products?featured=true"
  );
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};
