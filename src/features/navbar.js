import React from 'react';

const Navbar = () => {
  return (
    <>
    <header className="flex justify-between items-start py-6">
          <h1 className="text-5xl font-bold">Tyche</h1>
          <div className="text-right">
            <p>Monday, May 4, 2020</p>
            <p>Thank you for being a client since 2019</p>
          </div>
        </header>
        <div className="mb-8">
        <p className="text-xl italic">"A smile is a curve that sets everything straight."</p>
        <p className="text-blue-400">Phyllis Diller</p>
      </div>
      </>
  );
};

export default Navbar;
