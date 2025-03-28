import React from "react";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Stack, TextField, Box } from "@mui/material";
import { AccountCircle, FlashAuto, Key } from "@mui/icons-material";
import { logo } from "../utils/constants";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginDialog = (props) => {
  const { onClose, open } = props;
  const [userName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

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
  const onhandleSubmit = () => {
    if (userName) {
    }
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: {
          width: "400px", // Custom width
          height: "500px", // Custom height
        },
      }}
    >
      <DialogTitle>ĐĂNG NHẬP</DialogTitle>
      <Stack
        direction="row"
        sx={{
          flexDirection: { md: "column" },
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          width: { sx: "auto", md: "95%" },
        }}
      >
        <img src={logo} alt="logo" height="50" />
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            error={error}
            id="input-with-sx"
            label="Tài khoản hoặc Số điện thoại"
            variant="standard"
            onChange={(event) => setUseName(event.target.value)}
            onBlur={(event) => onUserNameLostFocus(event.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Key sx={{ color: "action.active", my: 1 }} />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Mật khẩu
            </InputLabel>
            <Input
              id="standard-adornment-password"
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
        <button className="login-btn" onClick={onhandleSubmit}>
          Đăng nhập
        </button>
      </Stack>
    </Dialog>
  );
};

export default LoginDialog;
