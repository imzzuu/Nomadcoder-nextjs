import Layout from "../component/Layout";
import "../styles/globals.css";

// _app.js 가 너무 많은 로직을 처리하는 것은 권장하지 않는다.
//  _app.js 가 글로벌로 처리할 것들이 많다보니, layout 을 따로 만들어서 처리하도록 한다.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
