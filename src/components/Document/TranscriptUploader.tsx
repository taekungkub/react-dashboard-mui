import styled from "@emotion/styled";
import TableRow from "@mui/material/TableRow";
import { Button, Divider, IconButton, Typography } from "@mui/material";
import { CloudUpload, Edit, ExpandLess, ExpandMore } from "@mui/icons-material";
import { customTheme } from "../../utils/theme";
import { useState } from "react";
import { InfoText, InfoTitle } from "../HeaderInfo";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { useDropzone } from "react-dropzone";
import { twMerge } from "tailwind-merge";
import FilePreview from "./FilePreview";

type Props = {
  rank: string;
  title: string;
  type: string;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
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

export default function TranscriptUploader({ rank, title, type }: Props) {
  const [showEducation, setShowEducation] = useState(false);

  const [fileGallery, setFileGallery] = useState<File[]>([]);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
        "application/pdf": [],
      },
      maxFiles: 5,
      onDrop: (acceptedFile) => {
        setFileGallery(acceptedFile);
      },
    });

  const removeFile = (file: File) => {
    const newFiles = [...fileGallery];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFileGallery(newFiles);
  };

  const files = fileGallery.map((file) => (
    <div key={file.name}>
      <FilePreview title={file.name} onDelete={() => removeFile(file)} />
    </div>
  ));

  return (
    <>
      <StyledTableRow
        hover
        onClick={() => setShowEducation((prevCheck) => !prevCheck)}
      >
        <StyledTableCell component="th" scope="row">
          {rank}
        </StyledTableCell>
        <StyledTableCell align="center">{title} </StyledTableCell>
        <StyledTableCell align="center">{type}</StyledTableCell>

        <StyledTableCell align="center">
          {showEducation === true ? (
            <IconButton size={"small"}>
              <ExpandMore />
            </IconButton>
          ) : (
            <IconButton size={"small"}>
              <ExpandLess />
            </IconButton>
          )}
        </StyledTableCell>
      </StyledTableRow>

      {showEducation ? (
        <TableRow>
          <TableCell colSpan={6} sx={{ border: 0 }}>
            <div className="flex gap-4">{files}</div>
            <br />

            <div className="flex flex-col gap-2" {...getRootProps()}>
              <input {...getInputProps()} />
              <div
                className={twMerge(
                  `bg-white border border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-4 text-zinc-500 border-zinc-300 w-full hover:bg-zinc-100 cursor-pointer ${
                    isDragActive ? "bg-zinc-100" : ""
                  }`
                )}
              >
                <CloudUpload
                  className="text-zinc-300"
                  sx={{ fontSize: "3.25rem" }}
                />
                <InfoText>ลากไฟล์วางที่นี้หรือเลือกไฟล์</InfoText>
              </div>
            </div>
            <div className="mt-2">
              <InfoTitle>
                ประเภทไฟล์ image/jpg, image/jpeg, image/png, application/pdf
              </InfoTitle>
            </div>
            <br />
            <Divider />
          </TableCell>
        </TableRow>
      ) : (
        ""
      )}
    </>
  );
}
