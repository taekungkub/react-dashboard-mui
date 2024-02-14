import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageHeader({ children }: Props) {
  return (
    <Typography variant={"h6"} className="text-xl sm:text-2xl">
      {children}
    </Typography>
  );
}
