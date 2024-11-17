import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { PortfolioContext } from '../../context/portfolio.jsx';

const InputPage = () => {
  const navigate = useNavigate();
  const {setRes}=useContext(PortfolioContext);
  const getData = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Validate required fields
    if (!data.assets || !data.capital || !data.risk_aversion || !data.weights) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Parse data for assets, weights, and asset pairs
    const assets = data.assets.split(',').map(asset => asset.trim());
    const weights = data.weights.split(',').map(weight => parseFloat(weight.trim()));
    const assetPairs = data.assetPair
      ? data.assetPair.split(',').map(pair => pair.trim().split('-'))
      : [];

    // Format data for API
    const requestData = {
      initial_capital: parseFloat(data.capital),
      risk_aversion: parseFloat(data.risk_aversion),
      assets: assets,
      edges: assetPairs,
      ...Object.fromEntries(assets.map((asset, index) => [`weight_${asset}`, weights[index] || 0]))
    };
    console.log(requestData);
    try {
      const res = await fetch('api/portfolio/allocation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      const resData=await res.json();
      console.log(resData);
      setRes(resData);
      
      if (res.ok) {
        toast.success("Data submitted successfully!");
        navigate("/output");
      } else {
        toast.error("Failed to submit data. Please check the input.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting data.");
      console.error(error);
    }
  };

 
  return (
    <div className="bg-black flex-grow text-white">
      <ToastContainer />
      <div className="container mx-auto px-8 pb-4">
        <form onSubmit={getData} className="mt-8 bg-[#131010] text-[#FFAB3A] w-[80%] mx-auto border-l-8 border-r-8 border-[#FFAB3A] px-10 py-4">
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="assets">
              Enter the asset names (comma-separated):
            </label>
            <input
              type="text"
              id="assets"
              name="assets"
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
              placeholder="e.g., RELIANCE.BO, TCS.BO, HDFCBANK.BO"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="capital">
              Enter the initial capital:
            </label>
            <input
              type="number"
              id="capital"
              name="capital"
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
              placeholder="e.g., 125000"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="risk-aversion">
              Enter the risk aversion parameter:
            </label>
            <input
              type="text"
              id="risk-aversion"
              name="risk_aversion"
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
              placeholder="e.g., 0.5"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="weights">
              Enter the weights (comma-separated):
            </label>
            <input
              type="text"
              id="weights"
              name="weights"
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
              placeholder="e.g., 0.4, 0.3, 0.3"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="asset-pair">
              Enter asset pairs (comma-separated, use '-' between assets):
            </label>
            <input
              type="text"
              id="asset-pair"
              name="assetPair"
              className="w-full p-2 bg-black border border-[#FFAB3A] rounded"
              placeholder="e.g., RELIANCE.BO-TCS.BO, TCS.BO-HDFCBANK.BO"
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-[#FFAB3A] text-black py-2 px-4 rounded-full w-1/4 hover:bg-orange-400">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputPage;
