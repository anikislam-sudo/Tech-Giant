import SelectProductCard from "@/Components/ui/SelectProductCard";

const selectStoragePage = ({ storages }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="mt-5">
        <h2 className="text-center text-lg font-semibold mb-3">Storage</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {storages?.map((product) => (
            <SelectProductCard
              product={product}
              key={product._id}
            ></SelectProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default selectStoragePage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://tech-server-4ma6.vercel.app/products?category=storage"
  );
  const data = await res.json();
  return {
    props: {
      storages: data,
    },
  };
};
