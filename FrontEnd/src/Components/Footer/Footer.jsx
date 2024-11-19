import React from 'react';

const Footer = () => {
  return (
    <div className="container mx-auto py-2 px-6 md:px-20 lg:px-32 bg-white text-black">
      <div className="border-t border-gray-300 my-3"></div> {/* Gray line */}
      <div className="flex justify-center items-center mb-4">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a href="https://onnrent.com" className="hover:underline">
            OnnRent.com
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
