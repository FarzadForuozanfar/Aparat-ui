import { Grid } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import notfoundGif from "../../assets/images/404.gif";
import Logo from "../../assets/images/logo.png";
const NotFoundPage = () => {
  return (
    <Grid
      marginTop={1}
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Helmet>
        <title>خطا 404 - صفحه پیدا نشد | آپارات</title>
      </Helmet>
      <Grid
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
      >
        <img width={"190px"} src={notfoundGif} alt="aparat" />
      </Grid>
      <Grid item style={{ fontSize: "larger", marginTop: "19px" }}>
        <span style={{ color: "#df0f50" }}>خطای 404 - </span>
        <span> متاسفانه ویدیو پیدا نشد</span>
      </Grid>
      <Grid
        xs={12}
        item
        style={{ textAlign: "center", fontSize: "larger", marginTop: "19px" }}
      >
        <Grid
          display={"flex"}
          justifyContent="center"
          alignItems="center"
          item
          marginTop={9}
          xs={12}
        >
          <img
            src={Logo}
            alt="aparat"
            style={{ width: "60px", display: "block" }}
          />
        </Grid>
        <span style={{ fontSize: '13px' }}> Error 404 - Page Not Found </span>
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
