// components/Loading.tsx
import { Box, CircularProgress, Typography } from "@mui/material";

type LoadingProps = {
  message?: string;
};

const Loading = ({ message = "Loading..." }: LoadingProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <CircularProgress />
      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Loading;
