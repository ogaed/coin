<<<<<<< HEAD
import  { useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> refs/remotes/origin/main
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { barazacoin_backend, createActor } from "../../../declarations/barazacoin_backend";
import { HttpAgent } from "@dfinity/agent";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#bb86fc",
            },
            "&:hover fieldset": {
              borderColor: "#bb86fc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#bb86fc",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#bb86fc",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#bb86fc",
          },
        },
      },
    },
  },
});

<<<<<<< HEAD
const PublishStoryComponent= ({principal}:any) => {


  function getByteLength(str:string) {
    return new Blob([str]).size;
}


  const navigate = useNavigate();

  let actor = barazacoin_backend;
  const agent:any = new HttpAgent();
  //the id here is local one
  actor = createActor("kc5xa-pqaaa-aaaap-qhk3a-cai", {
=======
const PublishStoryComponent: React.FC = () => {
  const navigate = useNavigate();

  let actor = barazacoin_backend;
  const agent = new HttpAgent();
  //the id here is local one
  actor = createActor("avqkn-guaaa-aaaaa-qaaea-cai", {
>>>>>>> refs/remotes/origin/main
    agent,
  });
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
<<<<<<< HEAD
  const [disabled, setDisabled]=useState(false)

  const handlePublish = async () => {
    setDisabled(true)
    let story_no_lines = story;
    let words =`written by ${principal}\n...........\n`+ story_no_lines
    if (getByteLength(words) > 102400) {
   return  alert("Please write a minimal text. The story exceeds 102400 bytes.");
}
else{



    let res:any =  await actor.publish_baraza(words, title)
  

    if (res?.Ok ) {
        setDisabled(false)
      alert("Succesfully published a baraza and  earned some  dstc check your wallet!");
      navigate("/");
    } else {
             setDisabled(false)
      alert("Could not publish a baraza");
    }
  }
  };

     if(!principal){
        return <h1 style={{color:"white", textAlign:"center"}}>Please login with a wallet first to continue</h1>
      }
  return (
    <ThemeProvider theme={darkTheme}>
   
=======

  const handlePublish = async () => {
    let story_no_lines = story.replace(/\r?\n|\r/g, " ");
    let words = story_no_lines.split(" ");

    let res = await actor.publish_barazacoin(words, title);

    if (res.length > 0) {
      alert("Succesfully published a barazacoin");
      navigate("/");
    } else {
      alert("Could not publish a barazacoin");
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
>>>>>>> refs/remotes/origin/main
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Card variant="outlined" sx={{ p: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
<<<<<<< HEAD
              Share Your Baraza Story
=======
              Share Your Barazacoins Story
>>>>>>> refs/remotes/origin/main
            </Typography>
            <Box mt={2} mb={2}>
              <TextField
                fullWidth
                variant="outlined"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Your Story"
                multiline
                rows={6}
                value={story}
                onChange={(e) => setStory(e.target.value)}
              />
            </Box>
            <Button
<<<<<<< HEAD
            disabled={disabled}
=======
>>>>>>> refs/remotes/origin/main
              variant="contained"
              color="primary"
              fullWidth
              onClick={handlePublish}
            >
              Publish
            </Button>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

<<<<<<< HEAD
export default PublishStoryComponent;
=======
export default PublishStoryComponent;
>>>>>>> refs/remotes/origin/main
