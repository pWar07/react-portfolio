const Navbar = () => {
  return (
    <div
      className='fixed z-[999] w-full px-10 lg:px-[200px] py-3 lg:py-6 font-["neue"] flex justify-between items-center'
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="name">
        <h1 className="font-bold text-xl lg:text-3xl">pwar.</h1>
      </div>
      <div className="links flex capitalize gap-10">
        {["About Me", "Education","My Works", "Experience", "Contact"].map((v, i) => (
          <a key={i} className="text-lg font-light">
            {v}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;