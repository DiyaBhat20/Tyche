import React from 'react';
import Navbar from '../features/navbar';

const SecondPage = () => {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="container mx-auto">
        
        <Navbar></Navbar>

        {/* Form Section */}
        <form className="bg-[rgb(36,23,14)] p-8 rounded-lg">
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="assets">
              Enter the asset names (comma separated) you want to include:
            </label>
            <input
              type="text"
              id="assets"
              className="w-full p-2 bg-black border border-orange-500 rounded"
              placeholder="e.g., Asset1, Asset2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="capital">
              Enter the initial capital (e.g., 10000):
            </label>
            <input
              type="number"
              id="capital"
              className="w-full p-2 bg-black border border-orange-500 rounded"
              placeholder="e.g., 10000"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="risk-aversion">
              Enter the risk aversion parameter (e.g., 2):
            </label>
            <input
              type="number"
              id="risk-aversion"
              className="w-full p-2 bg-black border border-orange-500 rounded"
              placeholder="e.g., 2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="weights">
              Enter the initial weights for selected assets:
            </label>
            <select
              id="weights"
              className="w-full p-2 bg-black border border-orange-500 rounded"
            >
              <option>Select weights</option>
              <option>Weight 1</option>
              <option>Weight 2</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="asset-pair">
              Enter an asset pair (e.g., 'Asset1,Asset2') or type 'done' to finish:
            </label>
            <input
              type="text"
              id="asset-pair"
              className="w-full p-2 bg-black border border-orange-500 rounded"
              placeholder="e.g., 'Asset1,Asset2'"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="bg-orange-500 text-black py-2 px-4 rounded-full w-1/4 hover:bg-orange-400">
              SUBMIT
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SecondPage;
