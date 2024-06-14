import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import { barazacoin_backend, createActor } from "../../../declarations/barazacoin_backend";
import { useParams } from "react-router-dom";
import { HttpAgent } from "@dfinity/agent";

const ArticleComponent: React.FC = () => {
<<<<<<< HEAD
  const { barazaId } = useParams();
  const [baraza, setBaraza] = React.useState<any>();
  let actor = barazacoin_backend;
  const agent:any = new HttpAgent();
  //here you can use an env variable for actor canister ID
  actor = createActor("kc5xa-pqaaa-aaaap-qhk3a-cai", {
    agent,
  });

  async function fetchBaraza() {
    let baraza = await actor.get_single_baraza(
      parseInt(barazaId as string) as unknown as bigint
    );

    return baraza;
  }
  React.useEffect(() => {
    async function fetchData() {
      const fetchedBaraza: any = await fetchBaraza();
      setBaraza(fetchedBaraza?.Ok);
      console.log(`The baraza is ${fetchedBaraza?.Ok?.title}`);
      console.log(`The baraza is ${fetchedBaraza?.Err}`);
      console.log(`The baraza is ${baraza}`);
=======
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
>>>>>>> refs/remotes/origin/main
    }

    fetchData();
  }, []);
  return (
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Card sx={{ p: 3, background: "#1e1e1e" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: "#bb86fc" }}>
<<<<<<< HEAD
            {baraza?.title}
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" sx={{ color: "#ffffff" }}>
              {baraza?.content}
=======
            {barazacoin?.title}
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" sx={{ color: "#ffffff" }}>
              {barazacoin?.content.join(" ")}
>>>>>>> refs/remotes/origin/main
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

<<<<<<< HEAD
export default ArticleComponent;
=======
export default ArticleComponent;
>>>>>>> refs/remotes/origin/main
