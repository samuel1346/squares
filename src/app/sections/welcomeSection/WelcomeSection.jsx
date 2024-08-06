import React from 'react';
import Link from 'next/link';

const Welcome = () => {
  return (
    <div className="welcome-container p-6 bg-gray-100 rounded-lg shadow-md text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Square Shop!</h1>
      <p className="mb-4">
        Discover the beauty and versatility of squares. From square to square, our shop has everything you need.
      </p>
      <div className="flex flex-col items-center space-y-4">
        <Link href="/squares">
          <p className="text-white bg-zinc-800 hover:bg-zinc-600 rounded-lg px-4 py-2">Explore squares</p>
        </Link>
        <Link href="/about">
          <p className="text-white  bg-zinc-800 hover:bg-zinc-600 rounded-lg px-4 py-2">Learn About Us</p>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
