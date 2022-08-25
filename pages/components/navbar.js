import React from 'react';
import Link from 'next/link';
export default function navbar() {
  return (
    <div class="container mx-auto px-4 sticky top-0 bg-nav">
      <nav class="flex h-24 items-center">
        <Link href="/">
          <a class=" flex flex-auto ">
            <p class="flex justify-center align-center rounded-md text-white bg-green-900 p-2 mr-2.5 brand">
              Buýt
            </p>
            <span class="flex items-center">TP.HCM</span>
          </a>
        </Link>
        <div class="flex flex-auto justify-around navigation">
          <Link href="#">
            <a class="active">Trang chủ</a>
          </Link>
          <Link href="#">
            <a>Tin tức</a>
          </Link>
          <Link href="#">
            <a>Giới thiệu</a>
          </Link>
          <Link href="#">
            <a>Thông tin tuyến</a>
          </Link>
          <Link href="#">
            <a>Tra cứu thông tin</a>
          </Link>
          <Link href="#">
            <a>Phản ánh</a>
          </Link>
        </div>
        <div class="flex flex-auto justify-end">
          <button class="border round-md border-teal-500 mode-btn">
            dark mode
          </button>
        </div>
      </nav>
    </div>
  );
}
