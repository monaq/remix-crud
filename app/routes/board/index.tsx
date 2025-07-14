import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "QnA Board" },
    { name: "description", content: "질문과 답변 전체글 목록" },
  ];
};

export default function BoardIndex() {
  // 임시 데이터
  const posts = [
    {
      id: 1,
      title: "React에서 상태 관리하는 방법이 궁금합니다",
      author: "개발자1",
      date: "2024-01-15",
      views: 150,
      answers: 3,
      tags: ["React", "상태관리"],
    },
    {
      id: 2,
      title: "TypeScript 타입 정의에 대한 질문입니다",
      author: "개발자2",
      date: "2024-01-14",
      views: 89,
      answers: 1,
      tags: ["TypeScript", "타입"],
    },
    {
      id: 3,
      title: "Next.js와 Remix의 차이점을 알고 싶어요",
      author: "개발자3",
      date: "2024-01-13",
      views: 234,
      answers: 5,
      tags: ["Next.js", "Remix", "프레임워크"],
    },
  ];

  return (
    <div>
      {/* 검색 및 필터 */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            className="input w-80"
          />
          <select className="input w-32">
            <option>전체</option>
            <option>질문</option>
            <option>답변</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button className="btn btn-outline text-sm">최신순</button>
          <button className="btn btn-outline text-sm">인기순</button>
        </div>
      </div>

      {/* 게시글 목록 */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="card hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                  <span>조회 {post.views}</span>
                  <span>답변 {post.answers}</span>
                </div>
                <div className="flex space-x-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="mt-8 flex justify-center">
        <nav className="flex space-x-1">
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">이전</button>
          <button className="px-3 py-2 bg-primary-600 text-white rounded">1</button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">2</button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">3</button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">다음</button>
        </nav>
      </div>
    </div>
  );
} 