import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // ✅ new import
import { AuthContext } from "./Authcontext";
import { Link } from "react-router";

const Navbar = (props) => {
  const { cart } = React.useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  // const {cart}=React.useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ top: 0, zIndex: 1100 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              background: "linear-gradient(90deg, #00f260,rgb(137, 221, 76))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontSize: {
                xs: "1rem", // Adjusted font size for mobile screens
                sm: "2rem", // Adjusted font size for small screens
                md: "2.5rem", // Larger font size for medium and large screens
              },
              mr: 3,
              overflow: "visible", // Ensures the text is visible even if it overflows
              display: "block", // Makes sure the text is treated as a block element
              maxWidth: "100%", // Prevents text from being cut off if it's too wide
              whiteSpace: "nowrap", // Prevents text from wrapping onto a new line
            }}
          >
            {isMdUp ? "ElectroCart" : "Electrocart"}
          </Typography>

          <input
            type="text"
            placeholder="search"
            className="form-control w-25"
            onChange={(e) => props.setsearch(e.target.value)}
          />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to="/cart"
            >
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default Navbar;
