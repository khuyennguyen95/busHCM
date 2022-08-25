import React from 'react';
import Link from 'next/link';
export default function footer() {
  return (
    <footer class="container mx-auto py-5 bg-black text-white text-center">
      <nav class="flex justify-center gap-5">
        <Link href="">
          <a>Trang Chủ</a>
        </Link>
        <Link href="">
          <a>Thông tin tuyến</a>
        </Link>
        <Link href="">
          <a>Tra cứu</a>
        </Link>
        <Link href="">
          <a>Liên hệ</a>
        </Link>
      </nav>
      <div class="copyright">
        <p>
          Bản quyền Trung tâm Quản lý giao thông công cộng Thành phố Hồ Chí Minh
        </p>
        <p>Phát triển bởi Công ty Hệ thống Thông tin FPT</p>
      </div>
    </footer>
  );
}
