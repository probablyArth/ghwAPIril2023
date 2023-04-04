import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Question } from ".";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";

const questionEndpoint = (id: string) => {
  return `https://api.stackexchange.com/2.3/questions/${id}?order=desc&sort=activity&site=stackoverflow`;
};

const QuestionCard: FC<{ question: Question }> = ({ question }) => (
  <div className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
    <div className="flex w-full items-center gap-4">
      <Image
        src={question.owner.profile_image}
        alt={question.owner.display_name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <h3 className="text-2xl font-bold">{question.title}</h3>
    </div>
    <div className="flex gap-4 text-lg">
      {question.tags.map((tag, idx) => {
        return <span key={idx}>{tag}</span>;
      })}
    </div>
  </div>
);

const QuestionPage: NextPage<{ params: ParsedUrlQuery }> = ({ params }) => {
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    fetch(questionEndpoint(params.id as string))
      .then((res) => res.json())
      .then((data: { items: Question[] }) => {
        setQuestion(data.items[0] as Question);
      });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="relative flex flex-col items-center justify-center gap-12 px-4 py-16">
        {question ? (
          <QuestionCard question={question} />
        ) : (
          <h1 className="font-mono text-5xl tracking-tight text-white ">
            Loading..
          </h1>
        )}
      </div>
    </main>
  );
};

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: { params: context.params },
  };
}

export default QuestionPage;
