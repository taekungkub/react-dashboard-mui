import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { customTheme } from "../../utils/theme";

import TranscriptUploader from "./TranscriptUploader";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: customTheme.tableHeader,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: customTheme.tableBodyFontSize,
  },
}));

export default function TableDocument() {
  return (
    <TableContainer component={Paper} variant={"outlined"}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ลำดับ</StyledTableCell>
            <StyledTableCell align="center">เอกสาร</StyledTableCell>
            <StyledTableCell align="center">ประเภทเอกสาร</StyledTableCell>
            <StyledTableCell align="center">จัดการ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TranscriptUploader
            rank="1"
            title="สำเนาวุฒิการศึกษา"
            type="ทรานสคริป"
          />
          <TranscriptUploader
            rank="2"
            title="เอกสารอบรม"
            type="แฟ้มสะสมผลงาน"
          />
          <TranscriptUploader
            rank="3"
            title="สำเนาบัตรประชาชน"
            type="หนังสือเดินทาง"
          />
          <TranscriptUploader
            rank="4"
            title="สำเนาทะเบียนบ้าน"
            type="ทะเบียนบ้าน"
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
