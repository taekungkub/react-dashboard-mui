import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  InputAdornment,
  TextField,
} from "@mui/material";
import PageHeader from "../PageHeader";
import useDisclosure from "../../hooks/useDisclosure";
import { useState } from "react";
import { IFormType } from "../../types/common";
import { InfoTitleLarge } from "../HeaderInfo";
import { DatePicker } from "@mui/x-date-pickers";

export default function Salary() {
  return (
    <>
      <Box className="max-w-4xl block mx-auto">
        <PageHeader>รายละเอียดเงินเดือน</PageHeader>
        <br />
        <Divider />

        <br />
        <Box>
          <InfoTitleLarge>ประเภทการรับเงินเดือน</InfoTitleLarge>
          <ButtonGroup
            variant={"outlined"}
            color={"secondary"}
            className="mt-2"
          >
            <Button
              className="active"
              sx={{
                "&.active": {
                  background: "#f0f9ff",
                },
              }}
            >
              ธนาคาร
            </Button>
            <Button>เงินสด</Button>
          </ButtonGroup>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <TextField label="ประเภทการจ่ายเงิน" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <TextField label="บัญชีธนาคาร" />
            <TextField label="เลขที่บัญชี" />
            <TextField
              label="จำนวนเงินเดือน"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">฿</InputAdornment>
                ),
              }}
            />
            <DatePicker label="วันที่มีผล" />
            <div className="col-span-2">
              <TextField
                className="w-full"
                label="เหตุผลการปรับ"
                multiline
                rows={2}
                maxRows={4}
              />
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
