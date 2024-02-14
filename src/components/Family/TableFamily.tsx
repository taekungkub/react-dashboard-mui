import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { customTheme } from "../../utils/theme";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: customTheme.tableHeader,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: customTheme.tableBodyFontSize,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  relation: string,
  name: string,
  age: string,
  role: string,
  tel: string
) {
  return { relation, name, age, role, tel };
}

const rows = [
  createData("บิดา", "test test", "42", "พนักงานบริษัทเอกชน", "0948589665"),
];

interface Props {
  edit: () => void;
}

export default function TableFamily({ edit }: Props) {
  return (
    <TableContainer
      component={Paper}
      variant={"outlined"}
      className="min-h-[300px]"
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ความสัมพันธ์</StyledTableCell>
            <StyledTableCell align="center">ชื่อ - นามสกุล</StyledTableCell>
            <StyledTableCell align="center">อายุ</StyledTableCell>
            <StyledTableCell align="center">อาชีพ</StyledTableCell>
            <StyledTableCell align="center">หมายเลขโทรศัพท์</StyledTableCell>
            <StyledTableCell align="center">จัดการ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.relation}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.age}</StyledTableCell>
              <StyledTableCell align="center">{row.role}</StyledTableCell>
              <StyledTableCell align="center">{row.tel}</StyledTableCell>

              <StyledTableCell align="center">
                <IconButton
                  aria-label="delete"
                  size={"small"}
                  onClick={() => edit()}
                >
                  <Edit />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
