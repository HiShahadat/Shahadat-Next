import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: "UncutSans-Light";\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 300;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: -0.5px;\n    line-height: 32px;\n    color: var(--dl-color-ui-1000);\n    background-color: var(--dl-color-ui-0);\n    \n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://unpkg.com/animate.css@4.1.1/animate.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '</noscript><!--This is the head section-->\n<script>window.EXPERIMENT_SITE_ID="65cda1580e7485779803248f";</script>\n  <script src="https://cdn.jsdelivr.net/npm/cline-client-script/cline.min.js"></script>\n<script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="4b3077ae-384c-49c0-9dd4-331275317fd5" async></script>\n<style>\n  @keyframes blink {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n</style>\n<noscript>',
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<!-- Your body code here -->\n<!-- <script type="text/javascript"> ... </script> --> \n    <script data-section-id=\'navbar\' src=\'https://unpkg.com/@teleporthq/teleport-custom-scripts\'></script>\n<!-- BEGIN PLERDY CODE -->\n<script type="text/javascript" defer data-plerdy_code=\'1\'>\n    var _protocol="https:"==document.location.protocol?"https://":"http://";\n    _site_hash_code = "2fc37ef9f35b10b265f937c0a3ba0d35",_suid=45904, plerdyScript=document.createElement("script");\n    plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",\n    plerdyScript.src="https://d.plerdy.com/public/js/click/main.js?v="+Math.random();\n    var plerdymainscript=document.querySelector("[data-plerdymainscript=\'plerdymainscript\']");\n    plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);\n    try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}\n</script>\n<!-- END PLERDY CODE -->',
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
