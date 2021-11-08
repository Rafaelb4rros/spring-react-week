type PaginationProps = {
  last: boolean;
  first: boolean;
  page: number;
  changePage: (currentPage: number) => void;
};

export function Pagination({ last, first, page, changePage }: PaginationProps) {
  return (
    <div className="row d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${first ? "disabled" : ""} `}>
            <button onClick={() => changePage(page - 1)} className="page-link">
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page + 1}</span>
          </li>
          <li className={`page-item ${last ? "disabled" : ""} `}>
            <button onClick={() => changePage(page + 1)} className="page-link">
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
