"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button, Container, Input } from "./ui";
import { Logo } from "./";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import useSWR from "swr";
import { ApiRouts } from "@/services/constants";
import { fetcher } from "@/lib/fetcher";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const { data: footerData } = useSWR(ApiRouts.FOOTER, fetcher);
  const data = footerData ?? {};
  console.log(data);

  const firstSection = data?.["himnadram-links"] ?? [];
  const secondSection = data?.["tesadaran-links"] ?? [];
  console.log(firstSection);

  return (
    <div
      className={cn(
        "pt-12 shadow-[0px_-7px_9px_-1px_rgba(0,_0,_0,_0.1)]",
        className
      )}
    >
      <Container className="max-w-[1740px] max-lg:flex-wrap max-lg:justify-center flex justify-between gap-6 mb-5">
        <div className="w-full max-w-[270px] text-center lg:text-start space-y-5">
          <Logo className="text-primary"
            label={data?.logo?.["logo-label"]}
            imgUrl={data?.logo?.["logo-image"]?.url}
          />
          <p className="text-xs leading-[133%] tracking-[0.04em]">
            {data?.["first-text"]}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start flex-wrap gap-6 w-full justify-center">
          <ul className="flex flex-col gap-4 min-w-[200px] max-w-[250px]">
            <li className="font-bold text-[14px] text-primary text-center lg:text-start">
              Հիմնադրամ
            </li>
            <hr className="w-[220px] mx-auto lg:mx-0" />
            {firstSection?.map((el) => (
              <li
                key={el.id}
                className="text-xs font-medium text-center lg:text-start"
              >
                <Link href={`/${el.url}`}>{el.label}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4 min-w-[200px] max-w-[250px]">
            <li className="font-bold text-[14px] text-primary text-center lg:text-start">
              Տեսադարան
            </li>
            <hr className="w-[220px] mx-auto lg:mx-0" />
            {secondSection.map((el) => (
              <li
                key={el.id}
                className="text-xs font-medium text-center lg:text-start"
              >
                <Link href={`/${el.url}`}>{el.label}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4 min-w-[200px] max-w-[250px]">
            <li className="font-bold text-[14px] text-primary text-center lg:text-start">
              Կապ
            </li>
            <hr className="w-[220px] mx-auto lg:mx-0" />
            <li className="flex items-center justify-center lg:justify-start gap-2.5 text-xs font-medium">
              <Phone size={21} />
              <a href="tel:+37400000000">+374 00 000-000</a>
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2.5 text-xs font-medium">
              <Mail size={21} />
              <a href="mailto:gagikidentity@gmail.com">
                gagikidentity@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2.5 text-xs font-medium">
              <MapPin size={21} />
              <span>RA, Yerevan, Road 00</span>
            </li>
            <li className="flex gap-3 flex-wrap justify-center lg:justify-start">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <span
                  key={i}
                  className="inline-flex items-center justify-center w-[33px] h-[33px] border-[1.5px] border-primary rounded-[3px]"
                >
                  <Icon color="#781214" size={18} strokeWidth={3} />
                </span>
              ))}
            </li>
          </ul>

          <ul className="flex flex-col gap-4 min-w-[250px] max-w-[300px]">
            <li className="font-bold text-[14px] text-primary text-center lg:text-start">
              Բաժանորդագրություն
            </li>
            <hr className="w-[220px] mx-auto lg:mx-0" />
            <li className="text-xs font-medium text-center lg:text-start">
              {data?.["last-text"]}
            </li>
            <div className="flex items-center gap-4 border-1 rounded-2xl p-1 px-2 bg-white">
              <Mail color="#00000080" />
              <Input
                className="border-none outline-0"
                type="email"
                placeholder="Էլ-փոստ"
              />
            </div>
            <span>
              <Button className="w-full">{data?.["button-text"]}</Button>
            </span>
          </ul>
        </div>
      </Container>

      <hr className="w-full" />
      <div className="flex items-center justify-center gap-1 py-6">
        <p className="text-xs text-center font-medium">
          {data?.["bottom-text"]}
        </p>
      </div>
    </div>
  );
};
