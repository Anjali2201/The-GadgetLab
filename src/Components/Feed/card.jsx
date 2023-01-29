import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const Boxes = () => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 350,
          p: 2,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          rowGap: "10px",
          columnGap: "10px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#212225",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px #000000",
        }}
      >
        <CardMedia
          component="img"
          image="https://picsum.photos/seed/{seed}/200/140"
          alt="random"
        />
        <CardContent>
          <Typography sx={{ color: "white" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Typography sx={{ color: "white" }}>Share</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Boxes;
