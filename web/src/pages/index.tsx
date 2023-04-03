import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
interface Question {
  tags: string[];
  owner: { display_name: string; profile_image: string };
  is_answered: boolean;
  link: string;
  title: string;
  answer_count: number;
}

const QuestionCard: FC<{ question: Question }> = ({ question }) => (
  <Link
    className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
    href={question.link}
    target="_blank"
  >
    <h3 className="text-2xl font-bold">{question.title}</h3>
    <div className="flex gap-4 text-lg">
      {question.tags.map((tag, idx) => {
        return <span>{tag}</span>;
      })}
    </div>
  </Link>
);
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recent stackoverflow questions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="relative flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="w-full rounded-md p-4 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            GHW <span className="text-[hsl(280,100%,70%)]">APIril</span>{" "}
          </h1>
          <Link
            className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href={"https://github.com/probablyarth"}
            target="_blank"
          >
            <h3 className="text-center text-2xl font-bold">
              Made with ❤️ by @probablyarth
            </h3>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
