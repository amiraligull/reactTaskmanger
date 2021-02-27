import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="flex bg-indigo-500 p-10 shadow-xl">
      <h1 className="flex-1 text-white text-2xl "> {title}</h1>
      <Button onClick={onAdd} text={ showAdd ? 'close' : 'add' } showAdd={showAdd} />
    </div>
  );
};

Header.defaultProps = {
    title: 'Task Manager',
}   

Header.propTypes = {
  title: PropTypes.string,
};

// this is our we style  in line  or internally
const stylingbutton = {
  color: "white",
  backgroundColor: "green",
};
export default Header
