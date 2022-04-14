import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
const AppLoader = () => {
  return (
    <Box className='z-50' sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
};

export default AppLoader;
