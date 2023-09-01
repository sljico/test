import { Link } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import AuthLogin from "../components/auth/authLogin";

const Signup = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        sx={{ mb: { xs: -0.5, sm: 0.5 } }}
      >
        <Typography variant="h3">Sign in</Typography>
        <Typography
          component={Link}
          to="/signup"
          variant="body1"
          sx={{ textDecoration: "none" }}
          color="primary"
        >
          Don&apos;t have an account?
        </Typography>
      </Stack>
    </Grid>
    <Grid item xs={12}>
      <AuthLogin />
    </Grid>
  </Grid>
);

export default Signup;
