import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Cart from "~/components/Layouts/MainLayout/components/Cart";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { FormattedMessage } from "react-intl";
import Language from "./Language";
import { Article, ManageAccounts } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const auth = true;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link
            component={RouterLink}
            sx={{ color: "inherit" }}
            underline="none"
            to="/"
          >
            <FormattedMessage id="app_name" />
          </Link>
        </Typography>
        {auth && (
          <>
            <Article />
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              size="large"
            >
              <ManageAccounts />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                component={RouterLink}
                to="/admin/orders"
                onClick={handleClose}
              >
                Manage orders
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/admin/products"
                onClick={handleClose}
              >
                Manage products
              </MenuItem>
            </Menu>
            <Divider orientation="vertical" flexItem />
          </>
        )}
        <Cart />
        <Avatar
          alt="Remy Sharp"
          // src="/static/images/avatar/1.jpg"
        >
          <AccountCircle />
        </Avatar>
        <Language />
      </Toolbar>
    </AppBar>
  );
}
