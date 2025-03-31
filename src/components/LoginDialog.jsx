import React from "react";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  Stack,
  TextField,
  Box,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { AccountCircle, Key, Close } from "@mui/icons-material";
import { logo } from "../utils/constants";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { fetchLogin } from "../utils/fetchFromAPI";

const LoginDialog = (props) => {
  const { onClose, open } = props;
  const [userName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [wrongAccount, setWrongAccount] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onUserNameLostFocus = (str) => {
    if (!str || str.trim().length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const onhandleSubmit = async () => {
    if (userName && password) {
      var response = await fetchLogin({
        username: userName,
        password: password,
      });
      if (response) {
        console.log(response);
        if (response.status === 400) {
          setWrongAccount("Sai tài khoản hoặc mật khẩu!");
          setOpenDialog(true);
        } else {
          setWrongAccount("");
          handleClose();
        }
      }
    } else if (!password) {
      setWrongAccount("Vui lòng nhập mật khẩu!");
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: {
          width: "300px", // Custom width
          height: "500px", // Custom height
          borderRadius: "30px",
          padding: "10px 20px",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>
        Đăng nhập
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{ position: "absolute", right: 8, top: 8, marginRight: 0.2 }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <Stack
        direction="row"
        sx={{
          flexDirection: { md: "column" },
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          width: { sx: "auto", md: "95%" },
          alignItems: "center",
          marginLeft: "5px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          height="70"
          width={"70"}
          sx={{ height: "50px", width: "50px" }}
        />
        <Box className="account-input-box" sx={{ marginTop: "10px" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            error={error}
            id="input-with-sx"
            label="Tài khoản hoặc Số điện thoại"
            variant="standard"
            sx={{ width: "230px" }}
            onChange={(event) => setUseName(event.target.value)}
            onBlur={(event) => onUserNameLostFocus(event.target.value)}
          />
        </Box>
        <Box className="account-input-box">
          <Key sx={{ color: "action.active", my: 1 }} />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Mật khẩu
            </InputLabel>
            <Input
              id="standard-adornment-password"
              sx={{ width: "220px" }}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
        </Box>
        <button className="login-btn dialog-login-btn" onClick={onhandleSubmit}>
          Đăng nhập
        </button>
        <div className="line-with-text">
          <h5>Hoặc đăng nhập bằng</h5>
        </div>
      </Stack>
      {/* Dialog Component */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        sx={{ borderRadius: "100px" }}
      >
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          <p>{wrongAccount}</p>{" "}
        </DialogContent>
        <DialogActions>
          <button onClick={handleCloseDialog} color="primary">
            Close
          </button>
        </DialogActions>
      </Dialog>
    </Dialog>
  );
};

export default LoginDialog;
