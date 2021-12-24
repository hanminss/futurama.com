import { fetcher } from "./../utils/fetcher";
import { API_END_POINT } from "./../constants/index";
import useSWR from "swr";

export const useData = (path: string) => {
  return useSWR(`${API_END_POINT}${path}`, fetcher);
};

// use query
interface QueryData {
  main: string;
  subs: string;
}

export const useQueryData = ({ main, subs }: QueryData) => {
  return useSWR(`${API_END_POINT}${main}/${subs}`, fetcher);
};
