import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hotLine from '../../public/images/hotline.png';
export default function sidebar() {
  return (
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2"></div>
        <div class="col-span-1">
          <div class="card text-center">
            <Image src={hotLine} alt="" />
            <p class="text-green font-semibold mb-2.5">1800 792 3887</p>
            <p class="mb-2.5">Hotline Cảnh sát hình sự TP.HCM</p>
            <p class="mb-2.5">Phản ánh về an ninh trật tự trên xe buýt</p>
          </div>
          <div class="card link">
            <h3 class="font-semibold text-green mb-5">Liên kết</h3>
            <Link href="#">
              <a class="mb-5">
                Đăng ký đi xe đưa rước học sinh (năm học 2019-2020)
              </a>
            </Link>
            <Link href="#">
              <a class="mb-5">Địa điểm bán vé tập xe buýt 2019</a>
            </Link>
            <Link href="#">
              <a class="mb-5">
                Thông tin, địa điểm làm thẻ xe buýt miễn phí cho người khuyết
                tật
              </a>
            </Link>
            <Link href="#">
              <a class="mb-5">Thông tin về xe buýt điện tử thông minh</a>
            </Link>
            <Link href="#">
              <a class="mb-5">
                Quyền và nghĩa vụ của DNVT (trích theo hợp đồng đặt hàng 2019)
              </a>
            </Link>
            <Link href="#">
              <a class="text-xs italic font-normal text-gray">Xem thêm...</a>
            </Link>
          </div>
          <div class="card hashtag">
            <h3 class="font-semibold text-green mb-5">Hashtag</h3>
            <div class="flex gap-4 mb-3">
              <Link href="">
                <a class="tag">Xe buýt 33</a>
              </Link>
              <Link href="">
                <a class="tag">Tuyến xe mới</a>
              </Link>
              <Link href="">
                <a class="tag">Hashtag 3</a>
              </Link>
            </div>
            <div class="flex gap-4">
              <Link href="">
                <a class="tag">Hashtag 3</a>
              </Link>
              <Link href="">
                <a class="tag">xe</a>
              </Link>
              <Link href="">
                <a class="tag">buýt 10</a>
              </Link>
              <Link href="">
                <a class="tag">tuyến buýt 10</a>
              </Link>
            </div>
          </div>
          <div class="card category">
            <h3 class="font-semibold text-green mb-5">Danh Mục</h3>
            <Link href="#">
              <a class="block mb-4">Tin tức vận tải HKCC</a>
            </Link>
            <Link href="#">
              <a class="block mb-4">Tin tức giao thông</a>
            </Link>
            <Link href="#">
              <a class="block">Tin tức xã hội</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
