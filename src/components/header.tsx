"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Button,
  Container,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui";
import { Logo } from "./";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LanguageDropdown from "./language-dropdown";
import { useWindowScroll } from "react-use";
import useSWR from "swr";
import { ApiRouts } from "@/services/constants";
import { fetcher } from "@/lib/fetcher";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const { data: headerData } = useSWR(ApiRouts.HEADER, fetcher);
  const data = headerData ?? {};
  console.log(data);

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const t = useTranslations("Header");
  const ref = React.useRef(null);
  const { y } = useWindowScroll();
  React.useEffect(() => {
    if (y > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [y]);

  return (
    <header
      ref={ref}
      className={cn(
        "w-full font-third-family text-white bg-transparent transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 z-100",
        {
          "bg-white text-[#781214] shadow-[0px_7px_9px_1px_rgba(0,_0,_0,_0.3)]":
            isScrolled,
        },

        className
      )}
    >
      <Container
        className={cn(
          "max-w-[1680px] w-full py-6 flex items-center justify-between"
        )}
      >
        <Logo
          label={data?.logo?.["logo-label"]}
          imgUrl={data?.logo?.["logo-image"]?.url}
          isShow
          className="z-101 relative"
        />

        <ul
          className={cn(
            "hidden lg:flex gap-20 font-medium text-[14px] leading-[171%] tracking-[0.04em]"
          )}
        >
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex cursor-pointer items-center gap-1 text-inherit"
                )}
              >
                {t("navItem1")}{" "}
                <ChevronDown className="text-inherit" strokeWidth={2} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {data?.["tesadaran-links"]?.map((el: any) => (
                  <DropdownMenuItem key={el.id}>
                    <Link className="w-full" href={el.url}>
                      {el.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Link href={"/foundation"} className="text-inherit w-full">
              {t("navItem2")}
            </Link>
          </li>
          <li>
            <Link href={"/contact-us"} className="text-inherit w-full">
              {t("navItem3")}
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-1">
          <div className="lg:hidden relative">
            <button
              className="cursor-pointer flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="text-inherit" />
              ) : (
                <Menu className="text-inherit" />
              )}
            </button>
            {menuOpen && (
              <ul className="absolute top-10 min-w-48 rounded-lg left-0 bg-white p-2 flex flex-col gap-1 text-[#781214]">
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full rounded-lg cursor-pointer p-2 hover:text-white hover:bg-[#781214] flex items-center gap-1">
                      {t("navItem1")} <ChevronDown size={16} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {data?.["tesadaran-links"]?.map((el: any) => (
                        <DropdownMenuItem key={el.id}>
                          <Link href={el.url} className="text-inherit w-full">
                            {el.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link
                    className="w-full block rounded-lg p-2 hover:text-white hover:bg-[#781214]"
                    href={"/foundation"}
                  >
                    {t("navItem2")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-full block rounded-lg p-2 hover:text-white hover:bg-[#781214]"
                    href={"/contact-us"}
                  >
                    {t("navItem3")}
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="flex items-center gap-3 sm:flex-row-reverse">
            <LanguageDropdown className="text-inherit" />

            <Button
              variant={!isScrolled ? "destructive" : "default"}
              className={cn(
                "font-medium font-third-family text-[14px] ",
                !isScrolled
                  ? "text-primary"
                  : "text-white hover:bg-white hover:text-primary border border-primary"
              )}
            >
              <Link className="w-full" href={data?.["button"]?.url}>
                {" "}
                {data?.["button"]?.label}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
