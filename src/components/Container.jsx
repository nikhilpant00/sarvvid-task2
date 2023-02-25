import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import Product from "./Product";
import Pagination from "./Pagination";

const URL = "https://jsonplaceholder.typicode.com/users";

function Container() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(URL);
      setData(request.data);
    };

    fetchData();
  }, []);

  const pageSize = 3;

  const [currPage, setCurrPage] = useState(1);

  const currPageData = useMemo(() => {
    const pageFirstIndex = (currPage - 1) * pageSize;
    const pageLastIndex = pageFirstIndex + pageSize;
    // console.log(
    //   "fired",
    //   pageFirstIndex,
    //   pageLastIndex,
    //   data.slice(pageFirstIndex, pageLastIndex)
    // );
    return data.slice(pageFirstIndex, pageLastIndex);
  }, [currPage, data]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-9/12">
        {currPageData.map((company) => {
          return <Product key={company.id} props={company} />;
        })}
      </div>

      <Pagination
        pageSize={pageSize}
        currPage={currPage}
        totalCount={data.length}
        onPageChange={(page) => setCurrPage(page)}
      />
    </div>
  );
}

export default Container;
