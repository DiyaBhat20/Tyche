import React from 'react';
import Navbar from '../features/navbar';

const ThirdPage = () => {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="container mx-auto">
        <Navbar></Navbar>

        {/* Table Section */}
        <div className="bg-[rgb(36,23,14)] overflow-x-auto">
          <table className="min-w-full border border-yellow-500">
            <thead>
              <tr className="bg-[rgb(36,23,14)]">
                <th className="border border-yellow-500 p-4 text-lg text-center">Annualized Returns</th>
                <th className="border border-yellow-500 p-4 text-lg text-center">Volatility</th>
                <th className="border border-yellow-500 p-4 text-lg text-center">New portfolio positions</th>
                <th className="border border-yellow-500 p-4 text-lg text-center">New portfolio weights</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Rows - You can add more as needed */}
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="bg-[rgb(36,23,14)]">
                  <td className="border border-yellow-500 p-4 text-center"></td>
                  <td className="border border-yellow-500 p-4 text-center"></td>
                  <td className="border border-yellow-500 p-4 text-center"></td>
                  <td className="border border-yellow-500 p-4 text-center"></td>
                </tr>
              ))}
              <tr className="bg-[rgb(36,23,14)]">
                <td colSpan="4" className="border border-yellow-500 p-4 text-left">
                  Volume:
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
