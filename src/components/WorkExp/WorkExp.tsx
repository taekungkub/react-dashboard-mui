import { Box, Button } from "@mui/material";
import PageHeader from "../PageHeader";
import DialogWorkExp from "./DialogWorkExp";
import useDisclosure from "../../hooks/useDisclosure";
import { useState } from "react";
import { IFormType } from "../../types/common";

export default function Family() {
  const [opened, { open, toggle, close }] = useDisclosure(false);
  const [type, setType] = useState<IFormType>("ADD");

  return (
    <>
      <Box className="max-w-4xl block mx-auto">
        <Box className="flex items-center justify-between mb-8">
          <PageHeader>ข้อมูลประสบการณ์การทำงาน</PageHeader>
          <Button variant={"gradient"} onClick={() => open()}>
            + เพิ่มประสบการณ์การทำงาน
          </Button>
        </Box>
      </Box>

      <DialogWorkExp type={type} opened={opened} close={close} />
    </>
  );
}
