import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { ApiRouts } from "@/services/constants";
import { usePathname } from "next/navigation";

interface Province {
  provinceName: string;
  monuments: number;
  area: number;
  population: number;
  cities: number;
  villages: number;
  about: string;
}

interface SWRResponse {
  docs: Province[];
}

interface ReturnProps {
  data: Province[] | undefined;
  error: any;
  isLoading: boolean;
}

export const useAboutProvince = (): ReturnProps => {
  const pathname = usePathname();
  const locale =
    pathname.split("/").find((el) => el === "hy" || el === "en") || "";
  const { data, error, isLoading } = useSWR(
    ApiRouts.ABOUT_PROVINCE + "?locale=" + locale,
    fetcher
  );

  return {
    data: data?.docs,
    error,
    isLoading,
  };
};
