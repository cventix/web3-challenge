import React, { useState, useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { padding } from "@mui/system";
import { ContextType, UserContext } from "..";

export const Header = () => {
  const [selectedBtn, setSelectedBtn] = useState("earn");
  // const [isLogin, setIsLogin] = useState(false);
  const { isLogin, setIsLogin, setOpen } = useContext(
    UserContext
  ) as ContextType;

  const activeBtnStyle = {
    borderRadius: "10px",
    fontWeight: 400,
    color: "#fff !important",
    border: "1px solid transparent",
    borderImage: "linear-gradient(180deg, #B3B6FF, rgba(179, 182, 255, 0.2)) 1",
    background:
      "linear-gradient(#000 0 0) padding-box,linear-gradient(180deg, #B3B6FF, rgba(179, 182, 255, 0.2)) border-box",
  };

  const regularBtnStyle = {
    color: "#9A989F",
    fontWight: 500,
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const handleClick = (e: any) => {
    setSelectedBtn(e.target.id);
  };
  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "20px 0" }}
    >
      <Grid item xs={2} onClick={() => setIsLogin(!isLogin)}>
        <img src="/icons/logo.svg" />
      </Grid>
      <Grid
        container
        item
        xs={isLogin ? 5 : 4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          id="earn"
          xs="auto"
          onClick={handleClick}
          sx={
            selectedBtn === "earn"
              ? { ...regularBtnStyle, ...activeBtnStyle }
              : { ...regularBtnStyle }
          }
        >
          Earn
        </Grid>
        <Grid
          item
          id="partners"
          xs="auto"
          onClick={handleClick}
          sx={
            selectedBtn === "partners"
              ? { ...regularBtnStyle, ...activeBtnStyle }
              : { ...regularBtnStyle }
          }
        >
          Partners
        </Grid>
        <Grid
          item
          id="Laderboard"
          xs="auto"
          onClick={handleClick}
          sx={
            selectedBtn === "Laderboard"
              ? { ...regularBtnStyle, ...activeBtnStyle }
              : { ...regularBtnStyle }
          }
        >
          Leaderboard
        </Grid>
        <Grid
          item
          id="createWallet"
          xs="auto"
          onClick={(e: any) => {
            handleClick(e);
            if (!isLogin) setOpen(true);
          }}
          sx={
            selectedBtn === "createWallet"
              ? { ...regularBtnStyle, ...activeBtnStyle }
              : { ...regularBtnStyle }
          }
        >
          {isLogin ? "Invite & Earn" : "Create Wallet"}
        </Grid>
        {isLogin && (
          <Grid item xs="auto" display="flex" alignItems="center">
            <img src="/icons/dolar.svg" />
            <Typography sx={{ marginLeft: 1 }} variant="subtitle2">
              USDC
            </Typography>
          </Grid>
        )}
        {isLogin && (
          <Grid item xs="auto">
            <img
              src="/icons/userProfile.svg"
              style={{ paddingRight: "10px" }}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
