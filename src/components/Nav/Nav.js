import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/icons/mountainIcon.png";
import { useState } from "react";

function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  //const [lang, setLang] = useState(null);
  //const open = Boolean(lang);

  // const handleClose = () => {
  //   setLang(null);
  // };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //get the headings
  const headings = ["What", "Concerns", "Actions", "Who"];
  return (
    <AppBar position="static" className="bg-gray-500 max-w-screen-xl mx-auto ">
      <Container maxWidth="2xl" className="bg-gray-500">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              fontFamily: "oswald",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <a href="/" className="flex items-center">
              <img src={logo} className="h-6 mr-3 sm:h-9" alt="mountain town" />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="hover:text-red-700"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {headings.map((i) => (
                <MenuItem onClick={handleCloseNavMenu} key={i.toString()}>
                  <a href={`#${i.toLowerCase()}`}>
                    <Typography className="text-black " sx={{ minWidth: 100 }}>
                      {i}
                    </Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "oswald",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className="h-6 mr-3 sm:h-9"
                alt="briancon fantomes logo"
              />
            </a>
          </Typography>
          <Box
            className="flex justify-left items-center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {headings.map((i) => (
              <a href={`#${i.toLowerCase()}`} key={i.toString()}>
                <Typography className="text-white" sx={{ minWidth: 100 }}>
                  {i}
                </Typography>
              </a>
            ))}
          </Box>

          {/* <Menu
            anchorEl={lang}
            id="language"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          ></Menu> */}

          <a href="#petition">
            <Box
              sx={{
                flexGrow: 0,
                marginTop: ".375rem",
                marginBottom: ".375rem",
              }}
            >
              <button
                type="button"
                className=" border-solid border-white border-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-1.5 py-1.5 text-center mx-4 md:dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Petition
              </button>
            </Box>
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
