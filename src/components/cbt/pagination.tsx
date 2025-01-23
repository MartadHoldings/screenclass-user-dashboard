"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface PaginationProps {
  totalPages: number; // Total number of pages
  currentPage: number; // Current active page
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
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

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-sm">
        {/* Previous Button */}
        <li>
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`ms-0 flex h-8 items-center justify-center px-3 leading-tight ${
              currentPage === 1
                ? "cursor-not-allowed bg-gray-200 text-gray-400"
                : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            } rounded-s-lg border border-e-0 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {/* <ChevronLeft className="h-4 w-4" /> */}
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => handlePageChange(page)}
              className={`flex h-8 items-center justify-center px-3 leading-tight ${
                page === currentPage
                  ? "border-blue-300 bg-blue-50 text-blue-600"
                  : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              } border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex h-8 items-center justify-center px-3 leading-tight ${
              currentPage === totalPages
                ? "cursor-not-allowed bg-gray-200 text-gray-400"
                : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            } rounded-e-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            Next
            {/* <ChevronRight className="h-4 w-4" /> */}
          </button>
        </li>
      </ul>
    </nav>
  );
};
