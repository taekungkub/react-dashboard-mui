import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function InfoHeader({ children }: Props) {
  return (
    <Typography className="font-bold" variant="body2">
      {children}
    </Typography>
  );
}

export function InfoHeaderLarge({ children }: Props) {
  return (
    <Typography className="font-bold" variant="body1">
      {children}
    </Typography>
  );
}

export function InfoTitle({ children }: Props) {
  return (
    <Typography variant="body2" className="text-slate-400">
      {children}
    </Typography>
  );
}

export function InfoTitleLarge({ children }: Props) {
  return (
    <Typography variant="body1" className="text-slate-400">
      {children}
    </Typography>
  );
}

export function InfoText({ children }: Props) {
  return (
    <Typography variant="body2" className="text-slate-600">
      {children}
    </Typography>
  );
}
