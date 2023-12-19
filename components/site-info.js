import React from 'react'

import PropTypes from 'prop-types'

const SiteInfo = (props) => {
  return (
    <>
      <div className="site-info site-info-site-info">
        <div className="site-info-container">
          <div className="site-info-container1">
            <h2 className="site-info-text">{props.site_name}</h2>
            <img
              alt={props.arrow_new_tab}
              src="/icons/big-arrow-top-right-white.svg"
              className="site-info-pasted-image arrow-tab"
            />
          </div>
          <span className="site-info-text1">{props.site_desc}</span>
        </div>
        <img
          alt={props.pastedImage_alt}
          src={props.site_logo}
          className="site-info-pasted-image1"
        />
      </div>
      <style jsx>
        {`
          .site-info-container {
            gap: 2rem;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .site-info-container1 {
            gap: 1rem;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .site-info-text {
            color: var(--dl-color-ui-0);
            font-size: 80px;
            font-family: 'Inter';
            font-weight: 800;
            line-height: 1;
            letter-spacing: -3px;
            text-transform: none;
            text-decoration: none;
          }
          .site-info-pasted-image {
            display: none;
          }
          .site-info-text1 {
            color: var(--dl-color-ui-0);
            font-size: 32px;
            font-family: 'Inter';
            font-weight: 500;
            line-height: 150%;
            letter-spacing: -1px;
            text-transform: none;
            text-decoration: none;
          }
          .site-info-pasted-image1 {
            width: 320px;
            height: 320px;
            aspect-ratio: 1;
          }
          @media (max-width: 767px) {
            .site-info-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .site-info-container {
              gap: 0.5rem;
            }
            .site-info-pasted-image1 {
              width: 160;
              height: 160;
            }
          }
        `}
      </style>
    </>
  )
}

SiteInfo.defaultProps = {
  site_logo: '/Logos/vackground-dashed-logo.svg',
  arrow_new_tab: 'pastedImage',
  site_desc: 'Lorem ipsum dolor site amet!',
  site_name: 'Website',
  pastedImage_alt: 'pastedImage',
}

SiteInfo.propTypes = {
  site_logo: PropTypes.string,
  arrow_new_tab: PropTypes.string,
  site_desc: PropTypes.string,
  site_name: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default SiteInfo
