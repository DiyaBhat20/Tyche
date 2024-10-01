import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="mt-8 flex justify-center text-white">
        <input
          type="text"
          placeholder="Search here..."
          className="bg-black border border-blue-600 p-2 border-2 focus:border-blue-600" style={{ width: '1000px' }} // Increased width
        />
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default HomePage;
