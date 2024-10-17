import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const PortfolioPositions = () => {
  const navigate = useNavigate(); 

  const handleVolatilityClick = () => {
    navigate('/volatility');
  };

  const handleoutputClick = () => {
    navigate('/output');
  }; 
  
  const handlePortfolioWeightsClick = () => {
    navigate('/portfolioweights');
  };  

  return (
    <div className="bg-black flex-grow text-white">
      <div className="flex flex-row justify-center text-[#FFAB3A] pt-10 gap-x-10">
        <button onClick={handleoutputClick} className="bg-[#131010] px-4 py-2 font-semibold text-xl w-[15%] rounded-3xl ">
          Annualized Returns
        </button>
        <button 
          className="bg-[#131010] px-4 py-2 font-semibold text-xl w-[15%] rounded-3xl" 
          onClick={handleVolatilityClick} // Attach the onClick handler
        >
          Volatility
        </button>
        <button className="bg-[#131010] px-4 py-2 font-semibold text-xl w-[15%] rounded-3xl border-2 border-[#FFAB3A]">
          New Portfolio Positions
        </button>
        <button className="bg-[#131010] px-4 py-2 font-semibold text-xl w-[15%] rounded-3xl"
        onClick={handlePortfolioWeightsClick}>
          New Portfolio Weights
        </button>
      </div>

      <div className="container mx-auto px-8 pb-4">
        <div className="mt-8 bg-[#131010] text-[#FFAB3A] w-[80%] h-[60%] mx-auto border-l-8 border-r-8 border-[#FFAB3A] px-10 py-4">
          {/* Content for OutputPage or other components can go here */}
        </div>
      </div>
    </div>
  );
}

export default PortfolioPositions;
