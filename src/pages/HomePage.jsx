import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-grow">      
      <div className="mt-2 flex justify-center text-white">
        <input               //Search Bar
          type="text"
          placeholder="Search here..."
          className="bg-black border border-blue-600 p-2 border-2 focus:border-blue-600 w-[80%]"  // Increased width
        />
      </div>

      <div className="mt-8 bg-[#131010] text-white w-[80%] mx-auto border-l-8 border-[#FFAB3A] px-40">
        <div className="font-jeju">
          <p className="text-[40px] pt-4">Stay informed with Tyche</p>
          <p className="text-[40px]">virtual events.</p>
          <p className="text-[22px] pt-3">Attend webinars that help to make sense of the current
          market environment and see how Tyche can help.</p>
          <div className="flex justify-between ">
          <p className="text-[40px] py-4 text-[#FFAB3A]">SMNR</p>
          <button className="text-white text-[25px] h-16 px-3 border-2 border-white hover:bg-[#242121]">GET STARTED</button>
          </div>
        </div>
      </div>

      <div className="mt-8 pb-3 flex justify-between items-center bg-[#131010] text-white w-[90%] mx-auto border-l-8 border-[#FFAB3A] px-40">
        <div>
        <p className="text-[50px]">Tyche</p>
        <p className="text-[30px]">BRIEFS</p>
        </div>
        <div>
        <p className="text-[25px]">Market-leading Intelligence, News, and</p>
        <p className="text-[25px]">Data delivered directly to your inbox</p>
        </div> 
        <div>
        <p className="text-[20px]">Subscribe for Free</p>
        <p className="text-[40px] text-[#FFAB3A]">BRIEF</p>
        </div>                
      </div>      


    </div>
  );
}

export default HomePage;
