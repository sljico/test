import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

const primary = purple[500]; // #f44336

export default function Custom404() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" href="/">
        Back Home
      </Button>
    </Box>
  );
}
