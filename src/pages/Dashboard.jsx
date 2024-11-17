import React, { useContext } from 'react'

const Dashboard = () => {
  const {data}=useContext(DashboardContext);
  console.log(data);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default Dashboard;