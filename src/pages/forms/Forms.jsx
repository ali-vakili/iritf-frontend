import React, { useState, useEffect } from "react"
import PaginatedItems from "../../shared/components/paginate/Pagination";
import SideBar from "../../shared/components/sideBar/SideBar";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { setPageTittle } from "../../utils/SetTittle";
import { useParams } from 'react-router-dom';



const Forms = () => {
  const [forms, setForms] = useState();

  const { id } = useParams();


  const getData = async () => {
    const result = await axios
      .get(
        '/admin/forms/list', {
          withCredentials: true,
        }
      )
      .then(
        ((res) => res.data)
      )
      .catch((err) => err.response);

    if (result.statusCode === 200) id ?  setForms(filterForms(id, result.data.forms)) : setForms(result.data.forms);
  }

  useEffect(() => {
    setPageTittle("فرم ها")
    getData();
  }, []);

  const filterForms = (id ,data) => {
    const filteredForms = data.filter((form) => {
      return form.category._id === id
    })
    return filteredForms;
  }

  return (
    <>
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          {forms && <PaginatedItems itemsPerPage={10} data={forms} page="forms"/>}
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </>
  )
}

export default Forms;