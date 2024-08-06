import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="not-found-container p-6 bg-gray-100 rounded-lg shadow-md text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <p className="text-zinc-800 hover:underline">Go back to Home</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
