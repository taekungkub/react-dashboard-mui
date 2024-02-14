import { Box, Button } from "@mui/material";
import PageHeader from "../PageHeader";
import DialogFamily from "./DialogFamily";
import TableFamily from "./TableFamily";
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
          <PageHeader>ครอบครัว</PageHeader>
          <Button variant={"gradient"} onClick={() => open()}>
            + เพิ่มสมาชิกครอบครัว
          </Button>{" "}
        </Box>

        <TableFamily
          edit={() => {
            setType("EDIT");
            open();
          }}
        />
      </Box>

      <DialogFamily type={type} opened={opened} close={close} />
    </>
  );
}
