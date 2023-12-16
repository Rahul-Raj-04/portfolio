import Card from "./Card/Card";

function Portfolio() {
  return (
    <>
      <div className=" w-full h-auto bg-slate-500">
        <div
          className="flex justify-center text-white pt-16 text-4xl font-bold
         "
        >
          MY <h1 className=" ml-4 text-[rgb(0,238,255)]">PROJECT</h1>
        </div>
        <div className=" grid grid-cols-3 justify-center items-center bg-slate-500 border-[5px]  rounded-[25px] mt-16 md:grid-cols-3 sm:grid-cols-2">
          <Card Image="https://code-with-mj.github.io/Portfolio_website/myproject/image/college.png" />
          <Card />
          <Card Image="https://code-with-mj.github.io/Portfolio_website/myproject/image/ecommerce.png" />
          <Card Image="https://code-with-mj.github.io/Portfolio_website/myproject/image/clock.png" />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
