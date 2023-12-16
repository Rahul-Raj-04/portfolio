function Home() {
  const handleButtonClick = () => {
    window.location.href =
      "https://docs.google.com/document/d/15KRcNyCTkD_kYNJNVkieaYddIZL6dcbI/edit?usp=drive_link&ouid=109347376187152892448&rtpof=true&sd=true";
  };
  return (
    <div>
      <div className=" w-full h-[700px]  flex justify-center gap-4  text-white bg-[#1f242d]">
        <div className=" w-[45%] h-full   flex-col flex justify-center items-center text-4xl font-bold pb-[250px] ">
          Hello,Its Me Rahul Kumar And I am Frontend Developer
          <button
            onClick={handleButtonClick}
            className=" w-[300px] h-[70px] mt-16 mr-[160px] rounded-[25px]  hover:shadow-2xl  bg-[#265a5e]"
          >
            Download cv
          </button>
        </div>
        <div className=" w-[45%] h-full  flex justify-center items-center ">
          <img
            className=" bg-transparent   w-full rounded-lg h-[60%] flex justify-center items-center "
            src="https://i.pinimg.com/1200x/68/84/10/688410c12edecf385116ef28b769e257.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
