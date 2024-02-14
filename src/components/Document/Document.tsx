import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../PageHeader";
import TableDocument from "./TableDocument";

type Props = {};

export default function Document({}: Props) {
  return (
    <div>
      <Box className="max-w-4xl block mx-auto">
        <PageHeader>ข้อมูลเอกสาร</PageHeader>
        <br />
        <Divider />
        <br />
        <TableDocument />
      </Box>
    </div>
  );
}
