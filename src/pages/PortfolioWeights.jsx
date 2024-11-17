import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PortfolioContext } from "../../context/portfolio";

const PortfolioWeights = () => {
  const navigate = useNavigate(); 
  const { res } = useContext(PortfolioContext);
  const data = res?.allocations || [];

  const handleOutputClick = () => {
    navigate('/output');
  };

  const handleVolatilityClick = () => {
    navigate('/volatility');
  };

  const handlePortfolioPositionsClick = () => {
    navigate('/portfoliopositions');
  };   

  return (
    <div className="bg-black flex-grow text-white">
      <div className="flex flex-row justify-center text-[#FFAB3A] pt-10 gap-x-10">
        <button className="bg-[#131010] px-4 py-2 font-semibold text-xl w-[15%] rounded-3xl" onClick={handleOutputClick}>
          Annualized Returns
        </button>
        <button className="bg-[#131010] px-4 py-2 font-semibold text-xl w-[15%] rounded-3xl" onClick={handleVolatilityClick}>
          Volatility
        </button>
        <button className="bg-[#131010] px-4 py-2 font-semibold text-xl w-[15%] rounded-3xl" onClick={handlePortfolioPositionsClick}>
          New Portfolio Positions
        </button>
        <button className="bg-[#131010] px-4 py-2 font-semibold text-xl w-[15%] rounded-3xl border-2 border-[#FFAB3A]">
          New Portfolio Weights
        </button>
      </div>

      <div className="container mx-auto px-8 pb-4">
        <div className="mt-8 bg-[#131010] text-[#FFAB3A] w-[80%] h-[60%] mx-auto border-l-8 border-r-8 border-[#FFAB3A] px-10 py-4">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <thead className="bg-[#131010]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#FFAB3A] uppercase tracking-wider">
                  Company
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#FFAB3A] uppercase tracking-wider">
                  New Weights
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#131010] divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={`${item.company_name}-${index}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#FFAB3A]">
                    {item.company_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#FFAB3A]">
                    {item.new_weight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWeights;
