import axios from "axios";
import { Pagination } from "components/Pagination";
import { useEffect, useState } from "react";
import { formatLocalDate } from "utils/Format";

type sellersResponse = {
  id: number;
  name: string;
};

type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: sellersResponse;
};

type SalePage = {
  content?: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  size?: number;
  empty?: boolean;
};

export function Datatable() {
  const [pages, setPages] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get<SalePage>(
        `${process.env.REACT_APP_BASE_URL}sales?page=${page}&size=20&sort=seller,desc`
      )
      .then((res) => {
        setPages(res.data);
      });
  }, [page]);

  function changePage(currentPage: number) {
    setPage(currentPage);
  }
  return (
    <>
      <Pagination
        page={pages.number}
        last={pages.last}
        first={pages.first}
        changePage={changePage}
      />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {pages.content?.map((page) => (
              <tr key={page.id}>
                <td>{formatLocalDate(page.date, "dd/MM/yyyy")}</td>
                <td>{page.seller.name}</td>
                <td>{page.visited}</td>
                <td>{page.deals}</td>
                <td>{page.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
