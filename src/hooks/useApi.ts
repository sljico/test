import { QueryKey, UseQueryOptions, useQuery } from "react-query";

export function useApi<T>(
  queryKey: QueryKey,
  fetchFunction: any,
  options?: UseQueryOptions<T>
) {
  return useQuery<T>(queryKey, fetchFunction, options);
}
