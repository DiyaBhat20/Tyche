import React from 'react';
import Navbar from "../components/Navbar";

const InputPage = () => {
  return (
    <div className="bg-black flex-grow text-white">

        <div className="container mx-auto px-8 pb-4">
        {/* Form Section */}
        <form className="mt-8 bg-[#131010] text-[#FFAB3A] w-[80%] mx-auto border-l-8 border-r-8 border-[#FFAB3A] px-10 py-4 ">
          <div className="mb-4">

            <label className="block text-lg mb-2" htmlFor="assets">
              Enter the asset names (comma separated) you want to include:
            </label>
            <input
              type="text"
              id="assets"
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
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
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
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
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
              placeholder="e.g., 2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="weights">
              Enter the initial weights for entered assets:
            </label>
            <input
              type="text"
              id="weights"
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
              placeholder="e.g., 0.2, 0.25"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="asset-pair">
              Enter an asset pair (e.g., 'Asset1,Asset2') or type 'done' to finish:
            </label>
            <input
              type="text"
              id="asset-pair"
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
              placeholder="e.g., 'Asset1,Asset2'"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="bg-[#FFAB3A] text-black py-2 px-4 rounded-full w-1/4 hover:bg-orange-400">
              SUBMIT
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default InputPage;
