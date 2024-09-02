import React from 'react';
import '../assets/loader.css';

export const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
