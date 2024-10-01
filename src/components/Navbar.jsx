const Navbar = () => {
  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <nav className="bg-black px-4 pb-2 flex justify-between items-center">
      <div className="text-white">
        <h1 className="font-bold font-jeju md:text-[50px] text-[40px]">Tyche</h1>
        <p className="font-jaldi text-[15px] sm:text-[20px]">“A smile is a curve that sets everything straight.”</p>
        <p className="font-jaldi text-[15px] sm:text-[20px] text-[#3373A6]">Phyllis Diller</p>
      </div>
      <div className="flex flex-col items-end text-white font-jeju text-[15px] sm:text-[20px]">
      <p>{getCurrentDate()}</p>
      <p>Thank you for being a client since 2019</p>
      </div>
    </nav>
  );
};

export default Navbar;