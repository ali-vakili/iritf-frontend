import React, { useState, useEffect } from "react"
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';



const Reports = () => {
  const [reports, setReports] = useState();

  const { id } = useParams();

  const getDataByCategory = async () => {
    const result = await axios
      .get(
        `/admin/reports/list-by-category/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setReports(result.data.reports)
  }

  const getData = async () => {
    const result = await axios
      .get(
        '/admin/reports/list', {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setReports(result.data.reports);
  }

  useEffect(() => {
    setPageTittle("گزارش تصویری")
    id ? getDataByCategory() :getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          {reports && <PaginatedItems itemsPerPage={10} data={reports} page="reports"/>}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default Reports;