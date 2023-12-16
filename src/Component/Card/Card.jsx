import PropTypes from "prop-types";

function Card({
  Image = "https://code-with-mj.github.io/Portfolio_website/myproject/image/netflix.png",

  //   Link = "Demo",
}) {
  return (
    <>
      <div className={`flex justify-center items-center m-4 cursor-pointer`}>
        <div className="w-[450px] h-[250px] rounded-md">
          <img
            src={Image}
            alt="Laptop"
            className="h-full w-[100%] rounded-[25px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
Card.propTypes = {
  Image: PropTypes.string,
  Title: PropTypes.string,
  Link: PropTypes.string,
};
export default Card;
