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
import { HashLink as Link } from "react-router-hash-link";

function Nav({ what, concerns, actions, who }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //get the headings
  const headings = ["What", "Concerns", "Actions", "Who"];
  return (
    <section className="bg-green-800 h-20">
      <div
        position="static"
        className="bg-green-800 max-w-screen-xl mx-auto border-none pt-1"
      >
        <Container maxWidth="2xl" className="bg-green-800">
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
                <img
                  src={logo}
                  className="h-6 mr-3 sm:h-9 "
                  alt="mountain town"
                />
              </a>{" "}
              <a href="/">
                <h5 className="text-white visited:text-white">
                  SavingRecordRidge
                </h5>
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
                className="hover:text-white-700"
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
                      <Typography className="text-black" sx={{ minWidth: 100 }}>
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
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "oswald",
                fontWeight: 700,
                color: "white",
                textDecoration: "none",
                fontSize: 15,
              }}
            >
              <a href="/">
                <h5 className="text-white visited:text-white tracking-widest">
                  SavingRecordRidge
                </h5>
              </a>
            </Typography>
            <Box
              className="flex justify-around w-[350px] "
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <a
                className="text-white"
                href={`#${what.toLowerCase()}`}
                key={what.toString()}
              >
                {what}
              </a>
              <a
                className="text-white"
                href={`#${concerns.toLowerCase()}`}
                key={concerns.toString()}
              >
                {concerns}
              </a>{" "}
              <a
                className="text-white"
                href={`#${actions.toLowerCase()}`}
                key={actions.toString()}
              >
                {actions}
              </a>{" "}
              <a
                className="text-white"
                href={`#${who.toLowerCase()}`}
                key={who.toString()}
              >
                {who}
              </a>
            </Box>

            <a href="#petition">
              <Box
                sx={{
                  flexGrow: 0,
                  marginTop: ".375rem",
                  marginBottom: ".375rem",
                }}
              >
                {/* <Link to="/#actions" target="_blank">
                  <button
                    type="button"
                    className="mr-auto tracking-wide ml-auto border-solid border-white border-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-1.5 py-1.5 text-center mx-0 md:mx-4 md:dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Action
                  </button>
                </Link> */}
              </Box>
            </a>
          </Toolbar>
        </Container>
      </div>
    </section>
  );
}
export default Nav;
