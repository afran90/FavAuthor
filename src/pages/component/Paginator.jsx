export const Paginator = ({ currentPage, totalPages, onPageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
  
    const handleFirstPage = () => {
      onPageChange(1);
    };
  
    const handlePrevPage = () => {
      onPageChange(currentPage - 1);
    };
  
    const handleNextPage = () => {
      onPageChange(currentPage + 1);
    };
  
    const handleLastPage = () => {
      onPageChange(totalPages);
    };
  
    return (
      <div className="paginator">
        <button onClick={handleFirstPage} disabled={isFirstPage}>
          First
        </button>
        <button onClick={handlePrevPage} disabled={isFirstPage}>
          Prev
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={isLastPage}>
          Next
        </button>
        <button onClick={handleLastPage} disabled={isLastPage}>
          Last
        </button>
      </div>
    );
  };