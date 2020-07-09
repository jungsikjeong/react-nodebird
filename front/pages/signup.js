import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const signup = () => {
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
        <div>회원가입</div>
      </AppLayout>
    </>
  );
};

export default signup;
