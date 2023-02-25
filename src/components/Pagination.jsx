import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, ind) => start + ind);

function Pagination({ pageSize, currPage, totalCount, onPageChange }) {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const paginationRange = range(1, totalPageCount);

  return (
    <div>
      <ul className="flex items-center">
        <li
          className="cursor-pointer"
          onClick={() => {
            if (currPage > 1) onPageChange(currPage - 1);
          }}
        >
          <FaAngleLeft />
        </li>
          
        {paginationRange.map((pageNumber, ind) => {
          return (
            <li
              className={`${currPage==pageNumber? "bg-red-600":""} w-6 text-center cursor-pointer`}
              key={ind}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}

        <li
          className="cursor-pointer"
          onClick={() => {
            if (currPage < totalPageCount) onPageChange(currPage + 1);
          }}
        >
          <FaAngleRight />
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
