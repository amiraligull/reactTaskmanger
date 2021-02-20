import PropTypes from "prop-types";
const Button = ({ text, onClick }) => {

    return (
      <div>
        <button
          onClick={onClick}
          className="text-white bg-gray-800 p-2 shadow rounded"
        >
          {text}
        </button>
      </div>
    );
}

Button.propTypes = {
  text: PropTypes.string,
};


Button.defaultProps = {
  text: "add",
};

export default Button
