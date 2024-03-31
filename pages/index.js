import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Shahadat</title>
          <meta property="og:title" content="Shahadat" />
        </Head>
        <header id="header" className="home-container1">
          <div className="home-container2">
            <div className="home-container3">
              <img
                alt="image"
                src="/Logos/shahadat%20logo%20mini.svg"
                className="home-image"
              />
            </div>
            <a
              href="mailto:shout@shahadat.pro?subject=Let's work together, Shahadat!"
              className="home-link p2 button-primary-cta"
            >
              shout@shahadat.pro
            </a>
          </div>
        </header>
        <div className="home-container4">
          <img
            alt="HEY text written with gradient"
            src="/home/hey-text.svg"
            className="home-pasted-image"
          />
          <h1 className="home-text h1d">
            <span>I am Shahadat Shemul! Designer. Explorer. Micropreneur.</span>
            <br></br>
          </h1>
          <span className="home-text3">
            Have any ideas, UI/UX work,  or just want to be my friend?
          </span>
          <button type="button" className="p2 button-primary-cta">
            Button
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            color: var(--dl-color-ui-0);
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-ui-1000);
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-8);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-8);
            justify-content: flex-start;
          }
          .home-container2 {
            gap: var(--dl-space-space-8);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-max);
            align-items: center;
            justify-content: space-between;
          }
          .home-container3 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            width: auto;
            object-fit: cover;
          }
          .home-link {
            text-decoration: none;
          }
          .home-container4 {
            gap: var(--dl-space-space-8);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-64);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-64);
          }
          .home-pasted-image {
            top: var(--dl-space-space-24);
            left: 0px;
            right: 0px;
            width: 662px;
            height: auto;
            margin: auto;
            position: absolute;
          }
          .home-text {
            width: var(--dl-size-size-max);
            z-index: 2;
            text-align: center;
            text-shadow: 0px 0px 250px rgba(29, 245, 159, 0.75);
          }
          .home-text3 {
            color: var(--dl-color-ui-400);
          }
          @media (max-width: 479px) {
            .home-container1 {
              padding-top: var(--dl-space-space-4);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-4);
            }
            .home-link {
              display: none;
            }
            .home-container4 {
              padding-top: var(--dl-space-space-32);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-32);
            }
            .home-pasted-image {
              top: 32px;
              width: calc(100% - 48px);
            }
            .home-text {
              width: 100%;
              font-size: 48px;
              text-align: left;
              line-height: 120%;
              letter-spacing: -2px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
