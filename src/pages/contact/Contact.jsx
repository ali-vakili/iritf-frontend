import React from "react"
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import { Col, Row } from "react-bootstrap";
import PhoneIcon from '@mui/icons-material/Phone';
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import { setPageTittle } from "../../utils/SetTittle";


const Contact = () => {
  setPageTittle("تماس")
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
          <h6 className="mt-3">تبریز نصف راه خیابان ورزش مجموعه ورزشی شیخ محمد خیابانی</h6>
          <div className="mt-3">
            <span><h6 className="d-inline px-2">09999345727</h6></span>
            <PhoneIcon />
          </div>
          <div className="d-flex justify-content-end w-100 share mt-4">
            <h6>به اشتراک بگذارید</h6>
          </div>
        </Col>
      </Row>
    </section>
  );
}
 
export default Contact;