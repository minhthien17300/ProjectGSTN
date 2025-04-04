import React from "react";
import { Stack } from "@mui/material";
import { categories, colors } from "../utils/constants";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import LoginDialog from "./LoginDialog";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const token = Cookies.get("accessToken");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    Cookies.remove("accessToken");
    navigate("/");
  };

  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        width: { sx: "auto", md: "15vh" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && colors.skyBlue,
            color:
              category.name === selectedCategory
                ? colors.white
                : colors.darkSilver,
          }}
          key={category.name}
        >
          <span
            style={{
              color:
                category.name === selectedCategory
                  ? colors.white
                  : colors.darkSilver,
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}

      {token && (
        <button
          className="category-btn log-btn logout-btn"
          onClick={handleLogout}
          style={{
            color: colors.darkSilver,
          }}
        >
          <span
            style={{
              color: colors.darkSilver,
              marginRight: "15px",
            }}
          >
            <LogoutIcon />
          </span>
          <span
            style={{
              opacity: "0.8",
            }}
          >
            Đăng xuất
          </span>
        </button>
      )}

      {!token && (
        <button
          className="category-btn log-btn login-btn"
          onClick={handleClickOpen}
          style={{
            color: colors.darkSilver,
          }}
        >
          <span
            style={{
              color: colors.darkSilver,
              marginRight: "15px",
            }}
          >
            <LoginIcon />
          </span>
          <span
            style={{
              opacity: "0.8",
            }}
          >
            Đăng nhập
          </span>
        </button>
      )}

      <LoginDialog open={open} onClose={handleClose} />
    </Stack>
  );
};

export default SideBar;
