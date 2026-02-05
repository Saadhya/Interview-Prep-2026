
const Pagination = ({prev, next, currentPage, filtered, totalPages}:any) => {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={prev} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        Page {currentPage} / {totalPages} ({filtered.length} results)
      </span>
      <button onClick={next} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
