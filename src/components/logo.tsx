import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  isShow?: boolean;
}

export const Logo: React.FC<Props> = (props) => {
  const { className, isShow } = props;
  return (
    <Link href={"/"} className={cn("flex items-center gap-4", className)}>
      <svg
        width={58}
        height={58}
        viewBox="0 0 183 183"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M91.3116 166.088L16.4745 91.2785L91.3116 16.4611L166.156 91.2785L91.3116 166.088ZM91.3116 182.557L182.623 91.2785L91.3116 -6.10352e-05L0.000106812 91.2785L91.3116 182.557Z"
          fill="currentColor"
        />
        <path
          d="M74.2161 113.943L74.2088 108.369L74.2161 108.361V96.725H85.8639V108.369V119.263V127.712L91.3092 133.162L96.7546 127.719L96.7619 119.255L108.41 119.263V132.536L91.3092 149.623L74.2161 132.536V119.263V113.943Z"
          fill="currentColor"
        />
        <path
          d="M85.8677 85.8356H74.2199L63.3219 85.8283L54.87 85.8356L49.4173 91.279L54.87 96.7224L63.3219 96.7151V108.366H55.7581H50.0434L32.9503 91.279L50.0434 74.192H52.1764H63.3219H74.2126L74.2199 74.1847L85.8677 74.192V85.8356Z"
          fill="currentColor"
        />
        <path
          d="M108.41 74.1834L108.402 74.1906L108.41 85.8342L96.7546 85.827V74.1906L96.7619 63.2966L96.7546 54.8404L91.3092 49.3971L85.8639 54.8477V63.2966H74.2161V50.0156L91.3092 32.9287L108.41 50.0229V63.2966V74.1834Z"
          fill="currentColor"
        />
        <path
          d="M132.594 108.369H119.694L119.308 108.362H108.417L108.41 108.369H96.7694V96.7331L108.417 96.7258H119.308L127.767 96.7331L133.212 91.2824L127.767 85.8318L119.308 85.839V74.1882L132.594 74.1954L149.687 91.2824L132.594 108.369Z"
          fill="currentColor"
        />
      </svg>
      <span
        className={cn("text-inherit font-third-family text-[24px] font-bold", {
          "md:block hidden ": isShow,
        })}
      >
        ԻՆՔՆՈՒԹՅՈՒՆ
      </span>
    </Link>
  );
};
