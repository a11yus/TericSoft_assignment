import React from "react";
import { border, Box } from "@chakra-ui/react";

const Sports = ({ sportsData }) => {
  return (
    <div 
    style=
    {{
        display: 'flex',
        justifyContent: 'space-evenly'
    }}
    >
      {sportsData?.map((elm) => (
        <div
          style={{
            width: "300px",
            position: "relative",
            display: 'flex'
          }}
        >
          <img
            style={{
              width: "300px",
              height: "350px",
            }}
            src={elm.img}
          />
          <h4
            style={{
              color: "white",
              display: "flex",
              paddingLeft: "6px",
              position: "absolute",
              bottom: "2rem",
            }}
          >
            {elm.days}
          </h4>
          <Box
            style={{
              display: "flex",
              color: "white",
              paddingLeft: "6px",
              position: "absolute",
              bottom: "8px",
              backgroundColor: "grey",
              opacity: 0.6,
            }}
          >
            <p>{elm.warmup}</p>
            <p
              style={{
                marginLeft: "1rem",
              }}
            >
              {elm.type}
            </p>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default Sports;
