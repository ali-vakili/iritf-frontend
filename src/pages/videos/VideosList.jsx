import React from "react"
import { Link, useParams } from 'react-router-dom'
import { Card, Col, Row } from "react-bootstrap";
import SectionTitle from "../../shared/components/sectionTitle/SectionTitle";
import BreadcrumbsCustom, {StyledBreadcrumb} from "../../shared/components/breadcrumbs/Breadcrumbs ";
import moment from "moment-jalali";

import "./VideosList.scss"

const VideosList = ({ currentItems }) => {
  const { id } = useParams();

  return (
    <section className="videos-section">
      <Row>
        <Col>
          <BreadcrumbsCustom >
            {id ? (
              <>
                <StyledBreadcrumb
                  label="ویدیو ها"
                  component={Link}
                  to={"/videos"}
                />
                <StyledBreadcrumb
                  label={currentItems && currentItems[0].category.name}
                />
              </>
            ) :
              <StyledBreadcrumb
                label="ویدیو ها"
              />
            }
          </BreadcrumbsCustom>
          <SectionTitle title="ویدیو ها" />
          { currentItems && currentItems.map((video) => (
            <Link to={`/videos/${video._id}`} key={video._id}>
              <Card className="mt-3">
                <Card.Body>
                  <Row>
                    <h5>{video.title}</h5>
                    <Row>
                      <div style={{"color":"#767676", "fontSize":"14px"}} className="mb-2 date">
                        <h6>{moment(video.createdAt).locale("fa").format("jYYYY/jMM/jDD")}</h6>
                        <span className="mx-2">-</span>
                        <h6><span>{video.category.name}</span></h6>
                      </div>
                    </Row>
                    <Col md={12}>
                      {video.videos.length > 0 && (
                        <video className="video" src={`${process.env.REACT_APP_API_URL}/${video.videos[0]}`} controls/>
                      )}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Link>
          )) }
        </Col>
      </Row>
    </section>
  );
}

export default VideosList;