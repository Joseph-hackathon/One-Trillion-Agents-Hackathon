import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    yl: true;
    zl: true;
  }
}
