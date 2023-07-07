import React, { useState } from "react"
import ReactPaginate from "react-paginate";
import NewsList from "../../../pages/news/NewsList";
import { Col, Row } from "react-bootstrap";
import RanksList from "../../../pages/ranks/RanksList";
import ProvincesList from "../../../pages/provinces/ProvincesList";
import FormsList from "../../../pages/forms/FormsList";
import CalendarsList from "../../../pages/calendars/CalendarsList";
import VideosList from "../../../pages/videos/VideosList";
import ReportsList from "../../../pages/reports/ReportsList";
import CommitteesList from "../../../pages/Committees/CommitteesList";
import { Empty } from 'antd';
import ClubsList from "../../../pages/clubs/ClubsList";
import MatchesList from "../../../pages/matches/MatchesList";


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
          {page === "provinces" && <ProvincesList currentItems={currentItems} />}
          {page === "forms" && <FormsList currentItems={currentItems} />}
          {page === "calendars" && <CalendarsList currentItems={currentItems} />}
          {page === "videos" && <VideosList currentItems={currentItems} />}
          {page === "reports" && <ReportsList currentItems={currentItems} />}
          {page === "committees" && <CommitteesList currentItems={currentItems} />}
          {page === "clubs" && <ClubsList currentItems={currentItems} />}
          {page === "matches" && <MatchesList currentItems={currentItems} />}
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
          className="d-flex flex-column algin-items-center align-items-center mb-5"
          style={{ minHeight: "150px" }}
        >
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          <h2 className="text-info">اطلاعاتی یافت نشد :(</h2>
        </div>
      )
      }
    </>
  );
}

export default PaginatedItems;