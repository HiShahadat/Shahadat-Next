import React from 'react'
import Head from 'next/head'

import IWantCta from '../components/i-want-cta'
import ShapeGrid from '../components/shape-grid'
import Faq from '../components/faq'

const Akriti = (props) => {
  return (
    <>
      <div id="body" className="akriti-container">
        <Head>
          <title>Akriti! 100+ Abstract Vector Shapes (SVG)</title>
          <meta
            property="og:title"
            content="Akriti! 100+ Abstract Vector Shapes (SVG)"
          />
        </Head>
        <header id="header" className="akriti-container01">
          <div className="akriti-container02">
            <div className="akriti-container03">
              <img
                alt="image"
                src="/Logos/shahadat%20logo%20mini.svg"
                className="akriti-image"
              />
            </div>
            <div className="akriti-container04">
              <div className="akriti-container05">
                <img
                  alt="image"
                  src="/icons/yes-check-circle.svg"
                  className="akriti-image01"
                />
                <p className="akriti-text p2">Buy Once, Use Unlimited</p>
              </div>
              <div className="akriti-container06">
                <img
                  alt="image"
                  src="/icons/yes-check-circle.svg"
                  className="akriti-image02"
                />
                <p className="akriti-text001 p2">30-Day Refund Policy</p>
              </div>
              <a href="#yes-i-want-this" className="akriti-link">
                <IWantCta className="akriti-component"></IWantCta>
              </a>
            </div>
          </div>
        </header>
        <main id="hero" className="akriti-container07">
          <div className="akriti-container08">
            <div className="akriti-container09">
              <h1 className="akriti-text002 h1d">
                Akriti! 100+ Abstract Shapes For No Reason.
              </h1>
              <div className="akriti-container10">
                <a href="#yes-i-want-this" className="akriti-link1">
                  <IWantCta
                    rootClassName="i-want-cta-root-class-name"
                    className="akriti-component01"
                  ></IWantCta>
                </a>
                <a
                  href="https://www.producthunt.com/posts/akriti-100-abstract-vector-shapes"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="akriti-link2"
                >
                  <img
                    alt="Product Hunt review badge with Product Hunt logo"
                    src="/badges/product-hunt-review-badge.svg"
                    loading="lazy"
                    className="akriti-pasted-image"
                  />
                </a>
              </div>
            </div>
            <div className="akriti-container11">
              <img
                alt="image"
                src="/akriti/tejpata.svg"
                className="akriti-image03"
              />
              <img
                alt="image"
                src="/akriti/shona.svg"
                className="akriti-image04"
              />
              <img
                alt="image"
                src="/akriti/gajor.svg"
                className="akriti-image05"
              />
              <img
                alt="image"
                src="/akriti/biporit.svg"
                className="akriti-image06"
              />
              <img
                alt="image"
                src="/akriti/khopa.svg"
                className="akriti-image07"
              />
              <img
                alt="image"
                src="/akriti/gada.svg"
                className="akriti-image08"
              />
              <img
                alt="image"
                src="/akriti/faluda.svg"
                className="akriti-image09"
              />
              <img
                alt="image"
                src="/akriti/shajna.svg"
                className="akriti-image10"
              />
              <img
                alt="image"
                src="/akriti/bondhu.svg"
                className="akriti-image11"
              />
              <img
                alt="image"
                src="/akriti/pudina.svg"
                className="akriti-image12"
              />
              <img
                alt="image"
                src="/akriti/pepe.svg"
                className="akriti-image13"
              />
              <img
                alt="image"
                src="/akriti/kodom.svg"
                className="akriti-image14"
              />
            </div>
          </div>
        </main>
        <section id="logos" className="akriti-container12">
          <div className="akriti-container13">
            <h4 className="akriti-text003 h4d">
              Blended By The Following Shapes
            </h4>
            <div className="akriti-container14">
              <img
                alt="image"
                src="/akriti/rectangle%20logo.svg"
                className="akriti-image15"
              />
              <img
                alt="image"
                src="/akriti/circle%20logo.svg"
                className="akriti-image16"
              />
              <img
                alt="image"
                src="/akriti/triangle%20logo.svg"
                className="akriti-image17"
              />
              <img
                alt="image"
                src="/akriti/hexagon%20logo.svg"
                className="akriti-image18"
              />
              <img
                alt="image"
                src="/akriti/star%20logo.svg"
                className="akriti-image19"
              />
            </div>
          </div>
        </section>
        <div className="akriti-container15">
          <div className="akriti-container16">
            <ShapeGrid
              text="Kodbel"
              image_alt="Kodbel, a vector geometric shape, looks like a flower"
              image_src="/akriti/kodbel.svg"
              rootClassName="shape-grid-root-class-name"
            ></ShapeGrid>
            <ShapeGrid
              text="Fuchka"
              image_alt="Fuchka, 4 circle logo type shape"
              image_src="/akriti/fuchka.svg"
            ></ShapeGrid>
            <ShapeGrid
              text="Jolpai"
              image_alt="Jolpai, purple magenta colored geometric shape"
              image_src="/akriti/jolpai.svg"
            ></ShapeGrid>
            <ShapeGrid
              text="Moghlai"
              image_src="/akriti/moghlai.svg"
            ></ShapeGrid>
            <ShapeGrid
              text="Obohela"
              image_src="/akriti/obohela.svg"
            ></ShapeGrid>
            <ShapeGrid text="Shiyal" image_src="/akriti/shiyal.svg"></ShapeGrid>
            <ShapeGrid text="Bangi" image_src="/akriti/bangi.svg"></ShapeGrid>
            <ShapeGrid
              text="Jambura"
              image_src="/akriti/jambura.svg"
            ></ShapeGrid>
            <ShapeGrid text="Ruti" image_src="/akriti/ruti.svg"></ShapeGrid>
            <ShapeGrid
              text="Benaroshi"
              image_src="/akriti/benaroshi.svg"
            ></ShapeGrid>
            <ShapeGrid text="Murgi" image_src="/akriti/murgi.svg"></ShapeGrid>
            <ShapeGrid
              text="Rupchada"
              image_src="/akriti/rupchada.svg"
            ></ShapeGrid>
            <ShapeGrid text="Elachi" image_src="/akriti/elachi.svg"></ShapeGrid>
            <ShapeGrid
              text="Batashi"
              image_src="/akriti/batashi.svg"
            ></ShapeGrid>
            <ShapeGrid text="Vorta" image_src="/akriti/vorta.svg"></ShapeGrid>
            <ShapeGrid text="Golap" image_src="/akriti/golap.svg"></ShapeGrid>
            <ShapeGrid
              text="Chotpoti"
              image_src="/akriti/chotpoti.svg"
            ></ShapeGrid>
            <ShapeGrid text="Shamuk" image_src="/akriti/shamuk.svg"></ShapeGrid>
            <ShapeGrid text="Jilapi" image_src="/akriti/jilapi.svg"></ShapeGrid>
            <ShapeGrid text="Biye" image_src="/akriti/biye.svg"></ShapeGrid>
            <ShapeGrid text="Biral" image_src="/akriti/biral.svg"></ShapeGrid>
            <ShapeGrid text="Afsos" image_src="/akriti/afsos.svg"></ShapeGrid>
            <ShapeGrid
              text="Jamdani"
              image_src="/akriti/jamdani.svg"
            ></ShapeGrid>
            <ShapeGrid text="Morich" image_src="/akriti/morich.svg"></ShapeGrid>
            <ShapeGrid text="Shalik" image_src="/akriti/shalik.svg"></ShapeGrid>
            <ShapeGrid text="Badam" image_src="/akriti/badam.svg"></ShapeGrid>
            <ShapeGrid text="Halim" image_src="/akriti/halim.svg"></ShapeGrid>
            <ShapeGrid
              text="Anarosh"
              image_src="/akriti/anarosh.svg"
            ></ShapeGrid>
            <ShapeGrid text="Kacchi" image_src="/akriti/kacchi.svg"></ShapeGrid>
            <ShapeGrid
              text="Tuntuni"
              image_src="/akriti/tuntuni.svg"
            ></ShapeGrid>
          </div>
          <div className="akriti-container17">
            <p className="akriti-text004 p2">
              <span>In Total</span>
              <br></br>
              <span>100+ Stunning Shapes</span>
              <br></br>
            </p>
            <a href="#yes-i-want-this" className="akriti-link3">
              <IWantCta
                rootClassName="i-want-cta-root-class-name1"
                className="akriti-component32"
              ></IWantCta>
            </a>
          </div>
        </div>
        <div className="akriti-container18">
          <div className="akriti-container19">
            <h2 className="akriti-text009 h2d">
              <span>Your Benefits</span>
              <br></br>
              <span>The Best, The Better, And The Bad*</span>
              <br></br>
            </h2>
            <p className="akriti-text014 p2">
              <span>
                The bad ones are not actually “benefits”, I know. See the FAQ
                section for better explanation of your benefits and license.
              </span>
              <br></br>
            </p>
          </div>
          <div className="akriti-container20">
            <div className="akriti-container21">
              <img
                alt="image"
                src="/akriti/akash.svg"
                className="akriti-image20"
              />
              <h4 className="akriti-text017 h4d">
                <span>The Best</span>
                <br></br>
              </h4>
              <div className="akriti-container22">
                <div className="akriti-container23">
                  <img
                    alt="image"
                    src="/icons/yes-check-double.svg"
                    className="akriti-image21"
                  />
                  <p className="akriti-text020 p2">
                    <span className="akriti-text021">Save time</span>
                    <span className="p2">
                      {' '}
                      because you have no time to recreate these
                    </span>
                  </p>
                </div>
                <div className="akriti-container24">
                  <img
                    alt="image"
                    src="/icons/yes-check-double.svg"
                    className="akriti-image22"
                  />
                  <p className="akriti-text023 p2">
                    <span className="akriti-text024">Save money</span>
                    <span className="p2">
                      {' '}
                      because you have to buy the new iPhone 15 Pro Max
                    </span>
                  </p>
                </div>
                <div className="akriti-container25">
                  <img
                    alt="image"
                    src="/icons/yes-check-double.svg"
                    className="akriti-image23"
                  />
                  <p className="akriti-text026 p2">
                    <span className="akriti-text027">Save effort</span>
                    <span className="p2">
                      {' '}
                      because you love to procrastinate some times
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="akriti-container26">
              <img
                alt="image"
                src="/akriti/chapa.svg"
                className="akriti-image24"
              />
              <h4 className="akriti-text029 h4d">
                <span>The Better</span>
                <br></br>
              </h4>
              <div className="akriti-container27">
                <div className="akriti-container28">
                  <img
                    alt="image"
                    src="/icons/yes-check.svg"
                    className="akriti-image25"
                  />
                  <p className="akriti-text032 p2">
                    <span className="akriti-text033">SVG files</span>
                    <span>
                      {' '}
                      so the client can ask you to make the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="akriti-text035">logo</span>
                    <span> shape bigger</span>
                  </p>
                </div>
                <div className="akriti-container29">
                  <img
                    alt="image"
                    src="/icons/yes-check.svg"
                    className="akriti-image26"
                  />
                  <p className="akriti-text037">
                    <span className="akriti-text038">Named shapes</span>
                    <span className="p2">
                      {' '}
                      as you don’t like to rename your layers
                    </span>
                  </p>
                </div>
                <div className="akriti-container30">
                  <img
                    alt="image"
                    src="/icons/yes-check.svg"
                    className="akriti-image27"
                  />
                  <p className="akriti-text040 p2">
                    <span className="akriti-text041">Multipurpose use</span>
                    <span> because you love one size fits all</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="akriti-container31">
              <img
                alt="image"
                src="/akriti/lotkon.svg"
                className="akriti-image28"
              />
              <h4 className="akriti-text043 h4d">
                <span>The Bad*</span>
                <br></br>
              </h4>
              <div className="akriti-container32">
                <div className="akriti-container33">
                  <img
                    alt="image"
                    src="/icons/no-minus.svg"
                    className="akriti-image29"
                  />
                  <p className="akriti-text046 p2">
                    <span className="akriti-text047">Don’t trademark</span>
                    <span> these shapes as logos (see FAQ)</span>
                  </p>
                </div>
                <div className="akriti-container34">
                  <img
                    alt="image"
                    src="/icons/no-minus.svg"
                    className="akriti-image30"
                  />
                  <p className="akriti-text049 p2">
                    <span className="akriti-text050">Don’t sell</span>
                    <span className="akriti-text051">,</span>
                    <span>
                      {' '}
                      resell, share, or distribute the shapes (it’s bad)
                    </span>
                  </p>
                </div>
                <div className="akriti-container35">
                  <img
                    alt="image"
                    src="/icons/no-minus.svg"
                    className="akriti-image31"
                  />
                  <p className="akriti-text053 p2">
                    <span className="akriti-text054">Don’t make</span>
                    <span> merchandise (contact me for custom license)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href="#yes-i-want-this" className="akriti-link4">
            <IWantCta
              rootClassName="i-want-cta-root-class-name2"
              className="akriti-component33"
            ></IWantCta>
          </a>
        </div>
        <div className="akriti-container36">
          <div className="akriti-container37">
            <h4 className="akriti-text056 h2d">
              <span>Pay What You Want</span>
              <br></br>
              <span>And Get Them All, No Excuse!</span>
              <br></br>
            </h4>
            <p className="akriti-text061 p2">
              <span>
                Get the PRO plan with just $1. If you think this is more
                valuable then $1, pay whatever amount you think appropriate; at
                the checkout.
              </span>
              <br className="p2"></br>
            </p>
          </div>
          <div id="pricing-card" className="akriti-container38">
            <div className="akriti-container39">
              <div className="akriti-container40">
                <img
                  alt="image"
                  src="/akriti/roshmalai.svg"
                  className="akriti-image32"
                />
                <h2 className="akriti-text064 h2d">Free</h2>
                <h4 className="akriti-text065 h4d">$0</h4>
              </div>
              <div className="akriti-container41">
                <div className="akriti-container42">
                  <img
                    alt="image"
                    src="/icons/yes-check-circle.svg"
                    className="akriti-image33"
                  />
                  <p className="akriti-text066 p2">50 Free Shapes Only</p>
                </div>
                <div className="akriti-container43">
                  <img
                    alt="image"
                    src="/icons/no-cross.svg"
                    className="akriti-image34"
                  />
                  <p className="akriti-text067 p2">Credit Required</p>
                </div>
                <div className="akriti-container44">
                  <img
                    alt="image"
                    src="/icons/no-cross.svg"
                    className="akriti-image35"
                  />
                  <p className="akriti-text068 p2">No Future Updates</p>
                </div>
              </div>
              <a
                href="https://www.figma.com/community/file/1301457374713038287"
                target="_blank"
                rel="noreferrer noopener"
                className="akriti-link5 p2 button-secondary-cta"
              >
                Download Free
              </a>
            </div>
            <div id="yes-i-want-this" className="akriti-container45">
              <div className="akriti-container46">
                <p className="akriti-text069 p4">Best Choice</p>
              </div>
              <div className="akriti-container47">
                <img
                  alt="image"
                  src="/akriti/khichuri.svg"
                  className="akriti-image36"
                />
                <h2 className="akriti-text070 h2d">Pro</h2>
                <h4 className="akriti-text071 h4d">$1+</h4>
              </div>
              <div id="fomo" className="akriti-container48">
                <p className="akriti-text072 p4">
                  Hurry up! Limited time offer!!
                </p>
                <p className="akriti-text073 p4">
                  Price is increasing at the next update!
                </p>
              </div>
              <div className="akriti-container49">
                <div className="akriti-container50">
                  <img
                    alt="image"
                    src="/icons/yes-check-circle.svg"
                    className="akriti-image37"
                  />
                  <p className="akriti-text074 p2">
                    100+ Free &amp; Pro Shapes
                  </p>
                </div>
                <div className="akriti-container51">
                  <img
                    alt="image"
                    src="/icons/yes-check-circle.svg"
                    className="akriti-image38"
                  />
                  <p className="akriti-text075 p2">No Credit Required</p>
                </div>
                <div className="akriti-container52">
                  <img
                    alt="image"
                    src="/icons/yes-check-circle.svg"
                    className="akriti-image39"
                  />
                  <p className="akriti-text076 p2">Free Future Updates</p>
                </div>
                <div className="akriti-container53">
                  <img
                    alt="image"
                    src="/icons/yes-check-circle.svg"
                    className="akriti-image40"
                  />
                  <p className="akriti-text077 p2">
                    Buy Once &amp; Use Forever
                  </p>
                </div>
                <div className="akriti-container54">
                  <img
                    alt="image"
                    src="/icons/yes-check-circle.svg"
                    className="akriti-image41"
                  />
                  <p className="akriti-text078 p2">30-Day Refund Policy</p>
                </div>
              </div>
              <a
                href="https://shahadat.lemonsqueezy.com/checkout/buy/0ac1cb71-b511-4109-ab68-92b9fad469e5?desc=0&amp;discount=0&amp;dark=1"
                target="_blank"
                rel="noreferrer noopener"
                className="akriti-link6"
              >
                <IWantCta
                  rootClassName="i-want-cta-root-class-name3"
                  className="akriti-component34"
                ></IWantCta>
              </a>
            </div>
            <div className="akriti-container55">
              <div className="akriti-container56">
                <img
                  alt="image"
                  src="/akriti/gondar.svg"
                  className="akriti-image42"
                />
                <h2 className="akriti-text079 h2d">Custom</h2>
                <h4 className="akriti-text080 h4d">$1,000+</h4>
              </div>
              <div className="akriti-container57">
                <div className="akriti-container58">
                  <img
                    alt="image"
                    src="/icons/yes-check-circle.svg"
                    className="akriti-image43"
                  />
                  <p className="akriti-text081 p2">UI/UX, Logo, or Anything</p>
                </div>
                <div className="akriti-container59">
                  <img
                    alt="image"
                    src="/icons/yes-check-circle.svg"
                    className="akriti-image44"
                  />
                  <p className="akriti-text082 p2">Unlimited Revisions</p>
                </div>
                <div className="akriti-container60">
                  <img
                    alt="image"
                    src="/icons/yes-check-circle.svg"
                    className="akriti-image45"
                  />
                  <p className="akriti-text083 p2">NDA Signed Project</p>
                </div>
              </div>
              <a
                href="mailto:shout@shahadat.pro?subject=Let's work together, Shahadat!"
                className="akriti-link7 p2 button-secondary-cta"
              >
                Let&apos;s Work
              </a>
            </div>
          </div>
        </div>
        <div className="akriti-container61">
          <div className="akriti-container62">
            <h2 className="akriti-text084 h2d">
              <span>Have Questions?</span>
              <br></br>
              <span>Alright. Ask Me.. Anything!</span>
              <br></br>
            </h2>
            <p className="akriti-text089 p2">
              <span>
                There are no smart, strange, or silly questions. They are
                just... questions.
              </span>
              <br className="p2"></br>
              <span className="p2">
                And if you have something in mind, ask me, please.
              </span>
              <br className="p2"></br>
            </p>
          </div>
          <div className="akriti-container63">
            <Faq
              text="Akriti is a Bengali word which means “shape”. Akriti has 100+ abstract vector shapes for your creative projects. It has colorful shapes, SVG and PNG files, and designed with 40px grid."
              heading="What is the meaning of Akriti?"
            ></Faq>
            <Faq
              text="I request you to give me credit wherever you use a free shape. However, if you are unable to give any credit, no pressure. Just share the page on social media to spread the shapes. This way, other people may find this page valuable for them."
              heading="Can I use the free shapes without giving any credit?"
            ></Faq>
            <Faq
              text="If you want the free version, click on the “Download Free” button in the pricing section. It will take you to the Figma file where you can duplicate and export the shapes. And if you want to get the pro version, click on the “Yes, I Want This” button at the pricing section. Pay whatever you want (minimum is $1) and you will get an email to download your files. You will get individual SVG files, PNG files, and a single Figma file."
              heading="How can I download these shapes?"
            ></Faq>
            <Faq
              text="Yes, definitely. Designers and creative people like you are always looking for something new for excitement and experiment. But you will get updates occasionally, not frequently."
              heading="Will you add more shapes in the future?"
            ></Faq>
            <Faq
              text="These shapes are very common. I made them for temporary logos and other purposes. You can use them as permanent logos but don’t trademark these as business logos. It’s a digital product and other people are using these shapes too. If you are looking for an unique logo, please contact me for your custom logo."
              heading="Why couldn’t I use these shapes as a permanent logo?"
            ></Faq>
            <Faq
              text="You can share the free version with other people via Figma community file. But you can not share the shapes as it is with other people. You can make final work by adding the shapes, then share your final work, no problem. But don’t share the shapes as it is, instead share this page to your people so they can get free or pro version according to their needs."
              heading="Can I share the shapes with other people?"
            ></Faq>
            <Faq
              text="If you have ideas regarding the shapes, have issues with the shapes, or have any improvement ideas, just shoot an email to shout@shahadat.pro"
              heading="How to contact you for ideas, issues, or improvements?"
            ></Faq>
            <Faq
              text="Yes! Contact me at shout@shahadat.pro with your purpose. I am open to provide custom license at custom price."
              heading="I need a custom license, can you provide?"
            ></Faq>
            <Faq
              text="Yes! I am open for work. Shout out your crazy ideas at shout@shahadat.pro, I will make it happen."
              heading="Will you work for me?"
            ></Faq>
          </div>
        </div>
        <div className="akriti-container64">
          <div className="akriti-container65">
            <div className="akriti-container66">
              <img
                alt="image"
                src="/akriti/tulsi.svg"
                className="akriti-image46"
              />
              <h2 className="akriti-text094 h2d">
                <span>Start Something With Shapes</span>
                <br></br>
                <span>Download Now!</span>
                <br></br>
              </h2>
            </div>
            <a href="#yes-i-want-this" className="akriti-link8">
              <IWantCta
                rootClassName="i-want-cta-root-class-name4"
                className="akriti-component44"
              ></IWantCta>
            </a>
          </div>
        </div>
        <div className="akriti-container67">
          <p className="akriti-text099 p2">
            <span>©</span>
            <span className="p2"> 2023, Shahadat.Pro</span>
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .akriti-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-ui-1000);
          }
          .akriti-container01 {
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
          .akriti-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-max);
            align-items: center;
            justify-content: space-between;
          }
          .akriti-container03 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .akriti-image {
            width: auto;
            object-fit: cover;
          }
          .akriti-container04 {
            gap: var(--dl-space-space-12);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-container05 {
            gap: 0.75rem;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image01 {
            fill: #e14747;
            width: auto;
            object-fit: cover;
          }
          .akriti-text {
            color: var(--dl-color-ui-0);
          }
          .akriti-container06 {
            gap: 0.75rem;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image02 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text001 {
            color: var(--dl-color-ui-0);
          }
          .akriti-link {
            display: contents;
          }
          .akriti-component {
            text-decoration: none;
          }
          .akriti-container07 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 6rem;
            flex-direction: column;
            padding-bottom: 6rem;
            justify-content: center;
          }
          .akriti-container08 {
            gap: var(--dl-space-space-12);
            width: var(--dl-size-size-max);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .akriti-container09 {
            gap: var(--dl-space-space-8);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .akriti-text002 {
            color: var(--dl-color-ui-0);
            width: 100%;
            max-width: 816px;
            text-align: left;
            text-shadow: 0px 0px 250px rgba(29, 245, 159, 0.75);
          }
          .akriti-container10 {
            gap: var(--dl-space-space-8);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-link1 {
            display: contents;
          }
          .akriti-component01 {
            text-decoration: none;
          }
          .akriti-link2 {
            display: contents;
          }
          .akriti-pasted-image {
            width: auto;
            height: auto;
            text-decoration: none;
          }
          .akriti-container11 {
            gap: var(--dl-space-space-12);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 384px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .akriti-image03 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image04 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image05 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image06 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image07 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image08 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image09 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image10 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image11 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image12 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image13 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-image14 {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .akriti-container12 {
            gap: var(--dl-space-space-12);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-12);
            justify-content: center;
          }
          .akriti-container13 {
            gap: var(--dl-space-space-12);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-max);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .akriti-text003 {
            color: var(--dl-color-ui-400);
            width: 100%;
            text-align: center;
          }
          .akriti-container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .akriti-image15 {
            width: auto;
            object-fit: cover;
          }
          .akriti-image16 {
            width: auto;
            object-fit: cover;
          }
          .akriti-image17 {
            width: auto;
            object-fit: cover;
          }
          .akriti-image18 {
            width: auto;
            object-fit: cover;
          }
          .akriti-image19 {
            width: auto;
            object-fit: cover;
          }
          .akriti-container15 {
            gap: var(--dl-space-space-24);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-24);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-24);
            justify-content: center;
          }
          .akriti-container16 {
            gap: var(--dl-space-space-12);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-max);
            align-items: flex-start;
            justify-content: flex-start;
          }
          .akriti-container17 {
            gap: var(--dl-space-space-6);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-max);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .akriti-text004 {
            color: var(--dl-color-ui-400);
            text-align: center;
          }
          .akriti-link3 {
            display: contents;
          }
          .akriti-component32 {
            text-decoration: none;
          }
          .akriti-container18 {
            gap: var(--dl-space-space-24);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-32);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-32);
            justify-content: center;
          }
          .akriti-container19 {
            gap: var(--dl-space-space-4);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-max);
            align-items: center;
            flex-direction: column;
          }
          .akriti-text009 {
            color: var(--dl-color-ui-0);
            width: 100%;
            max-width: var(--dl-size-size-max);
            text-align: center;
            text-shadow: 0px 0px 250px #1df59f;
          }
          .akriti-text014 {
            color: var(--dl-color-ui-400);
            width: 100%;
            max-width: 600px;
            text-align: center;
          }
          .akriti-container20 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-max);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .akriti-container21 {
            gap: var(--dl-space-space-8);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 320px;
            align-items: flex-start;
            flex-direction: column;
          }
          .akriti-image20 {
            width: var(--dl-size-size-small);
            object-fit: cover;
          }
          .akriti-text017 {
            color: var(--dl-color-ui-100);
            text-align: center;
          }
          .akriti-container22 {
            gap: var(--dl-space-space-4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .akriti-container23 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .akriti-image21 {
            top: var(--dl-space-space-1);
            left: -32px;
            width: auto;
            position: absolute;
            object-fit: cover;
          }
          .akriti-text020 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-text021 {
            color: var(--dl-color-brand-500);
          }
          .akriti-container24 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .akriti-image22 {
            top: var(--dl-space-space-1);
            left: -32px;
            width: auto;
            position: absolute;
            object-fit: cover;
          }
          .akriti-text023 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-text024 {
            color: var(--dl-color-brand-500);
          }
          .akriti-container25 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .akriti-image23 {
            top: var(--dl-space-space-1);
            left: -32px;
            width: auto;
            position: absolute;
            object-fit: cover;
          }
          .akriti-text026 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-text027 {
            color: var(--dl-color-brand-500);
          }
          .akriti-container26 {
            gap: var(--dl-space-space-8);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 320px;
            align-items: flex-start;
            flex-direction: column;
          }
          .akriti-image24 {
            width: var(--dl-size-size-small);
            object-fit: cover;
          }
          .akriti-text029 {
            color: var(--dl-color-ui-100);
            text-align: center;
          }
          .akriti-container27 {
            gap: var(--dl-space-space-4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .akriti-container28 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .akriti-image25 {
            top: var(--dl-space-space-1);
            left: -32px;
            width: auto;
            position: absolute;
            object-fit: cover;
          }
          .akriti-text032 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-text033 {
            color: var(--dl-color-brand-500);
          }
          .akriti-text035 {
            text-decoration: line-through;
          }
          .akriti-container29 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .akriti-image26 {
            top: var(--dl-space-space-1);
            left: -32px;
            width: auto;
            position: absolute;
            object-fit: cover;
          }
          .akriti-text037 {
            color: var(--dl-color-ui-100);
            width: 100%;
            font-size: 19px;
            text-align: left;
            font-family: 'UncutSans-Regular';
            font-weight: 400;
            line-height: 32px;
            letter-spacing: -0.5px;
            text-transform: none;
            text-decoration: none;
          }
          .akriti-text038 {
            color: var(--dl-color-brand-500);
          }
          .akriti-container30 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .akriti-image27 {
            top: var(--dl-space-space-1);
            left: -32px;
            width: auto;
            position: absolute;
            object-fit: cover;
          }
          .akriti-text040 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-text041 {
            color: var(--dl-color-brand-500);
          }
          .akriti-container31 {
            gap: var(--dl-space-space-8);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 320px;
            align-items: flex-start;
            flex-direction: column;
          }
          .akriti-image28 {
            width: var(--dl-size-size-small);
            object-fit: cover;
          }
          .akriti-text043 {
            color: var(--dl-color-ui-100);
            text-align: center;
          }
          .akriti-container32 {
            gap: var(--dl-space-space-4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .akriti-container33 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .akriti-image29 {
            top: var(--dl-space-space-1);
            left: -32px;
            width: auto;
            position: absolute;
            object-fit: cover;
          }
          .akriti-text046 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-text047 {
            color: var(--dl-color-brand-500);
          }
          .akriti-container34 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .akriti-image30 {
            top: var(--dl-space-space-1);
            left: -32px;
            width: auto;
            position: absolute;
            object-fit: cover;
          }
          .akriti-text049 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-text050 {
            color: var(--dl-color-brand-500);
          }
          .akriti-text051 {
            color: var(--dl-color-brand-500);
          }
          .akriti-container35 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .akriti-image31 {
            top: var(--dl-space-space-1);
            left: -32px;
            width: auto;
            position: absolute;
            object-fit: cover;
          }
          .akriti-text053 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-text054 {
            color: var(--dl-color-brand-500);
          }
          .akriti-link4 {
            display: contents;
          }
          .akriti-component33 {
            text-decoration: none;
          }
          .akriti-container36 {
            gap: var(--dl-space-space-24);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-32);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-32);
            justify-content: center;
          }
          .akriti-container37 {
            gap: var(--dl-space-space-4);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-max);
            align-items: center;
            flex-direction: column;
          }
          .akriti-text056 {
            color: var(--dl-color-ui-0);
            width: 100%;
            max-width: var(--dl-size-size-max);
            text-align: center;
            text-shadow: 0px 0px 250px #1df59f;
          }
          .akriti-text061 {
            color: var(--dl-color-ui-400);
            max-width: 600px;
            text-align: center;
          }
          .akriti-container38 {
            gap: var(--dl-space-space-12);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-max);
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-container39 {
            gap: var(--dl-space-space-12);
            flex: 1;
            display: flex;
            min-width: 260px;
            align-items: center;
            padding-top: var(--dl-space-space-12);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-12);
            justify-content: flex-start;
            background-color: var(--dl-color-ui-900);
          }
          .akriti-container40 {
            gap: var(--dl-space-space-4);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .akriti-image32 {
            width: var(--dl-size-size-small);
            object-fit: cover;
          }
          .akriti-text064 {
            color: var(--dl-color-ui-600);
            width: 100%;
            text-align: center;
          }
          .akriti-text065 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: center;
          }
          .akriti-container41 {
            gap: var(--dl-space-space-4);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .akriti-container42 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image33 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text066 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-container43 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image34 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text067 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-container44 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image35 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text068 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-link5 {
            width: 100%;
            text-decoration: none;
          }
          .akriti-container45 {
            gap: var(--dl-space-space-12);
            flex: 1;
            display: flex;
            position: relative;
            min-width: 260px;
            align-items: center;
            padding-top: var(--dl-space-space-12);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-12);
            justify-content: center;
            background-color: var(--dl-color-ui-900);
          }
          .akriti-container46 {
            top: 0px;
            right: 0px;
            display: flex;
            position: absolute;
            align-items: center;
            padding-top: var(--dl-space-space-1);
            padding-left: var(--dl-space-space-4);
            padding-right: var(--dl-space-space-4);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-1);
            justify-content: center;
            background-color: var(--dl-color-brand-500);
          }
          .akriti-text069 {
            color: var(--dl-color-ui-1000);
            text-align: center;
            letter-spacing: -0.5px;
          }
          .akriti-container47 {
            gap: var(--dl-space-space-4);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .akriti-image36 {
            width: var(--dl-size-size-small);
            object-fit: cover;
          }
          .akriti-text070 {
            color: var(--dl-color-ui-600);
            width: 100%;
            text-align: center;
          }
          .akriti-text071 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: center;
          }
          .akriti-container48 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-4);
            animation-name: blink;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-4);
            justify-content: center;
            background-color: #c81d3a;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
          .akriti-text072 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: center;
            letter-spacing: -0.5px;
          }
          .akriti-text073 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: center;
            letter-spacing: -0.5px;
          }
          .akriti-container49 {
            gap: var(--dl-space-space-4);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .akriti-container50 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image37 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text074 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-container51 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image38 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text075 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-container52 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image39 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text076 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-container53 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image40 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text077 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-container54 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image41 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text078 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-link6 {
            display: contents;
          }
          .akriti-component34 {
            text-decoration: none;
          }
          .akriti-container55 {
            gap: var(--dl-space-space-12);
            flex: 1;
            display: flex;
            min-width: 260px;
            align-items: center;
            padding-top: var(--dl-space-space-12);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-12);
            justify-content: flex-start;
            background-color: var(--dl-color-ui-900);
          }
          .akriti-container56 {
            gap: var(--dl-space-space-4);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .akriti-image42 {
            width: var(--dl-size-size-small);
            object-fit: cover;
          }
          .akriti-text079 {
            color: var(--dl-color-ui-600);
            width: 100%;
            text-align: center;
          }
          .akriti-text080 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: center;
          }
          .akriti-container57 {
            gap: var(--dl-space-space-4);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .akriti-container58 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image43 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text081 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-container59 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image44 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text082 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-container60 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .akriti-image45 {
            width: auto;
            object-fit: cover;
          }
          .akriti-text083 {
            color: var(--dl-color-ui-100);
            width: 100%;
            text-align: left;
          }
          .akriti-link7 {
            width: 100%;
            text-decoration: none;
          }
          .akriti-container61 {
            gap: var(--dl-space-space-24);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-32);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-32);
            justify-content: center;
          }
          .akriti-container62 {
            gap: var(--dl-space-space-4);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-max);
            align-items: center;
            flex-direction: column;
          }
          .akriti-text084 {
            color: var(--dl-color-ui-0);
            width: 100%;
            max-width: var(--dl-size-size-max);
            text-align: center;
            text-shadow: 0px 0px 250px #1df59f;
          }
          .akriti-text089 {
            color: var(--dl-color-ui-400);
            width: 100%;
            max-width: 600px;
            text-align: center;
          }
          .akriti-container63 {
            gap: var(--dl-space-space-12);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-max);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .akriti-container64 {
            gap: var(--dl-space-space-24);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-32);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-32);
            justify-content: center;
          }
          .akriti-container65 {
            gap: var(--dl-space-space-8);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-max);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .akriti-container66 {
            gap: var(--dl-space-space-4);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .akriti-image46 {
            width: var(--dl-size-size-small);
            object-fit: cover;
          }
          .akriti-text094 {
            color: var(--dl-color-ui-0);
            width: 100%;
            text-align: center;
            text-shadow: 0px 0px 250px #1df59f;
          }
          .akriti-link8 {
            display: contents;
          }
          .akriti-component44 {
            text-decoration: none;
          }
          .akriti-container67 {
            gap: var(--dl-space-space-24);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-32);
            padding-left: var(--dl-space-space-12);
            padding-right: var(--dl-space-space-12);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-32);
            justify-content: center;
          }
          .akriti-text099 {
            color: var(--dl-color-ui-100);
            text-align: center;
          }
          @media (max-width: 991px) {
            .akriti-container04 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .akriti-container01 {
              padding-top: var(--dl-space-space-4);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-4);
            }
            .akriti-container07 {
              padding-top: var(--dl-space-space-12);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-12);
            }
            .akriti-container08 {
              width: 100%;
              flex-wrap: wrap;
            }
            .akriti-container09 {
              gap: var(--dl-space-space-6);
            }
            .akriti-text002 {
              font-size: 48px;
              line-height: 120%;
              letter-spacing: -2px;
            }
            .akriti-pasted-image {
              display: none;
            }
            .akriti-container12 {
              padding-top: var(--dl-space-space-12);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-12);
            }
            .akriti-text003 {
              text-align: left;
            }
            .akriti-container14 {
              gap: var(--dl-space-space-6);
              flex-wrap: wrap;
              justify-content: flex-start;
            }
            .akriti-container15 {
              gap: var(--dl-space-space-12);
              padding-top: var(--dl-space-space-12);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-12);
            }
            .akriti-container16 {
              gap: var(--dl-space-space-6);
            }
            .akriti-container18 {
              gap: var(--dl-space-space-12);
              padding-top: var(--dl-space-space-12);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-12);
            }
            .akriti-text009 {
              font-size: 32px;
              text-align: left;
              line-height: 120%;
              letter-spacing: -1.5px;
            }
            .akriti-text014 {
              text-align: left;
            }
            .akriti-container20 {
              gap: var(--dl-space-space-12);
              justify-content: center;
            }
            .akriti-container36 {
              gap: var(--dl-space-space-12);
              padding-top: var(--dl-space-space-12);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-12);
            }
            .akriti-text056 {
              font-size: 32px;
              text-align: left;
              line-height: 120%;
              letter-spacing: -1.5px;
            }
            .akriti-text061 {
              text-align: left;
            }
            .akriti-container39 {
              padding: var(--dl-space-space-6);
            }
            .akriti-text064 {
              font-size: 32px;
              line-height: 120%;
              letter-spacing: -2px;
            }
            .akriti-container45 {
              padding: var(--dl-space-space-6);
            }
            .akriti-text070 {
              font-size: 32px;
              line-height: 120%;
              letter-spacing: -2px;
            }
            .akriti-container55 {
              padding: var(--dl-space-space-6);
            }
            .akriti-text079 {
              font-size: 32px;
              line-height: 120%;
              letter-spacing: -2px;
            }
            .akriti-container61 {
              gap: var(--dl-space-space-12);
              padding-top: var(--dl-space-space-12);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-12);
            }
            .akriti-text084 {
              font-size: 32px;
              text-align: left;
              line-height: 120%;
              letter-spacing: -1.5px;
            }
            .akriti-text089 {
              text-align: left;
            }
            .akriti-container63 {
              gap: var(--dl-space-space-6);
            }
            .akriti-container64 {
              padding-top: var(--dl-space-space-12);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-12);
            }
            .akriti-container66 {
              align-items: flex-start;
            }
            .akriti-text094 {
              font-size: 32px;
              text-align: left;
              line-height: 120%;
              letter-spacing: -2px;
            }
            .akriti-container67 {
              padding-top: var(--dl-space-space-12);
              padding-left: var(--dl-space-space-6);
              padding-right: var(--dl-space-space-6);
              padding-bottom: var(--dl-space-space-12);
            }
          }
        `}
      </style>
    </>
  )
}

export default Akriti
