import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "./Video.module.scss";
import { Empty } from "antd";

const VideoHome = ({ data }) => {
  return (
    <Row className={styles.row}>
      {data?.videos.length > 0 ? (
        <Col>
          <>
            {data && data.length > 0 ? (
              <div className={styles.videoContainer} key={data?.videos[0]?._id}>
                <div className="my-3 mt-4 w-100">
                  <h5 style={{ color: "#4D4D4D" }}>{data?.videos[0]?.title}</h5>
                </div>
                <video
                  className={styles.video}
                  src={`${process.env.REACT_APP_API_URL}/${data?.videos[0]?.videos[0]}`}
                  controls
                />
              </div>
            ) : (
              <h4 className="text-info mt-3">ویدیویی وجود ندارد</h4>
            )}
          </>
        </Col>
      ) : (
        <Empty className="mt-4" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Row>
  );
};

export default VideoHome;
