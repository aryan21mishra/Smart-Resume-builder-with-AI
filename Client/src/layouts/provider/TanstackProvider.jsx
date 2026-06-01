import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { toast } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      // Opt-out mechanism: Skip global toast if the query explicitly tells us to
      console.log("query.meta?.skipGlobalError", query.meta?.skipGlobalError);
      if (query.meta?.skipGlobalError) return;

      // Handle the global error UI
      toast.error(`Query Error: ${error.message || "Something went wrong"}`);
    },
  }),

  mutationCache: new MutationCache({
    onError: (error) => {
      // 1. Check if the server sent back a custom error JSON structure
      const serverMessage = error.response?.data?.message;

      // 2. Fallback to generic Axios message if the server structure is missing
      const fallbackMessage = error.message || "An unexpected error occurred";

      // 3. Display the actual error text ("Email already exist") in the toast
      toast.error(serverMessage || fallbackMessage);
    },
  }),
});

const TanstackProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
