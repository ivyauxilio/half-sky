import React from 'react';

const Search = () => (
    <div className="flex flex-col w-full">
        <div className="flex border-2 rounded-lg">
            <input type="text" className="px-4 py-3 w-full text-sm rounded-bl-lg rounded-tl-lg" placeholder="Search rectuiters by name..." />
            <button className="flex items-center justify-center px-4 bg-white">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
            </button>
        </div>
    </div>
);
  
export default Search;