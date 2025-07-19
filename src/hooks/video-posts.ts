import { fetcher } from "@/lib/fetcher";
import { ApiRouts } from "@/services/constants";
import { usePathname } from "next/navigation";
import useSWR from "swr";

interface ReturnProps {
  data: Array<any>;
  error: any;
  isLoading: boolean;
}

export const useVideoPosts = (): ReturnProps => {
  const pathname = usePathname();

  const locale =
    pathname.split("/").find((el) => el === "hy" || el === "en") || "";
  const {
    data: videoPosts,
    error,
    isLoading,
  } = useSWR(ApiRouts.VIDEO + "?locale=" + locale, fetcher);

  const data = isLoading || error ? {} : videoPosts;

  return {
    data: data?.docs,
    error,
    isLoading,
  };
};
