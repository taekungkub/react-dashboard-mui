import React from "react";
import PageHeader from "./PageHeader";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";

export default function FormContract() {
  return (
    <div className="max-w-4xl block mx-auto">
      <PageHeader>ข้อมูลการติดต่อ</PageHeader>
      <div className="grid sm:grid-cols-2 mt-4 gap-4">
        <TextField label="อีเมล" />
        <TextField label="หมายเลขโทรศัพท์" />
        <TextField label="ไอดีไลน์" />
        <TextField label="ชื่อไลน์" />
      </div>
      <br />
      <PageHeader>ที่อยู่ตามบัตรประชาชน</PageHeader>
      <div className="grid sm:grid-cols-2 mt-4 gap-4">
        <TextField label="ที่อยู่" />
        <TextField label="จังหวัด" />
        <TextField label="ตำบล" />
        <TextField label="รหัสไปรษณีย์" />
      </div>
      <br />
      <PageHeader>ที่อยู่ปัจจุบัน</PageHeader>

      <div className="grid sm:grid-cols-2 mt-4 gap-4">
        <div className="col-span-2">
          <FormControlLabel
            control={<Checkbox />}
            label="เหมือนกับที่อยู่ตามบัตรประชาชน"
          />
        </div>
        <TextField label="ที่อยู่" />
        <TextField label="จังหวัด" />
        <TextField label="ตำบล" />
        <TextField label="รหัสไปรษณีย์" />
      </div>
      <br />
      <PageHeader>ข้อมูลติดต่อกรณีฉุกเฉิน</PageHeader>

      <div className="grid sm:grid-cols-2 mt-4 gap-4">
        <TextField label="ชื่อ" />
        <TextField label="นามสกุล" />
        <TextField label="ความสัมพันธ์" />
        <TextField label="หมายเลขโทรศัพท์" />
      </div>
    </div>
  );
}
