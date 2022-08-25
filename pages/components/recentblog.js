import React from 'react';
import Image from 'next/image';
import blogImg from '../../public/images/recent-blog.png';
import blogImg1 from '../../public/images/recent-blog-1.png';
import bus from '../../public/images/bus.png';
export default function recentblog() {
  return (
    <div class="container px-4">
      <h3 class="text-green font-semibold pb-6 text-lg">Tin nổi bật</h3>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <div class="grid grid-cols-3 gap-4">
            <a class="blog-card">
              <div class="relative">
                <div class="img-card">
                  <Image src={blogImg} alt="" width={320} height={220} />
                </div>
                <div class="absolute top-0 left-0 sticker rounded-lg flex justify-center items-center">
                  <Image src={bus} alt="" />
                </div>
              </div>
              <h3 class="tracking-wide font-semibold pt-2">
                Pellentesque bibendum massa tortor, eget porttitor augue luctus
                quis. Donec.
              </h3>
              <div class="read-more">
                <p class="border border-white rounded-lg text-white cursor-pointer py-1 px-4">
                  Xem thêm
                </p>
              </div>
            </a>
            <a class="blog-card">
              <div class="relative">
                <div class="img-card">
                  <Image src={blogImg} alt="" width={320} height={220} />
                </div>
                <div class="absolute top-0 left-0 sticker rounded-lg flex justify-center items-center">
                  <Image src={bus} alt="" />
                </div>
              </div>
              <h3 class="tracking-wide font-semibold pt-2">
                Pellentesque bibendum massa tortor, eget porttitor augue luctus
                quis. Donec.
              </h3>
              <div class="read-more">
                <p class="border border-white rounded-lg text-white cursor-pointer py-1 px-4">
                  Xem thêm
                </p>
              </div>
            </a>
            <a class="blog-card">
              <div class="relative">
                <div class="img-card">
                  <Image src={blogImg1} alt="" width={320} height={220} />
                </div>
                <div class="absolute top-0 left-0 sticker rounded-lg flex justify-center items-center">
                  <Image src={bus} alt="" />
                </div>
              </div>
              <h3 class="tracking-wide font-semibold pt-2">
                Pellentesque bibendum massa tortor, eget porttitor augue luctus
                quis. Donec.
              </h3>
              <div class="read-more">
                <p class="border border-white rounded-lg text-white cursor-pointer py-1 px-4">
                  Xem thêm
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
