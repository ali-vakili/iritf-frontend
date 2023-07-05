import React, { useState } from "react"
import ReactPaginate from "react-paginate";
import NewsList from "../../../pages/news/NewsList";
import { Col, Row } from "react-bootstrap";
import RanksList from "../../../pages/ranks/RanksList";


const PaginatedItems = ({ itemsPerPage, data, page }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.length ? (
        <>
          {page === "news" && <NewsList currentItems={currentItems} />}
          {page === "ranks" && <RanksList currentItems={currentItems} />}
          <Row>
            <Col>
              <ReactPaginate
                nextLabel="بعدی"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="قبلی"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </Col>
          </Row>
        </>
      ): (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "150px" }}
        >
          <h2 className="text-info">اطلاعاتی یافت نشد :(</h2>
        </div>
      )
      }
    </>
  );
}

export default PaginatedItems;