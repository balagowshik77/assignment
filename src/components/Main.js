import React, { useEffect, useState } from "react";
import Loading from "../utils/Loading";

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalEntries, setTotalEntries] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchData();
  }, [page, pageSize]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://fe-test.dev.rampnow.io:8000/api/books?page=${page}&limit=${pageSize}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      setData(responseData.data);
      setTotalEntries(responseData.count);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  const handlePageSizeChange = (event) => {
    const value = event.target.value
  
    setPageSize(parseInt(value));
    setPage(1); // Reset to the first page when page size changes
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  if (loading) return <Loading />;
  if (error) return  <div className="flex items-center justify-center min-w-full min-h-full gap-2">
  <div className="text-xl font-semibold text-black">Error</div>
  <div>{error}</div>
  
  </div>;

  return (
    <div className="w-full bg-[#F8F8F8] py-24 px-8 min-h-full flex flex-col overflow-y-auto">
      <div className="w-full bg-[#FFFFFF] flex flex-col gap-16 min-h-fit  max-h-fit p-16 rounded-xl border-[1px] border-[#0000001f]">
        <div className="flex flex-row justify-start gap-14 items-center">
          <h1 className="text-3xl font-semibold text-[#444444]">Books</h1>
          <div className="flex flex-row gap-4 items-center">
            <label htmlFor="pageSize" className="text-lg font-semibold">
              Page Size:
            </label>
            <select
              className="md:w-fit sm:w-16  border-2 border-black rounded-lg px-2 py-1 text-left"
              id="pageSize"
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              <option disabled={true}>Select page size</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>

            </select>
         
          </div>
        </div>

        <div className="h-96 overflow-auto">
          <table className="w-full text-[#444444] text-left text-xl">
            <thead>
              <tr className=" font-semibold border-t-2 border-[#00000033]">
                <th className="py-6 px-3">ID</th>
                <th className="py-6 px-3">Author</th>
                <th className="py-6 px-3">Country</th>
                <th className="py-6 px-3">Language</th>
                <th className="py-6 px-3">Link</th>
                <th className="py-6 px-3">Pages</th>
                <th className="py-6 px-3">Title</th>
                <th className="py-6 px-3">Year</th>
              </tr>
            </thead>
            <tbody>
              {data.map((book) => (
                <tr key={book.id} className="border-b-2 border-[#0000001e]">
                  <td className="py-6 px-3">{book.id}</td>
                  <td className="py-6 px-3">{book.author}</td>
                  <td className="py-6 px-3">{book.country}</td>
                  <td className="py-6 px-3">{book.language}</td>
                  <td className="py-6 px-3 text-blue-500 underline">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </td>
                  <td className="py-6 px-3">{book.pages}</td>
                  <td className="py-6 px-3">{book.title}</td>
                  <td className="py-6 px-3">{book.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full flex justify-between items-center">
          <span className="font-semibold text-xl">
            Total Entries: {totalEntries}
          </span>
          <span className="flex flex-row gap-2">
            {[...Array(Math.ceil(totalEntries / pageSize)).keys()].map(
              (pageNumber) => (
                <button
                  className={`${
                    page - 1 === pageNumber ? "border-[#020027]" : null
                  } border-[3px] hover:border-[#3f3b8d] border-[#0000001e] rounded-lg px-2 py-1`}
                  key={pageNumber + 1}
                  onClick={() => handlePageChange(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </button>
              )
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
