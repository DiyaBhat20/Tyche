import React, { useContext } from 'react';
import { DashboardContext } from '../../context/dashborad';

const Dashboard = () => {
  const { Res } = useContext(DashboardContext); // Ensure DashboardContext is correctly initialized
  console.log(Res.data.graph_url);

  // Prepend the base URL to the graph_url if available
  const imageUrl = Res.data?.graph_url ? `http://127.0.0.1:8000/${Res.data.graph_url}` : null;
  console.log(imageUrl);

  return (
    <div className='text-white bg-black min-h-screen flex justify-center items-center'>
      {imageUrl ? (
        <img src={imageUrl} alt="Graph" className="max-w-full h-auto" />
      ) : (
        <p>No image URL available</p>
      )}
    </div>
  );
};

export default Dashboard;
