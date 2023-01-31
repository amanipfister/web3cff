import React from "react";

const CustomButton = ({ btnType, title, handeClick, styles }) => {
  return (
    <div>
      <button
        type={btnType}
        className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
        onClick={handeClick}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
