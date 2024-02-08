import { Breakpoint, Theme, useTheme } from "@mui/material/styles";

import { useMediaQuery } from "@mui/material";
/**
 * taken from https://material-ui.com/components/use-media-query/#migrating-from-withwidth
 *
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */

export const useBreakpoint = () => {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.filter((key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      if (matches) return true;
      return false;
    }, null)[0] ?? "xs"
  );
};
