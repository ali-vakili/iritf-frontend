import React, { useState, useEffect } from "react"
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';



const Clubs = () => {
  const [clubs, setClubs] = useState();
  const [error, setError] = useState();

  const { id } = useParams();

  const getData = async () => {
    setError('')
    const result = await axios
      .get(
        '/admin/clubs/list', {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) id ? setClubs(filterClubs(id ,result.data.clubs)) : setClubs(result.data.clubs);
    else (setError(result.data.message))
  }

  const filterClubs = (id ,data) => {
    const filteredClubs = data.filter((club) => {
      return club.category._id === id
    })
    return filteredClubs;
  }

  useEffect(() => {
    setPageTittle("باشگاه ها")
    getData();
  }, []);

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          {clubs && <PaginatedItems itemsPerPage={10} data={clubs} page="clubs"/>}
          {error && (
            <div className="d-flex justify-content-center">
              <h3>{error}</h3>
            </div>
          )}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default Clubs;