import React, { useState, useEffect } from "react"
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';



const Calendars = () => {
  const [calendars, setCalendars] = useState();

  const { id } = useParams();

  const getDataByCategory = async () => {
    const result = await axios
      .get(
        `/admin/calendars/list-by-category/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setCalendars(result.data.calendars)
  }

  const getData = async () => {
    const result = await axios
      .get(
        '/admin/calendars/list', {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setCalendars(result.data.calendars);
  }

  useEffect(() => {
    setPageTittle("تقویم ها")
    id ? getDataByCategory() : getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          {calendars && <PaginatedItems itemsPerPage={10} data={calendars} page="calendars"/>}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default Calendars;