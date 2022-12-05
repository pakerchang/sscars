import React from "react";

function PaginationButton(props) {
  const { btnContent, click } = props;
  const handleClick = () => click();
  return <button className="rounded-full border" onClick={handleClick}>{btnContent}</button>;
}

export default PaginationButton;
