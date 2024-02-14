import {
  LockOutlined,
  PersonRemoveAlt1Outlined,
  Pin,
} from "@mui/icons-material";
import SettingsItem from "./SettingsItem";

export default function Settings() {
  return (
    <div>
      <SettingsItem
        icon={<LockOutlined />}
        title="เปลี่ยนรหัสผ่าน"
        subtitle="เพื่อความปลอดภัยของบัญชี แนะนำให้เปลี่ยนรหัสผ่านทุก ๆ 3-6 เดือน
        และตั้งรหัสผ่านที่รัดกุม
        เพื่อลดความเสี่ยงของการเข้าถึงโดยไม่ได้รับอนุญาต"
        onClick={() => console.log("1")}
      />
      <SettingsItem
        icon={<Pin />}
        title="รหัส PIN"
        subtitle="กำหนดรหัส PIN ในการเข้าดูข้อมูลเงินเดือนและเอกสารส่วนตัวของพนักงาน"
        onClick={() => console.log("2")}
      />
      <SettingsItem
        icon={<PersonRemoveAlt1Outlined />}
        title="ส่งคำขอลบบัญชี"
        subtitle="การลบบัญชีผู้ใช้และข้อมูลส่วนบุคคลของคุณ จะถูกลบหลังจาก 30 วัน"
        onClick={() => console.log("3")}
      />
    </div>
  );
}
