import React from "react"
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import { Col, Row } from "react-bootstrap";
import PhoneIcon from '@mui/icons-material/Phone';
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";


const Contact = () => {
  return ( 
    <section className="contact-us-section">
      <BreadcrumbsCustom >
        <StyledBreadcrumb
          label="تماس با ما"
        />
      </BreadcrumbsCustom>
      <SectionTitle title={"تماس با ما"} />
      <Row>
        <Col sx={12} className="d-flex flex-column align-items-center mt-4">
          <h4>اطلاعات تماس</h4>
          <h6 className="mt-3"> تهران ، بزرگراه یادگارامام  ، خیابان سئول ، مجموعه ورزشی انقلاب جنب سالن چند منظوره</h6>
          <div className="mt-3">
            <span><h6 className="d-inline px-2">26216247/22039096</h6></span>
            <PhoneIcon />
          </div>
          <h6 className="mt-3">info@iritf.ir</h6>
          <iframe style={{"border": "0","width":"600px", "height":"450px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.6060337936362!2d51.40448380203436!3d35.78513378040337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e076981e49c7f%3A0xd211f92123839199!2z2YHYr9ix2KfYs9uM2YjZhiDYqtmG24zYsyDYrNmF2YfZiNix24wg2KfYs9mE2KfZhduMINin24zYsdin2YY!5e0!3m2!1sen!2sae!4v1614331085709!5m2!1sen!2sae" allowfullscreen="allowfullscreen"></iframe>
          <div className="d-flex justify-content-end w-100 share">
            <h5>به اشتراک بگذارید</h5>
          </div>
        </Col>
      </Row>
    </section>
  );
}
 
export default Contact;