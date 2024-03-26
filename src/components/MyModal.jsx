import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid transparent",
  boxShadow: 24,
  borderRadius: 20,
  p: 4,
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="animate-ping">
      <Button onClick={handleOpen}>
        <Menu className="text-black" />
      </Button>
      <Modal
        className="transition delay-75"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <Button>
              <X onClick={handleClose} />
            </Button>
          </Typography>
          <Typography
            className="flex flex-col items-center justify-center"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <ul className="flex flex-col gap-5 text-xl text-gray-500 list-none">
              <li>
                <Link
                  onClick={handleClose}
                  className="hover:text-orange-300 hover:border-b-2 hover:border-orange-400"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-orange-300 hover:border-b-2 hover:border-orange-400"
                  onClick={handleClose}
                  to="/about-us"
                >
                  About
                </Link>
              </li>
              <li>Locations</li>
              <li>Product</li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
