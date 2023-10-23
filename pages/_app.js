import Head from "next/head";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
			<Head>
				<title>Next Events</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width" />
			</Head>
      <Component {...pageProps} />{" "}
    </Layout>
  );
}

export default MyApp;
