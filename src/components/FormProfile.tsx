import {
  Instagram,
  MailOutline,
  ModeEdit,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Chip,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { DatePicker } from "@mui/x-date-pickers";
import {
  InfoHeader,
  InfoHeaderLarge,
  InfoText,
  InfoTitle,
  InfoTitleLarge,
} from "./HeaderInfo";

export default function Profile() {
  return (
    <div>
      <Box className="flex flex-col md:flex-row gap-12 mb-10">
        <Paper
          elevation={0}
          variant={"outlined"}
          className="p-8 w-full md:max-w-[412px] border border-slate-200 rounded-2xl"
        >
          <div className="bg-slate-100 rounded-xl p-2 flex flex-col relative mt-[35px]">
            <div className="flex justify-center mt-[-35px]">
              <Avatar
                className="border-4 border-white"
                sx={{ bgcolor: red[500], width: 120, height: 120 }}
                src="https://go.hrzoft.com/api/images/1707712790662/employee/1707713020018-5d28a264b112b947.jpeg"
              ></Avatar>
            </div>

            <div className="flex justify-center mt-4">
              <Chip label="เจนนี่" className="bg-white" />
            </div>

            <Typography
              className="font-bold my-2"
              textAlign={"center"}
              variant="body1"
            >
              ปพิชญา คมวีระวงศ์
            </Typography>
            <Typography
              className="text-slate-500"
              textAlign={"center"}
              variant="body2"
            >
              กรรมการผู้จัดการ
            </Typography>
          </div>

          <div className="flex justify-center my-4">
            <Button variant="outlined" startIcon={<ModeEdit />}>
              แก้ไขโปรไฟล์
            </Button>
          </div>
          <Box className="flex flex-col gap-4">
            <InfoHeader>ข้อมูลติดต่อ</InfoHeader>
            <Box className="flex items-center gap-2">
              <MailOutline className="text-slate-400" />
              <Typography variant="body2" className="text-slate-600">
                titi.tana@gmail.com
              </Typography>
            </Box>
            <Box className="flex items-center gap-2">
              <PhoneOutlined className="text-slate-400" />
              <Typography variant="body2" className="text-slate-600">
                xxxxxxxxxx
              </Typography>
            </Box>
            <Box className="flex items-center gap-2">
              <Instagram className="text-slate-400" />
              <Typography variant="body2" className="text-slate-600">
                -
              </Typography>
            </Box>
            <InfoHeader>ข้อมูลพนักงาน</InfoHeader>
            <Box className="flex items-center gap-2 justify-between">
              <InfoTitle>บริษัท</InfoTitle>
              <InfoText>-</InfoText>
            </Box>
            <Box className="flex items-center gap-2 justify-between">
              <InfoTitle> วันที่เริ่มงาน</InfoTitle>
              <InfoText>-</InfoText>
            </Box>
            <Box className="flex items-center gap-2 justify-between">
              <InfoTitle> สถานะพนักงาน</InfoTitle>
              <InfoText>-</InfoText>
            </Box>
            <Box className="flex items-center gap-2 justify-between">
              <InfoTitle> ประเภทพนักงาน</InfoTitle>
              <InfoText>-</InfoText>
            </Box>

            <Box className="flex items-center gap-2 justify-between">
              <InfoTitle> ผู้บังคับบัญชา</InfoTitle>
              <InfoText>-</InfoText>
            </Box>
            <Box className="flex items-center gap-2 justify-between">
              <InfoTitle> กะการทำงาน</InfoTitle>
              <InfoText>-</InfoText>
            </Box>
            <Box className="flex items-center gap-2 justify-between">
              <InfoTitle> เลขบัตรประชาชน</InfoTitle>
              <InfoText>-</InfoText>
            </Box>
            <Box className="flex items-center gap-2 justify-between">
              <InfoTitle> วันเกิด</InfoTitle>
              <InfoText>-</InfoText>
            </Box>
            <Box className="flex items-center gap-2 justify-between">
              <InfoTitle> วันเริ่มต้นใช้งาน</InfoTitle>
              <InfoText>-</InfoText>
            </Box>
          </Box>
        </Paper>

        <Box className="p-3 w-fullmd:max-w-[600px] ">
          <InfoHeaderLarge>ข้อมูลทั่วไป</InfoHeaderLarge>
          <Box className="mt-4">
            <TextField
              className="mb-2"
              select
              label="คำนำหน้า"
              defaultValue="1"
            >
              <MenuItem key="1" value="1">
                นาย
              </MenuItem>
            </TextField>
            <div className="grid grid-cols-2 mt-4 gap-4 md:gap-y-4 md:gap-x-9 ">
              <TextField label="ชื่อ" variant="outlined" />
              <TextField label="นามสกุล" variant="outlined" />
              <TextField label="ชื่อ (EN)" variant="outlined" />
              <TextField label="นามสกุล (EN)" variant="outlined" />
              <TextField label="ชื่อเล่น" variant="outlined" />
              <TextField label="ชื่อเล่น (EN)" variant="outlined" />
              <DatePicker label="DD/MM/YYYY" />
              <TextField
                sx={{
                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                    {
                      display: "none",
                    },
                  "& input[type=number]": {
                    MozAppearance: "textfield",
                  },
                }}
                type="number"
                label="เลขบัตรประชาชน"
                variant="outlined"
              />
              <Box>
                <InfoTitleLarge>เพศ</InfoTitleLarge>
                <ButtonGroup variant={"outlined"} color={"secondary"}>
                  <Button
                    className="active"
                    sx={{
                      "&.active": {
                        background: "#f0f9ff",
                      },
                    }}
                  >
                    ชาย
                  </Button>
                  <Button>หญิง</Button>
                  <Button> อื่นๆ</Button>
                </ButtonGroup>
              </Box>
              <Box>
                <InfoTitleLarge>เพศ</InfoTitleLarge>
                <ButtonGroup variant={"outlined"} color={"secondary"}>
                  <Button
                    className="active"
                    sx={{
                      "&.active": {
                        background: "#f0f9ff",
                      },
                    }}
                  >
                    ประเภท
                  </Button>
                  <Button className="whitespace-nowrap"> ต่างชาติ</Button>
                </ButtonGroup>
              </Box>
            </div>
            <br />
            <InfoHeaderLarge>ข้อมูลส่วนตัว</InfoHeaderLarge>

            <div className="grid grid-cols-2 mt-4 gap-4 md:gap-y-4 md:gap-x-9 ">
              <TextField label="เชื้อชาติ" />
              <TextField label="สัญชาติ" />
              <TextField label="ศาสนา" />
              <TextField label="กรุ๊ปเลือด" />

              <TextField label="สถานะการเกณฑ์ทหาร" />
              <TextField label="สถานภาพสมรส" />
              <TextField label="น้ำหนัก" type="number" />
              <TextField label="ความสูง" type="number" />
              <TextField
                className="col-span-2"
                label="หมายเหตุ"
                multiline
                rows={6}
                maxRows={6}
              />
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
