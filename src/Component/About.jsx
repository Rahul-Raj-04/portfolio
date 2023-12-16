export default function About() {
  return (
    <div className="py-16 bg-[#323946]">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              className=" rounded-md"
              src="https://wallpaperaccess.com/full/1385382.jpg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-white font-bold md:text-4xl">
              AboutMe
            </h2>
            <h1 className=" font-semibold text-3xl text-white">
              Frontend Developer
            </h1>
            <p className="mt-6 text-white">
              As a dedicated and skilled frontend developer specializing in
              React.js, I bring a passion for crafting seamless user interfaces
              and exceptional user experiences. With a solid foundation in web
              development, I have honed my skills in creating responsive and
              dynamic applications. Proficient in leveraging React.js to build
              modular and reusable components, I am adept at translating design
              concepts into interactive and visually appealing interfaces. My
              commitment to staying abreast of industry trends and best
              practices ensures that I deliver cutting-edge solutions.
              Collaborative by nature, I thrive in team environments where I can
              contribute innovative ideas and work collectively to achieve
              project goals. Detail-oriented and driven, I continuously seek
              opportunities for professional growth and am committed to
              delivering high-quality, performant, and user-centric applications
              in the ever-evolving landscape of frontend development....
            </p>
            <p className="mt-4 text-white">
              <button className="w-[150px] h-[50px] bg-[rgb(0,238,255)] rounded-[25px] hover:bg-green-500">
                Read More..
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
