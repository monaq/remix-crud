import { Outlet } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "QnA Board - 게시판" },
    { name: "description", content: "질문과 답변 게시판" },
  ];
};

export default function BoardLayout() {
  return (
    <div className="min-h-full bg-gray-50">
      {/* Board Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-gray-900">QnA 게시판</h1>
              <nav className="flex space-x-4">
                <a href="/board" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  전체글
                </a>
                <a href="/board/popular" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  인기글
                </a>
                <a href="/board/recent" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  최신글
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn btn-primary text-sm">
                글쓰기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Board Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </div>
    </div>
  );
} 