import React from 'react'

import PropTypes from 'prop-types'

const IWantCta = (props) => {
  return (
    <>
      <div className={`i-want-cta-container ${props.rootClassName} `}>
        <button
          type="button"
          className="i-want-cta-button p2 button-primary-cta"
        >
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="i-want-cta-image"
          />
          <p className="p2">{props.text}</p>
        </button>
      </div>
      <style jsx>
        {`
          .i-want-cta-container {
            display: flex;
            position: relative;
          }
          .i-want-cta-button {
            width: 100%;
          }
          .i-want-cta-image {
            width: auto;
            object-fit: cover;
          }

          .i-want-cta-root-class-name3 {
            width: 100%;
          }

          @media (max-width: 479px) {
            .i-want-cta-root-class-name {
              width: 100%;
            }
            .i-want-cta-root-class-name1 {
              width: 100%;
            }
            .i-want-cta-root-class-name2 {
              width: 100%;
            }
            .i-want-cta-root-class-name4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

IWantCta.defaultProps = {
  text: 'Yes, I Want This!',
  imageSrc: '/icons/arrow-right.svg',
  imageAlt: 'image',
  rootClassName: '',
}

IWantCta.propTypes = {
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default IWantCta
