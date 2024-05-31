import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Assume the image is located in the assets folder
import coinImage from "../../public/logo.jpeg";

const DSTCComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ mt: 4, width: "100vw" }}>
      <Card sx={{ p: 2, background: "#121212", color: "#ffffff" }}>
        <CardContent>
          <Box
            component="img"
            src={coinImage}
            alt="DSTC Coin"
            sx={{
              display: "block",
              margin: "0 auto",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              mb: 3,
            }}
          />
          <Typography variant="h4" gutterBottom>
            Welcome to Baraza Coin
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Turn into a meeting with baraza coin
          </Typography>
          <Box mt={2} mb={2}>
            <Typography variant="h6" gutterBottom>
              When stuck call elders and discuss
            </Typography>
            <Typography variant="h6" gutterBottom>
             Elders are wise
            </Typography>
          </Box>
          <Typography variant="body1" gutterBottom>
           Getting to the table and discuss or geetting to a meeting is the best way too set up your lans
           Earn 
          </Typography>
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  navigate("Share");
                }}
              >
                Share Your Story
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" color="secondary" fullWidth>
                Buy Baraza Coins
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DSTCComponent;
