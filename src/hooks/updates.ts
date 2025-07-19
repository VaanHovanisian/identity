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

export const useUpdates = (): ReturnProps => {
  const pathname = usePathname();

  const locale =
    pathname.split("/").find((el) => el === "hy" || el === "en") || "";
  const {
    data: updates,
    error,
    isLoading,
  } = useSWR(ApiRouts.UPDATES + "?locale=" + locale, fetcher);

  console.log(locale);

  const data = isLoading || error ? {} : updates;

  return {
    data: data?.docs,
    error,
    isLoading,
  };
};
