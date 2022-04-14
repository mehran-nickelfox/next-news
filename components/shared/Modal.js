import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAtom } from "jotai";
import { openAtom } from "../../jotai/Atoms";
import { Divider } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "3px solid #B91C1C",
  boxShadow: 24,
  borderRadius: "10px",
  color:"#B91C1C",
  p: 4,
};

const BasicModal = () => {
  const [open, setOpen] = useAtom(openAtom);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <Button className="absolute right-5 top-0" onClick={handleClose}>
            <span className="text-2xl text-red-700"> &#10006;</span>
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Sign In
          </Typography>
          <Divider className="bg-red-700 my-5 w-full"/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            To acess this page you need to sign in
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
