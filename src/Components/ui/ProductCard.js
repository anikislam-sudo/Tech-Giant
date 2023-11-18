import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const { _id, name, category, price, image, status, rating } = product || {};

  let newCategory = null;
  if (category === "cpu") {
    newCategory = "Processor";
  }
  if (category === "motherboard") {
    newCategory = "Motherboard";
  }
  if (category === "ram") {
    newCategory = "Ram";
  }
  if (category === "psu") {
    newCategory = "Power Supply";
  }
  if (category === "storage") {
    newCategory = "Storage";
  }
  if (category === "monitor") {
    newCategory = "Monitor";
  }
  if (category === "others") {
    newCategory = "Others";
  }

  let newStatus = null;
  if (status === "inStock") {
    newStatus = "In Stock";
  }
  if (status === "outOfStock") {
    newStatus = "Out Of Stock";
  }
  const router = useRouter();

  const createSVGIcon = () => (
    <svg
      className="rating-icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 20"
      fill="orange"
      height="15px"
      width="15px"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );

  return (
    <div
      onClick={() => router.push(`/products/${_id}`)}
      className="max-w-[270px] w-full mx-auto border-gray-300 bg-white rounded-lg shadow-lg border cursor-pointer flex flex-col gap-2 justify-between relative group product-card"
    >
      <div className="h-[240px] relative">
        <Image
          fill={true}
          className="object-cover rounded-md"
          src={image}
          alt=""
        />
        <span
          className={`${
            product.status === "inStock" ? "text-green-700" : "text-red-600"
          } font-semibold bg-[#059669] text-white absolute pr-2 rounded-t-lg `}
        >
          {newStatus}
        </span>
      </div>
      <div className="px-2">
        <h1 className="mt-1 mb-2 font-serif font-bold text-black">{name}</h1>
      </div>

      <div className="p-2">
        <div className="flex justify-between">
          <span className="text-black font-serif">{newCategory}</span>
        </div>
        <div className="flex justify-between mt-3">
          <span className="flex">
            {Array.from({ length: rating }).map((_, index) => (
              <span className="bg-slate-200" key={index}>
                {createSVGIcon()}
              </span>
            ))}
          </span>
          <span className="font-semibold text-red-500">
            {product.price} <span className="">/-</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
