import { DatePicker } from "@mui/x-date-pickers";
import {
  InfoHeader,
  InfoHeaderLarge,
  InfoTitle,
  InfoTitleLarge,
} from "./HeaderInfo";
import PageHeader from "./PageHeader";
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

export default function FormEmployment() {
  return (
    <div className="max-w-4xl block mx-auto">
      <PageHeader>ข้อมูลการจ้างงาน</PageHeader>
      <br />
      <Divider />
      <br />
      <InfoHeaderLarge>ข้อมูลองค์กร</InfoHeaderLarge>

      <div className="grid sm:grid-cols-2 mt-4 gap-4">
        <TextField label="รหัสพนักงาน" />
        <TextField label="แผนก" />
        <TextField label="ระดับ" />
        <TextField label="ตำแหน่ง" />
      </div>
      <br />
      <InfoHeaderLarge>การจ้างงาน</InfoHeaderLarge>
      <div className="grid sm:grid-cols-2 mt-4 gap-4">
        <DatePicker label="วันที่เริ่มทำงาน" />
        <DatePicker label="วันที่หมดสัญญา" />
        <TextField label="กะการทำงาน" />
        <TextField label="ปฏิทินวันหยุดประจำปี" />
        <TextField label="ประเภทการจ้าง" />
        <TextField label="สถานะการจ้าง" />
      </div>
      <br />
      <InfoHeaderLarge>สถานที่ทำงาน</InfoHeaderLarge>

      <div className=" mt-4 ">
        <TextField label="สถานที่ทำงาน" className="w-full" />
      </div>

      <div className="mt-4">
        <FormControl>
          <InfoTitle>บันทึกเวลา</InfoTitle>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="check"
          >
            <FormControlLabel
              defaultChecked
              value="check"
              control={<Radio />}
              label="บันทึก"
            />
            <FormControlLabel
              value="nocheck"
              control={<Radio />}
              label="ไม่บันทึก"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
