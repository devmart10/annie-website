import "../src/css/main.css";
import "../src/css/animate.css";

import Layout from "../src/components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
