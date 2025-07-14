import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              QnA Board
            </Link>
          </div>
          
          <nav className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              홈
            </Link>
            <Link 
              to="/board" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              게시판
            </Link>
            <Link 
              to="/questions/new" 
              className="btn btn-primary text-sm"
            >
              질문하기
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 