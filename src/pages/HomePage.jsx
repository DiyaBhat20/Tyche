import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DashboardContext } from "../../context/dashborad";

const HomePage = () => {
  const navigate = useNavigate(); 
  const {setdata}=useContext(DashboardContext);
  const handlesubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      console.log(data);

      // Validate required fields
      if (!data.symbol) {
        toast.error("Please fill in all required fields!");
        return;
      }

      // Format data for API
      const requestData = {
        symbol: data.symbol,
      };

      console.log("Request Data: ", requestData);

      // Uncomment and update this when the API is ready
      const res = await fetch('api/portfolio/dashboard/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      const resData = await res.json();
      console.log(resData);
      setdata(resData);


      toast.success("Form submitted successfully!");
      navigate('/dashboard')
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col flex-grow">
      <ToastContainer />
      <form onSubmit={handlesubmit}>
        <div className="mt-2 flex justify-center text-white">
          <input
            type="text"
            placeholder="Search here..."
            name="symbol"
            id="symbol"
            className="bg-black border border-blue-600 p-2 focus:border-blue-600 w-[60%]"
          />
          <button type="submit" className="bg-blue-500 ml-5 p-2">
            Submit
          </button>
        </div>
      </form>

      <div className="mt-8 bg-[#131010] text-white w-[80%] mx-auto border-l-8 border-[#FFAB3A] px-40">
        <div className="font-jeju">
          <p className="text-[40px] pt-4">Stay informed with Tyche</p>
          <p className="text-[40px]">virtual events.</p>
          <p className="text-[22px] pt-3">
            Attend webinars that help to make sense of the current market environment and see how Tyche can help.
          </p>
          <div className="flex justify-between">
            <p className="text-[40px] py-4 text-[#FFAB3A]">SMNR</p>
            <button
              onClick={() => navigate("/input")}
              className="text-white text-[25px] h-16 px-3 border-2 border-white hover:bg-[#242121]"
            >
              GET STARTED
            </button>
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
};

export default HomePage;
