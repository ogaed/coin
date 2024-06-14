import * as React from "react";
<<<<<<< HEAD
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = ["Barazas", "Share","Whitepaper", "Roadmap","How it works"];


const ResponsiveAppBar: React.FC<{ handleConnectWallet: () => void }> = ({
  handleConnectWallet,
}) => {
=======
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Barazacoin", "Tokenomics", "Share"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
>>>>>>> refs/remotes/origin/main
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#1e1e1e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
<<<<<<< HEAD
            component={Link}
            to="/"
            sx={{
              mr: 2,
              flexGrow: 1,
=======
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
>>>>>>> refs/remotes/origin/main
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#bb86fc",
              textDecoration: "none",
            }}
          >
            DSTC
          </Typography>

<<<<<<< HEAD
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
=======
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
>>>>>>> refs/remotes/origin/main
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
<<<<<<< HEAD
                vertical: "top",
                horizontal: "left",
              }}
=======
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
>>>>>>> refs/remotes/origin/main
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
<<<<<<< HEAD
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page}`}>
                  <Typography variant="body1" sx={{ color: "#bb86fc" }}>
=======
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "#bb86fc" }}>
>>>>>>> refs/remotes/origin/main
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

<<<<<<< HEAD
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page}`}
                sx={{ mx: 2, color: "#bb86fc" }}
              >
                {page}
              </Button>
=======
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#bb86fc",
              textDecoration: "none",
            }}
          >
            DSTC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
>>>>>>> refs/remotes/origin/main
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
<<<<<<< HEAD
            <Button
              variant="contained"
              color="primary"
              onClick={handleConnectWallet}
              sx={{ mr: 2 }}
            >
         Connect wallet
            </Button>
          
            
            <Menu
              id="user-menu"
=======
            <Button variant="contained" color="primary">
              Wallet
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
>>>>>>> refs/remotes/origin/main
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
<<<<<<< HEAD
=======
              keepMounted
>>>>>>> refs/remotes/origin/main
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
<<<<<<< HEAD
             
=======
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ color: "#bb86fc" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
>>>>>>> refs/remotes/origin/main
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> refs/remotes/origin/main

export default ResponsiveAppBar;
