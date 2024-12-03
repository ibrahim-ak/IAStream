import React from "react";

const Button = ({title, LeftIcon, RightIcon, classBtn}) => {
  return (
    <button className={`flex items-end rounded-full ${classBtn}`}>{LeftIcon}{title}{RightIcon}</button>
  )
}

export default Button;