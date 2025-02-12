import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full pb-5 pt-10">
      <div className="mx-auto mb-6 max-w-screen-xl px-8 md:mb-0 xl:px-0">
        <Link href="/" className="w-fit">
          <Image
            src="/images/screenclass-logo-white.png"
            alt="screenclass logo"
            width={77}
            height={17}
            className="object-cover md:h-[51px] md:w-[248px]"
          />
        </Link>
      </div>
      <div className="mx-auto mt-9 grid max-w-screen-xl grid-cols-2 justify-around gap-8 px-8 sm:gap-6 lg:grid-cols-[auto_1fr_1fr_1fr] xl:px-0">
        <div className="flex w-full flex-col gap-y-8 lg:w-[323px]">
          <p className="text-xs font-medium text-white md:text-base lg:text-xl">
            A product of{" "}
            <span className="font-semibold">
              Martad Education & Skills Development LTD.
            </span>
          </p>
          <p className="text-xs font-medium text-white md:text-base lg:text-lg">
            3B, Alegbe Close, Mende Maryland, Lagos, Nigeria.
          </p>
        </div>
        <div className="w-fit">
          <h5 className="mb-6 text-xs font-semibold uppercase text-white sm:text-sm lg:text-lg">
            Explore
          </h5>
          <ul className="font-medium text-gray-500">
            <li className="mb-4">
              <Link
                href="/about-us"
                className="text-xs font-medium text-white sm:text-sm"
              >
                About Us
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/contact-us"
                className="text-xs font-medium text-white sm:text-sm"
              >
                Contact
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/"
                className="text-xs font-medium text-white sm:text-sm"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-fit">
          <h5 className="mb-6 text-xs font-semibold uppercase text-white sm:text-sm lg:text-lg">
            Contact Us
          </h5>
          <ul className="font-medium text-gray-500">
            <li className="mb-4">
              <p className="text-xs font-medium text-white sm:text-sm">
                +234 704 330 300
              </p>
            </li>
            <li>
              <p className="text-xs font-medium text-white sm:text-sm">
                +234 809 293 3330
              </p>
            </li>
            <li>
              <p className="text-xs font-medium text-white sm:text-sm">
                info@screenclass.com
              </p>
            </li>
          </ul>
        </div>
        <div className="w-fit">
          <h5 className="mb-6 text-xs font-semibold uppercase text-white sm:text-sm lg:text-lg">
            Features
          </h5>
          <ul className="font-medium text-gray-500">
            <li className="mb-4">
              <p className="text-xs font-medium text-white sm:text-sm">
                Primary
              </p>
            </li>
            <li className="mb-4">
              <p className="text-xs font-medium text-white sm:text-sm">
                Secondary
              </p>
            </li>
            <li className="mb-4">
              <p className="text-xs font-medium text-white sm:text-sm">
                Pre-varsity
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-2 h-[1px] w-full bg-white" />
      <div className="max-screen-xl mx-auto mt-8 w-full px-8 xl:px-0">
        <p className="text-center text-[10px] text-white sm:text-xs">
          © 2025{" "}
          <Link href="/" className="hover:underline">
            Screenclass
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
