"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface PaginationProps {
  totalPages: number; // Total number of pages
  currentPage: number; // Current active page
  isSelected: boolean;
  children?: React.ReactNode;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  isSelected,
  children,
}) => {
  const router = useRouter();

  // Function to handle page changes
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/cbt/${page}`); // Redirects to the desired page route
    }
  };

  // Generate an array of page numbers based on totalPages
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const selectedStyle = isSelected && "bg-green-500 text-white";

  const previousStyle = () => {
    let style: string;
    if (currentPage === 1) {
      style = "cursor-not-allowed bg-gray-200 text-gray-400";
    } else if (currentPage === totalPages) {
      style = "bg-blue-500 text-white hover:bg-blue-600";
    } else {
      style = "bg-blue-400 text-white hover:bg-blue-500";
    }

    return style;
  };

  return (
    <nav aria-label="Page navigation" className="w-full lg:w-[80%]">
      {/* Previous and Next Buttons */}
      <div className="mb-10 flex justify-between">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`sm:32 flex h-12 w-28 items-center justify-center rounded-lg text-sm font-medium md:w-[10rem] ${previousStyle()}`}
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex h-12 w-28 items-center justify-center rounded-lg text-sm font-medium sm:w-32 md:w-[10rem] ${
            currentPage === totalPages
              ? "cursor-not-allowed bg-gray-200 text-gray-400"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
        {children}
      </div>

      {/* Page Numbers */}
      <ul className="flex flex-wrap justify-center gap-2 text-sm">
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => handlePageChange(page)}
              className={`flex h-10 w-10 items-center justify-center rounded-md ${
                page === currentPage
                  ? "border-blue-300 bg-blue-50 text-blue-600"
                  : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              } border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === page && selectedStyle}`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
