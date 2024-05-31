import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import { barazacoin_backend, createActor } from "../../../declarations/barazacoin_backend";
import { useParams } from "react-router-dom";
import { HttpAgent } from "@dfinity/agent";

const ArticleComponent: React.FC = () => {
  const { barazacoinId } = useParams();
  const [barazacoin, setBarazacoins] = React.useState<any>();
  let actor = barazacoin_backend;
  const agent = new HttpAgent();
  //here you can use an env variable for actor canister ID
  actor = createActor("avqkn-guaaa-aaaaa-qaaea-cai", {
    agent,
  });

  async function fetchBarazacoins() {
    let barazacoin = await actor.get_single_barazacoin(
      parseInt(barazacoinId as string) as unknown as bigint
    );

    return barazacoin;
  }
  React.useEffect(() => {
    async function fetchData() {
      const fetchedBarazacoins: any = await fetchBarazacoins();
      setBarazacoins(fetchedBarazacoins?.Ok);
      console.log(`The barazacoin is ${fetchedBarazacoins?.Ok?.title}`);
      console.log(`The barazacoin is ${fetchedBarazacoins?.Err}`);
      console.log(`The barazacoin is ${barazacoin}`);
    }

    fetchData();
  }, []);
  return (
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Card sx={{ p: 3, background: "#1e1e1e" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: "#bb86fc" }}>
            {barazacoin?.title}
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" sx={{ color: "#ffffff" }}>
              {barazacoin?.content.join(" ")}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ArticleComponent;
