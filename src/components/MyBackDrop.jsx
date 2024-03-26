import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Menu, X } from "lucide-react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Menu className="text-black font-bold" />
      </Button>
      <Backdrop
        sx={{ color: "#0000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Typography
          className="flex flex-col items-center justify-center"
          id="modal-modal-description"
          sx={{ mt: 2 }}
        >
          <ul className="flex flex-col gap-5 text-xl bg-black  p-5  text-white list-none">
            <li>
              <Link
                onClick={handleClose}
                className="hover:text-orange-500 font-bold text-white hover:border-b-2 hover:border-white"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-orange-500  text-white hover:border-b-2 font-bold hover:border-white"
                onClick={handleClose}
                to="/about-us"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-orange-500  text-white font-bold hover:border-b-2 hover:border-white"
                onClick={handleClose}
                to="/locations"
              >
                Locations
              </Link>
            </li>

            <li className="p-1  text-orange-500 list-none  hover:border-b-2 hover:border-black ">
              <button>
                <a href="" className="flex flex-row items-center ">
                  {" "}
                  <FaShoppingBasket />{" "}
                  <span className="text-sm px-1">Shop</span>
                </a>
              </button>
            </li>
          </ul>
        </Typography>
      </Backdrop>
    </div>
  );
}
