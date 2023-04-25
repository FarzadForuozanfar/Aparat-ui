import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  InputBase,
  Box,
} from "@mui/material";
import { Helmet } from "react-helmet";
import Logo from "../../components/Logo";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaUserAlt, FaKey } from "react-icons/fa";
import { useState } from "react";
import auth_service from "../../services/auth-service";
import Alert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import langData from '../../lang/Login/lang-fa.json';

const Login = () => {
  const [username, setUsername] = useState("user0@aparat.me");
  const [password, setPassword] = useState("123456");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
        <title>{ langData.title }</title>
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
            <span style={{ marginRight: 2 }}>{ langData.return }</span>
          </Button>
        </Grid>
        <Grid item xs={12} marginTop={2}>
          <Card>
            {errorMessage && (
              <Alert
                type="error"
                message = {errorMessage}
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
                <span> {langData.haventAccount} </span>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                {langData.createAccount}
                </Button>
              </Grid>
            </Grid>
            <CardContent sx={{ borderTop: "2px solid #eee" }}>
              <p> {langData.signInWithAccount} </p>
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
                        placeholder={langData.enterUsername}
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
                        placeholder={langData.EnterPass}
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
                      if (response.error) {setErrorMessage(langData.loginError)}
                      else if (response.result) {
                        setErrorMessage(null)
                        navigate('/dashboard');
                      }
                    }}
                    variant="contained"
                    size="small"
                    fullWidth
                  >
                    {langData.login}
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
