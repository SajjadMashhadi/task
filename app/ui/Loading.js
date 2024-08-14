import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

//loading spinner component for suspenses
export default function Loading() {
  return (
    <Stack
      style={{ display: "flex", justifyContent: "center" }}
      sx={{ color: "grey.500" }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="inherit" />
    </Stack>
  );
}
