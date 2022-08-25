import React from 'react';
import Image from 'next/image';
import blogPic from '../../public/images/blog1.png';
export default function blog() {
  return (
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <h3 class="font-bold text-green-600">Tin tức</h3>
          <div class="flex flex-col justify-between">
            <a href="" class="flex mb-5">
              <div class="blog-img">
                <Image src={blogPic} alt="blog image 1" />
              </div>
              <div class="">
                <span class="block text-sm text-gray-400 mb-5">11/07/2022</span>
                <h4 class="mb-2.5 font-semibold">
                  TUYẾT XE BUÝT 15 HOẠT ĐỘNG TRỞ LẠI KỂ TỪ NGÀY 01/03/2022
                </h4>
                <p class="mb-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sollicitudin venenatis odio, sed egestas odio vulputate id.
                  Pellentesque eu magna pharetra, luctus tellus ut, varius
                  purus. In hac habitasse platea dictumst. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Proin vitae tristique turpis, non finibus eros.
                  Maecenas ac eros risus. Proin commodo auctor tincidunt. Cras
                  vestibulum,
                </p>
                <button class="white-btn border border-green-600 rounded p-2 text-green-600">
                  Xem thêm
                </button>
              </div>
            </a>
            <a href="" class="flex mb-5">
              <div class="blog-img">
                <Image src={blogPic} alt="blog image 1" />
              </div>
              <div class="">
                <span class="block text-sm text-gray-400 mb-5">11/07/2022</span>
                <h4 class="mb-2.5 font-semibold">
                  NGƯỜI ĐI XE BUÝT CO1 THỂ TRA CỨU THÔNG TIN TUYẾN TRÊN WEBSITE
                </h4>
                <p class="mb-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sollicitudin venenatis odio, sed egestas odio vulputate id.
                  Pellentesque eu magna pharetra, luctus tellus ut, varius
                  purus. In hac habitasse platea dictumst. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Proin vitae tristique turpis, non finibus eros.
                  Maecenas ac eros risus. Proin commodo auctor tincidunt. Cras
                  vestibulum,
                </p>
                <button class="white-btn border border-green-600 rounded p-2 text-green-600">
                  Xem thêm
                </button>
              </div>
            </a>
            <a href="" class="flex mb-5">
              <div class="blog-img">
                <Image src={blogPic} alt="blog image 1" />
              </div>
              <div class="">
                <span class="block text-sm text-gray-400 mb-5">11/07/2022</span>
                <h4 class="mb-2.5 font-semibold">
                  TUYẾT XE BUÝT 15 HOẠT ĐỘNG TRỞ LẠI KỂ TỪ NGÀY 01/03/2022
                </h4>
                <p class="mb-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sollicitudin venenatis odio, sed egestas odio vulputate id.
                  Pellentesque eu magna pharetra, luctus tellus ut, varius
                  purus. In hac habitasse platea dictumst. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Proin vitae tristique turpis, non finibus eros.
                  Maecenas ac eros risus. Proin commodo auctor tincidunt. Cras
                  vestibulum,
                </p>
                <button class="white-btn border border-green-600 rounded p-2 text-green-600">
                  Xem thêm
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
