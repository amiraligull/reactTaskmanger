import PropTypes from "prop-types";
const Button = ({ text, onClick, showAdd }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`text-white  p-2 shadow rounded bg-gray-800 ${
          showAdd ? `bg-red-500` : `red`
        }`}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};


Button.defaultProps = {
  text: "add",
};

export default Button
