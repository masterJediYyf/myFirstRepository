import React from "react";

const Button = ({ onClickButton, children, count }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
      {count && <span>count: {count}</span>}
    </>
  );
};

export default React.memo(Button);
