import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";

const RedirectText = styled("span")({
  color: "#00AFF5",
  fontWeight: 500,
  cursor: "pointer",
});
const RedirectInfo = ({
  text,
  redirectText,
  addtionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={addtionalStyles ? addtionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
