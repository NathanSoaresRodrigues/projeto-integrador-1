import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      //staleTime: 1000 * 60 * 2, // 2 minutos
    },
    mutations: {
      retry: 0,
    },
  },
});
