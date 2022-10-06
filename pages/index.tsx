import Head from "next/head";
import { Fragment, ReactElement } from "react";
import { Dashboard } from "../components/dashboard";
import { Layout } from "../components/layout";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard />
    </Fragment>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default HomePage;
