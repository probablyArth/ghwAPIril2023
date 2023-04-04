import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GHW API week | probablyarth</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="relative flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="w-full rounded-md p-4 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            GHW <span className="text-[hsl(280,100%,70%)]">APIril</span>{" "}
          </h1>
          <Link
            className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href={"/stackoverflow"}
          >
            <h3 className="text-center text-2xl font-bold">
              {"Recent Stack Overflow Questions ->"}
            </h3>
          </Link>
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
