import React, { useState, useEffect } from "react"
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';



const Ranks = () => {
  const [ranks, setRanks] = useState();

  const { id } = useParams();

  const getDataByCategory = async () => {
    const result = await axios
      .get(
        `/admin/ranks/list-by-category/${id}`, {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setRanks(result.data.rank)
  }

  const getData = async () => {
    const result = await axios
      .get(
        '/admin/ranks/list', {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setRanks(result.data.ranks);
  }

  useEffect(() => {
    setPageTittle("رنکینگ")
    id ? getDataByCategory() : getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          {ranks && <PaginatedItems itemsPerPage={10} data={ranks} page="ranks"/>}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default Ranks;