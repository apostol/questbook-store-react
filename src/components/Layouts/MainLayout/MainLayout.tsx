import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Header from "~/components/Layouts/MainLayout/components/Header";
import Box from "@mui/material/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="right">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/" underline="hover">
        Questbook Store
      </Link>
      {", "}
      {new Date().getFullYear()}
      <br></br>
      {" Components design by "}
      <Link color="inherit" href="https://material-ui.com/" underline="hover">
        MUI
      </Link>{" "}
    </Typography>
  );
}

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ pb: 8 }} maxWidth={false}>
          {children}
        </Container>
      </main>
      <Box
        component={"footer"}
        sx={{ bgcolor: (theme) => theme.palette.background.paper, padding: 6 }}
      >
        <Copyright />
      </Box>
    </>
  );
};

export default MainLayout;
