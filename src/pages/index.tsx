import { NextPage } from "next";
import React from "react";
import { Page } from "../layouts/Page";
import "twin.macro";

const Home: NextPage = () => {
  return (
    <Page>
      <div tw="prose">
        <h1>Hey There</h1>
        <p>This is some content.</p>
      </div>
    </Page>
  );
};

export default Home;
