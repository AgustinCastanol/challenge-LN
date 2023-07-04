import PropTypes from "prop-types";

export function Pagination ({totalPages, currentPage, setCurrentPage}) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination__page ${
            currentPage === page ? "pagination__page--active" : ""
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};