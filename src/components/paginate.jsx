import React from "react";
import _ from "lodash";

const Paginate = ({ itemCount, perPage, currentPage, onPageChange }) => {
  const count = Math.ceil(itemCount / perPage);
  console.log(count);
  if (count === 1) return null;
  const pages = _.range(1, count + 1);
  return (
    <nav className="mt-3">
      <ul className="pagination d-flex justify-content-center">
        {pages.map(page => (
          <li
            className={"page-item " + (currentPage === page ? "active" : "")}
            key={page}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
