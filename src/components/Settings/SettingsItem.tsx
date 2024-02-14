import { ChevronRight, Lock, LockOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  onClick: () => void;
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export default function SettingsItem({
  onClick,
  icon,
  title,
  subtitle,
}: Props) {
  return (
    <Box className="flex flex-col gap-2" onClick={() => onClick()}>
      <Box className="flex items-center gap-5 p-4 hover:cursor-pointer hover:bg-slate-100 rounded-[20px] bg-slate-50 md:bg-transparent ">
        <IconButton
          size={"medium"}
          className="bg-white border border-solid border-slate-200 rounded-xl text-slate-600 css-1ua49gz"
        >
          {icon}
        </IconButton>

        <Box className="flex-1">
          <Typography className="text-slate-800 font-bold" variant="body1">
            {title}
          </Typography>
          <Typography className="text-slate-500 mt-1.5" variant="body2">
            {subtitle}
          </Typography>
        </Box>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
}
