import { useQuery } from "@tanstack/react-query";

export const useAppQuery = (queryKey, queryFn, options = {}) => {
  return useQuery({
    queryKey,
    queryFn,
    ...options,
  });
};
