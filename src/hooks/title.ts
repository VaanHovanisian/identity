import { fetcher } from "@/lib/fetcher";
import { ApiRouts } from "@/services/constants";
import { axiosInstance } from "@/services/instance";
import { usePathname } from "next/navigation";
import useSWR from "swr";

interface ReturnProps {
  data: Array<any>;
  error: any;
  isLoading: boolean;
}

export const useTitle = (): ReturnProps => {
  const pathname = usePathname();

  const locale =
    pathname.split("/").find((el) => el === "hy" || el === "en") || "";
  const {
    data: title,
    error,
    isLoading,
  } = useSWR(ApiRouts.TITLE + "?locale=" + locale, fetcher);

  const data = isLoading || error ? {} : title;

  return {
    data: data?.docs,
    error,
    isLoading,
  };
};
