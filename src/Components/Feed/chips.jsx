import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 5, label: "Vue.js" },
    { key: 6, label: "Angular" },
    { key: 7, label: "jQuery" },
    { key: 9, label: "Polymer" },
    { key: 10, label: "React" },
    { key: 11, label: "Vue.js" },
    { key: 12, label: "Angular" },
    { key: 13, label: "jQuery" },
    { key: 14, label: "Polymer" },
    { key: 15, label: "React" },
    { key: 16, label: "Vue.js" },
    { key: 17, label: "React" },
    { key: 18, label: "Vue.js" },
  ]);

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === "React") {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              sx={{
                backgroundColor: "#212225",
                color: "white",
                width: "100px",
                height: "50px",
                borderRadius: "10px",

                "&:hover": {
                  border: "1px solid white",
                  cursor: "pointer",
                },
              }}
              icon={icon}
              label={data.label}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
