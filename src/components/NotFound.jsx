import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 min-h-[300px] mb-15">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page Not Found</p>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;