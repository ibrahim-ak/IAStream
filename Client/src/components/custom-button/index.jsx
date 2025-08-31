import PropTypes from 'prop-types';

const CustomButton = ({title, LeftIcon, RightIcon, classBtn}) => {
  return (
    <button className={`flex items-end rounded-full ${classBtn}`}>{LeftIcon}{title}{RightIcon}</button>
  )
}

CustomButton.propTypes = {
  title: PropTypes.node.isRequired,
  LeftIcon: PropTypes.node,
  RightIcon: PropTypes.node,
  classBtn: PropTypes.string
};

export default CustomButton;