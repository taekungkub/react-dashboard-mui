import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, MenuItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import { IDisclosure, IFormType } from "../../types/common";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface Props extends IDisclosure {
  type: IFormType;
}

export default function DialogFamily({ type, open, close, opened }: Props) {
  const handleClose = () => close();

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={opened}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          เพิ่มสมาชิกครอบครัว
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField label="ชื่อ" />
            <TextField label="นามสกุล" />
            <TextField className="mb-2" select label="ความสัมพันธ์">
              <MenuItem key="1" value="1">
                นาย
              </MenuItem>
            </TextField>{" "}
            <DatePicker label="DD/MM/YYYY" />
            <TextField className="mb-2" select label="อาชีพ">
              <MenuItem key="1" value="1">
                อื่นๆ
              </MenuItem>
            </TextField>
            <TextField
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    display: "none",
                  },
                "& input[type=number]": {
                  MozAppearance: "textfield",
                },
              }}
              type="number"
              label="หมายเลขโทรศัพท์"
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions className="flex justify-between">
          {type === "EDIT" ? (
            <Button
              color={"error"}
              variant={"text"}
              startIcon={<Delete />}
              onClick={handleClose}
            >
              ลบ
            </Button>
          ) : (
            <Box></Box>
          )}

          <div className="flex gap-2">
            <Button variant={"outlined"} onClick={handleClose}>
              ยกเลิก
            </Button>
            <Button variant={"contained"} onClick={handleClose}>
              สร้าง
            </Button>
          </div>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
