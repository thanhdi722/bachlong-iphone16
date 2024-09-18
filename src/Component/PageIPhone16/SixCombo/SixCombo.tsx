import React from "react";
import combo1 from "../../../assets/images/6 BO QUA PK.png";
import Image from "next/image";
import style from "@/style/SixCombo.module.css";
import "../../../style/SixCombo.scss";
export default function SixCombo() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Image src={combo1} alt="combo1" className={style.comboImage} />
      <div className="BoxCombo">
        <h2 className="BoxCombo-title">Thể Lệ Chương Trình</h2>
        <div className="BoxCombo-content">
          <p>1. Khách hàng đến cửa hàng Bạch Long Mobile để mua điện thoại</p>
          <p>2. Khách hàng đến cửa hàng Bạch Long Mobile để mua điện thoại</p>
          <p>3. Khách hàng đến cửa hàng Bạch Long Mobile để mua điện thoại</p>
          <p>4. Khách hàng đến cửa hàng Bạch Long Mobile để mua điện thoại</p>
          <p>5. Khách hàng đến cửa hàng Bạch Long Mobile để mua điện thoại</p>
          <p>6. Khách hàng đến cửa hàng Bạch Long Mobile để mua điện thoại</p>
        </div>
      </div>
    </div>
  );
}
