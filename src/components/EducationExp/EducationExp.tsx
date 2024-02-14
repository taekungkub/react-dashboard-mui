import { Box, Button } from "@mui/material";
import PageHeader from "../PageHeader";
import DialogEducationExp from "./DialogEducationExp";
import useDisclosure from "../../hooks/useDisclosure";
import { useState } from "react";
import { IFormType } from "../../types/common";

export default function EducationExp() {
  const [opened, { open, toggle, close }] = useDisclosure(false);
  const [type, setType] = useState<IFormType>("ADD");

  return (
    <>
      <Box className="max-w-4xl block mx-auto">
        <Box className="flex items-center justify-between mb-8">
          <PageHeader>ข้อมูลการศึกษา</PageHeader>
          <Button
            variant={"gradient"}
            onClick={() => {
              setType("ADD");
              open();
            }}
          >
            + เพิ่มการศึกษา
          </Button>
        </Box>
      </Box>

      <DialogEducationExp type={type} opened={opened} close={close} />
    </>
  );
}
