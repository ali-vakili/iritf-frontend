import React from "react"
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import { Col, Row } from "react-bootstrap";
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import SideBar from "../../shared/components/sideBar/SideBar";


const About = () => {
  return ( 
    <section className="contact-us-section">
      <Row className='m-0'>
        <Col lg={8} className="ps-lg-4 p-0">
          <BreadcrumbsCustom >
            <StyledBreadcrumb
              label="درباره ما"
            />
          </BreadcrumbsCustom>
          <SectionTitle title={"درباره ما"} />
          <div className="d-flex justify-content-end mt-3">
            <h6>فدراسیون تنیس جمهوری اسلامی ایران</h6>
          </div>
          <div className="d-flex justify-content-end mt-5 w-100 share">
            <h5>به اشتراک بگذارید</h5>
          </div>
        </Col>
        <Col lg={4} className="left-side-content p-0">
          <SideBar/>
        </Col>
      </Row>
    </section>
  );
}
 
export default About;