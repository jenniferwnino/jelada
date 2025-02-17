import { Box, Typography } from "@mui/material";

export function PageTitle(props: { title: string; subtitle?: string }) {
  return (
    <Box textAlign={"center"} marginBottom={5}>
      <Typography variant="h2">{props.title}</Typography>
      <Typography variant="h5">{props.subtitle}</Typography>
    </Box>
  );
}
