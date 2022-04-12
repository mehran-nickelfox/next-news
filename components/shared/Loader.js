import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <div className="w-screen h-screen">
      <div className="relative top-1/2 h-full w-full flex justify-center">
        <CircularProgress size={80} thickness={6} />
      </div>
    </div>
  );
};

export default Spinner;
