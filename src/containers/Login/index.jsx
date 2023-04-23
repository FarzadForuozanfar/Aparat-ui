import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  InputBase,
  Alert,
  Box,
} from "@mui/material";
import { Helmet } from "react-helmet";
import Logo from "../../components/Logo";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaUserAlt, FaKey } from "react-icons/fa";
import { useState } from "react";
import auth_service from "../../services/auth-service";

const Login = () => {
  const [username, setUsername] = useState("user0@aparat.me");
  const [password, setPassword] = useState("123456");
  const [errorMessage, setErrorMessage] = useState("");

  const authService = auth_service();
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Helmet>
        <title>صفحه ورود آپارات</title>
      </Helmet>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Button
            spacing={1}
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<HiOutlineArrowNarrowRight style={{ marginLeft: 5 }} />}
          >
            <span style={{ marginRight: 2 }}>بازگشت</span>
          </Button>
        </Grid>
        <Grid item xs={12} marginTop={2}>
          <Card>
            {errorMessage && (
              <Alert
                severity="error"
                onClose={() => {
                  setErrorMessage(null);
                }}
              >
                {errorMessage}
              </Alert>
            )}
            <Grid
              paddingX={"16px"}
              paddingY={"20px"}
              container
              alignItems={"center"}
            >
              <Grid item xs={12} sm={8} marginBottom={2}>
                <span>حساب کاربری ندارید ؟</span>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  ایجاد حساب کاربری
                </Button>
              </Grid>
            </Grid>
            <CardContent sx={{ borderTop: "2px solid #eee" }}>
              <p>اگر در آپارات حساب کاربری دارید وارد شوید :</p>
              <Grid spacing={2} container alignItems={"center"}>
                <Grid item xs={12} sm={9}>
                  <Box>
                    <Paper
                      component="form"
                      sx={{
                        display: "flex",
                        minWidth: "100%",
                        alignItems: "center",
                      }}
                    >
                      <FaUserAlt
                        style={{ color: "#aaa", marginInline: "7px" }}
                      />
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        defaultValue={username}
                        placeholder="ایمیل یا موبایل را وارد کنید"
                        onChange={(e) => {
                          setUsername(e.target.value.trim());
                        }}
                      />
                    </Paper>

                    <Paper
                      component="form"
                      sx={{
                        display: "flex",
                        minWidth: "100%",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <FaKey style={{ color: "#aaa", marginInline: "7px" }} />
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        defaultValue={password}
                        placeholder="گذرواژه خود را وارد کنید"
                        onChange={(e) => {
                          setPassword(e.target.value.trim());
                        }}
                      />
                    </Paper>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Button
                    onClick={async () => {
                      const response = await authService.Login(
                        username,
                        password,
                        "/login"
                      );
                      console.log(response);
                      if (response.error) {setErrorMessage("ورود نامعتبر")}
                      else if (response.result) {setErrorMessage(null)}
                    }}
                    variant="contained"
                    size="small"
                    fullWidth
                  >
                    ورود
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
