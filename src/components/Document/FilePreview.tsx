import { Close, Delete, InsertDriveFile } from "@mui/icons-material";
import { IconButton, Paper, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  onDelete: () => void;
};

export default function FilePreview({ title, onDelete }: Props) {
  return (
    <Paper
      elevation={0}
      variant={"outlined"}
      className="relative p-3 inline-block cursor-pointer border border-solid border-slate-200  hover:bg-slate-50 w-[100px]  h-[100px] rounded-xl"
    >
      <IconButton
        className="absolute top-0 right-0"
        size="small"
        onClick={() => onDelete()}
      >
        <Close sx={{ fontSize: "1.225rem" }} />
      </IconButton>

      <Typography align="center" className="mt-3">
        <InsertDriveFile />
      </Typography>
      <Typography align="center" className="truncate">
        {title}
      </Typography>
    </Paper>
  );
}
