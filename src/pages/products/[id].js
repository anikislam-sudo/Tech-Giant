/* eslint-disable react/jsx-key */
import ProductReview from "@/Components/ui/ProductReview";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductDetailPage = ({ product }) => {
  const router = useRouter();
  
  const { id } = router.query;

  const {
  
    name,
    category,
    price,
    description,
    status,
    rating,
    averageRating,
    keyFeatures,
    reviews,
    image,
  } = product || {};

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
    <div className="p-3 mt-5 md:mt-10 container mx-auto min-h-screen">
      <div className="xl:flex">
        <div className="xl:flex-1">
          <div className="flex-1 relative w-full max-w-sm h-80 mx-auto">
            <Image className="object-cover" fill={true} src={image} alt="" />
          </div>
        </div>
        <div className="xl:flex-1">
          <h2 className="text-lg md:text-2xl font-semibold text-violet-600">
            {name}
          </h2>
          <div className="mt-3">
            <p className="bg-slate-200 text-sm py-1 px-2 rounded-full inline-block my-1">
              Price : <span className="font-medium">{price}</span>
            </p>
            {status == "inStock" ? (
              <p className="bg-slate-200 text-sm py-1 px-2 rounded-full mx-3 inline-block my-1">
                Status : <span className="font-medium">In stock</span>
              </p>
            ) : (
              <p className="bg-slate-200 text-sm py-1 px-2 rounded-full mx-3 inline-block my-1">
                Status : <span className="font-medium ">Out of stock</span>
              </p>
            )}
            <p className="bg-slate-200 text-sm py-1 px-2 rounded-full inline-block my-1">
              Category : <span className="font-medium">{newCategory}</span>
            </p>
          </div>
          <div className="mt-3">
            <p className="flex items-center gap-2">
              Rating :{" "}
              <span className="flex">
                {Array.from({ length: rating }).map((_, index) => (
                  <span className="" key={index}>
                    {createSVGIcon()}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex items-center gap-2">
              Average Rating :{" "}
              <span className="flex">
                {Array.from({ length: averageRating }).map((_, index) => (
                  <span className="" key={index}>
                    {createSVGIcon()}
                  </span>
                ))}
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mt-3 mb-1">Key Features</h3>

            {keyFeatures?.map((feature) => (
              <p className="text-md leading-relaxed">{feature}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        <h3 className="text-xl font-medium mb-1">Description</h3>
        <p className="text-justify  leading-relaxed">{description}</p>
      </div>

      <div className="mt-5">
    <ProductReview id={id}></ProductReview>
      </div>
    </div>
  );
};

export default ProductDetailPage;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:5000/products`);
  const products = await res.json();
  return {
    paths: products.map((product) => ({
      params: { id: product._id },
    })),
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  try {
    const { id } = context.params;
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();

    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);

    return {
      notFound: true, // or handle the error in another way
    };
  }
};