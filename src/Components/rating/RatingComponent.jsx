import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const RatingComponent = ({rating}) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="flex items-center gap-3 pb-2.5" >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography className="text-gray-600" component="legend">({rating})</Typography>
    </Box>
  );
};

export default RatingComponent;
