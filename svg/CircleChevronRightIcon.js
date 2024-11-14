import React from "react";

const CircleChevronRight = ({ height = "24", width = "24", fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-circle-chevron-right"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m10 8 4 4-4 4" />
    </svg>
  );
};

export default CircleChevronRight;
