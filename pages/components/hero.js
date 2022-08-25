import React from 'react';
import Image from 'next/image';
import heroImg from '../../public/images/hero-img.png';
export default function hero() {
  return (
    <div class="container hero">
      <div class="grid grid-cols-2 gap-4 h-100">
        <div class="left text-center">
          <h1 class="font-bold heading">
            SỞ GIAO THÔNG VẬN TẢI THÀNH PHỐ HỒ CHÍ MINH
          </h1>
          <p class="sub-heading">
            Trung tâm quản lý giao thông công cộng Thành phố Hồ Chí Minh
          </p>
          <div class="relative">
            <input
              placeholder="Tìm kiếm..."
              class="rounded-lg py-2 pl-2.5 mt-8 search-input"
            ></input>
          </div>
        </div>
        <div class="right">
          <Image src={heroImg} width={468} height={366}></Image>
        </div>
      </div>
    </div>
  );
}
