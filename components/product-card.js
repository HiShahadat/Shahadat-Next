import React from 'react'

import PropTypes from 'prop-types'

const ProductCard = (props) => {
  return (
    <>
      <div className="product-card-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="product-card-image"
        />
        <h4 className="product-card-text">{props.product_name}</h4>
      </div>
      <style jsx>
        {`
          .product-card-container {
            gap: 0.75rem;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .product-card-image {
            width: 480px;
            height: 320px;
            object-fit: cover;
          }
          .product-card-text {
            font-size: 24px;
            font-family: 'Inter';
            font-weight: 800;
            line-height: 1.25;
            letter-spacing: px;
            text-transform: none;
            text-decoration: none;
          }
          @media (max-width: 479px) {
            .product-card-container {
              width: 100%;
            }
            .product-card-image {
              width: 100%;
              height: auto;
              aspect-ratio: 3 / 2;
            }
          }
        `}
      </style>
    </>
  )
}

ProductCard.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  product_name: 'Product Name Goes Here',
}

ProductCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  product_name: PropTypes.string,
}

export default ProductCard
