import useSWR from "swr";
import fetcher from "./fetcher";

export const useUser = () => {
  const { data, error } = useSWR("/user", fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePlaylists = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !error && !data,
    isError: error,
  };
};
