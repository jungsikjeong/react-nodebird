import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const profile = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.1/antd.compact.css"
        />
      </Head>
      <AppLayout>
        <div>프로필</div>
      </AppLayout>
    </>
  );
};

export default profile;
