import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAppMutation(mutationFn, options) {
  const queryClient = useQueryClient();
  const { onSuccess, onError, invalidateQueries, ...rest } = options;

  return useMutation({
    mutationFn,
    onSuccess: (data, variables, context) => {
      if (onSuccess) {
        onSuccess(data, variables, context);
      }
      if (invalidateQueries) {
        invalidateQueries.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });
      }
    },
    onError: (error, variables, context) => {
      if (onError) {
        onError(error, variables, context);
      }
    },
    ...rest,
  });
}
