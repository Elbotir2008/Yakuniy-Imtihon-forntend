// "use client";
// import React from "react";

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({
//   currentPage,
//   totalPages,
//   onPageChange,
// }) => {
//   const renderPaginationButtons = () => {
//     const buttons = [];

//     for (let i = 1; i <= totalPages; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => onPageChange(i)}
//           className={currentPage === i ? "active" : ""}
//         >
//           {i}
//         </button>
//       );
//     }

//     return buttons;
//   };

//   return <div className="pagination">{renderPaginationButtons()}</div>;
// };

// export default Pagination;
