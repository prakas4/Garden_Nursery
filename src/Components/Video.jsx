import React from 'react'

const Video = () => {
  return (
    <>
    <>
  <div className="header-section my-5" id="video">
    <div
      className="text-center mx-auto wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ maxWidth: 500 }}
    >
      <h1 className="display-5 mb-5">Plant Care Guides</h1>
      <p className="fs-5 fw-bold text-primary">
        Learn how to take care of your plants with our 1-minute guide!
      </p>
    </div>
  </div>
  {/* Video Section */}
  <div className="container video-section">
    <div
      className="video-container wow fadeInUp ratio ratio-16x9"
      data-wow-delay="0.1s"
    >
      <video
        width="100%"
        height="auto"
        controls=""
        autoPlay
        muted
        loop
      >
        <source src="/img/video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</>
</>
  )
}

export default Video