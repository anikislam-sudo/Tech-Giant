import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import {
  useProductDetailsQuery,
  useProductReviewMutation,
} from "@/Redux/Features/productReviewApi/productReviewApi";
import Image from "next/image";

const ProductReview = ({ id }) => {
  const [inputValue, setInputValue] = useState("");

  const { data } = useProductDetailsQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(data);

  //const [deleteBook] = useDeleteBookMutation();

  const [postComment, { isLoading, isError, isSuccess }] =
    useProductReviewMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      id: id,
      data: { review: inputValue },
    };

    postComment(options);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleDeleteBook = async () => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(id);
        navigate("/"); // Redirect to books page after deletion
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  return (
    <div className="max-w-7xl    mt-5">
      <h3 className="text-xl font-medium mb-4 ">Comments</h3>
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <div className="min-h-[30px] w-1/2">
          <input
            type="text"
            className="w-full px-4 py-2  rounded-md border border-gray-300"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your comment"
          />
        </div>
        <button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-2xl bg-blue-500 text-white hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </form>
      <div className="mt-10">
        {data?.reviews.map((comment, index) => (
          <div
            key={index}
            className="bg-white p-4 reviewCard  rounded-lg shadow-md mb-4"
          >
            <div className="flex items-center justify-between ">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0">
                <Image
                  src="/5556499.png" // Replace with the actual path to your image in the public directory
                  alt="User Avatar"
                  className="w-8 h-8 pl-1   object-cover"
                  width={25}
                  height={25}
                />
                <p className="mt-2 ml-1 text-sm text-gray-700">User</p>
              </div>

              <button
                onClick={handleDeleteBook}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-3 ml-17"
              >
                <MdDeleteForever />
              </button>
            </div>
            <p className="mt-5 text-gray-800">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
