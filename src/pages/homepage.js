import React from 'react';
import Navbar from '../features/navbar';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="container mx-auto">
        {/* Header */}
        <Navbar></Navbar>
        
        {/* Quote */}
        

        {/* Search Bar */}
        <div className="mb-12">
          <input 
            type="text" 
            placeholder="Search here..." 
            className="w-full bg-black border border-blue-400 text-white py-2 px-4 rounded"
          />
        </div>

        {/* Virtual Events Section */}
        <div className="bg-[rgb(36,23,14)] p-10 mb-8 rounded-lg max-w-4xl mx-auto">
  <h2 className="text-4xl font-bold mb-6">Stay informed with Tyche virtual events.</h2>
  <p className="mb-6 text-lg">Attend webinars that help to make sense of the current market environment and see how Tyche can help.</p>
  
  {/* Flexbox container to align SMNR and button */}
  <div className="flex justify-between items-center mb-6">
    <p className="text-orange-400 text-5xl">SMNR</p>
    <button className="border border-white px-8 py-3 rounded hover:bg-gray-700">GET STARTED</button>
  </div>
</div>


        {/* Tyche Briefs Section */}
        <div className="bg-[rgb(31,19,12)] p-6 flex justify-between items-center rounded">
          <div>
            <h2 className="text-3xl ">Tyche BRIEFS</h2>
            <p>Market-leading Intelligence, News, and Data delivered directly to your inbox</p>
          </div>
          <button className="text-orange-400 border border-orange-400 px-4 py-2 rounded hover:bg-gray-800">Subscribe for Free</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
