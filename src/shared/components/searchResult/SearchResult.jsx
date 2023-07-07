import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SideBar from '../sideBar/SideBar';
import PaginatedItems from '../paginate/Pagination';
import axios from 'axios';


const SearchResult = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const { id } = useParams();

  const handleSearch = async () => {
    const result = await axios
      .get(
        `/admin/news/list/search`, {
          withCredentials: true,
          params: {search: id}
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) setData(result.data.news)
    else setError(result.data.message)
  }

  useEffect(() => {
    handleSearch();
  },[])

  return(
    <Row className='m-0'>
      <Col lg={8} className="ps-lg-4 p-0">
        {data && <PaginatedItems itemsPerPage={10} data={data} page="news"/>}
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
  )
}

export default SearchResult;