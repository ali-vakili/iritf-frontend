import React, { useState, useEffect } from "react"
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';



const Committees = () => {
  const [committees, setCommittees] = useState();

  const { id } = useParams();

  const getData = async () => {
    const result = await axios
      .get(
        '/admin/committees/list', {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) id ? setCommittees(filterCommittees(id ,result.data.committees)) : setCommittees(result.data.committees);
  }

  const filterCommittees = (id ,data) => {
    const filteredCommittees = data.filter((committee) => {
      return committee.category._id === id
    })
    return filteredCommittees;
  }

  useEffect(() => {
    setPageTittle("کمیته ها")
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          {committees && <PaginatedItems itemsPerPage={10} data={committees} page="committees"/>}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default Committees;