import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Faq = (props) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <>
      <div className="faq-container">
        <div
          onClick={() => setShowAnswer(!showAnswer)}
          className="faq-container1"
        >
          <h4 className="faq-text h4d">{props.heading}</h4>
          {!showAnswer && (
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="faq-image"
            />
          )}
          {showAnswer && (
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="faq-image1"
            />
          )}
        </div>
        {showAnswer && <p className="faq-text1 p2">{props.text}</p>}
      </div>
      <style jsx>
        {`
          .faq-container {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 816px;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .faq-container1 {
            gap: var(--dl-space-space-2);
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .faq-text {
            color: var(--dl-color-ui-400);
            width: 100%;
            transition: 0.3s;
          }
          .faq-text:hover {
            color: var(--dl-color-ui-100);
            cursor: pointer;
          }
          .faq-image {
            align-self: center;
            object-fit: cover;
          }
          .faq-image1 {
            align-self: center;
            object-fit: cover;
          }
          .faq-text1 {
            color: var(--dl-color-ui-0);
          }
          @media (max-width: 479px) {
            .faq-text {
              font-size: 24px;
              line-height: 150%;
            }
          }
        `}
      </style>
    </>
  )
}

Faq.defaultProps = {
  image_alt1: 'image',
  heading: 'What Is Your Question?',
  image_alt: 'image',
  text: 'Write your answer here.',
  image_src1: '/icons/arrow-up.svg',
  image_src: '/icons/arrow-down.svg',
}

Faq.propTypes = {
  image_alt1: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
}

export default Faq
