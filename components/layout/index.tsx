import React, { useEffect, useState, createContext, FC } from "react";
import { Grid } from "@mui/material";
import { Header } from "./header";

type Props = {
  children: any;
};

export type ContextType = {
  isLogin: boolean;
  setIsLogin: any;
  open: boolean;
  setOpen: any;
};

export const UserContext = createContext<ContextType | null>(null);
export const Layout: FC<Props> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin, open, setOpen }}>
      <Grid container display="flex" flexDirection="column" alignItems="center">
        <Grid
          container
          item
          sx={{ minWidth: "1320px", maxWidth: "1320px", width: "90%" }}
        >
          <Header />
        </Grid>
        <Grid
          container
          item
          sx={{ minWidth: "1320px", maxWidth: "1320px", width: "90%" }}
        >
          {children}
        </Grid>
      </Grid>
    </UserContext.Provider>
  );
};
