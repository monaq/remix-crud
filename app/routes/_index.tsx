import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "QnA Board - 홈" },
    { name: "description", content: "질문과 답변을 공유하는 커뮤니티" },
  ];
};

export default function Index() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            QnA Board에 오신 것을 환영합니다
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            질문하고 답변하며 지식을 공유하는 커뮤니티입니다
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">
              질문하기
            </button>
            <button className="btn btn-outline">
              게시글 보기
            </button>
          </div>
        </div>
        
      </div>

  );
} 