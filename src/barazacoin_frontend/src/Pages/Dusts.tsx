import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { barazacoin_backend, createActor } from "../../../declarations/barazacoin_backend";
import {  HttpAgent } from "@dfinity/agent";
import { Link } from "react-router-dom";

const BlogCardsComponent: React.FC = () => {
  const [barazas, setBarazas] = React.useState<any>([]);
  let actor = barazacoin_backend;
  const agent:any = new HttpAgent();
  //here you can use an env variable for actor canister ID
  actor = createActor("kc5xa-pqaaa-aaaap-qhk3a-cai", {
    agent,
  });

  async function fetchBarazas() {
    let barazas = await actor.get_barazas();
    return barazas;
  }
  React.useEffect(() => {
    async function fetchData() {
      const fetchedBarazas = await fetchBarazas();
      setBarazas(fetchedBarazas);
    }

    fetchData();
  }, []);
  return (
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Grid container spacing={4}>
        {barazas.map(([_, post]:any,id: number) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            {barazas.length < 1 && (
              <h5 style={{ textAlign: "center" }}>No barazas posted yet</h5>
            )}
           <Card sx={{ backgroundColor: "#1e1e1e", color: "#ffffff", minHeight: "150px", padding: "16px", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
  <Box
    component={Link}
    to={`/Barazas/${id}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <CardContent>
      <Typography variant="h5" gutterBottom sx={{ color: "#bb86fc" }}>
        {post.title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#ffffff" }}>
        {post.content?.slice(0, 100) + "..."}
      </Typography>
    </CardContent>
  </Box>
</Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogCardsComponent;