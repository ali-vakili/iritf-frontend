import React from "react"
import { Row, Col } from 'react-bootstrap';

import styles from "./Video.module.scss"

const VideoHome = ({data}) => {

  return(
    <Row className={styles.row}>
      <Col>
        {data && (
          <div className={styles.videoContainer} key={data.videos._id}>
            <div className="my-3 mt-4 w-100">
              <h5 style={{"color":"#4D4D4D"}}>{data.videos[0].title}</h5>
            </div>
            <video className={styles.video} src={`${process.env.REACT_APP_API_URL}/${data.videos[0].videos[0]}`} controls/>
          </div>
        )}
      </Col>
    </Row>
  )
}

export default VideoHome;