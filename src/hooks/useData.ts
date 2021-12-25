import { fetcher } from "./../utils/fetcher";
import { API_END_POINT } from "./../constants/index";
import useSWR from "swr";

export const useData = (path: string) => {
  return useSWR(`${API_END_POINT}${path}`, fetcher);
};

// use query for dynamic routing
interface QueryData {
  main: string;
  subs: string | string[] | undefined;
}

export const useQueryData = ({ main, subs }: QueryData) => {
  if (subs == undefined) {
    subs = "";
  }
  return useSWR(`${API_END_POINT}${main}/${subs}`, fetcher);
};
