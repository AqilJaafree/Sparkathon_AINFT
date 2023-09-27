// pages/talk.tsx
import type { NextPage } from "next";
import Head from "next/head";
import { TalkView } from "../views";

const Talk: NextPage = (props) => {
    return (
      <div>
        <Head>
          <title>Solana Scaffold</title>
          <meta
            name="description"
            content="Basic Functionality"
          />
        </Head>
        <TalkView />
      </div>
    );
  };
  
export default Talk;
