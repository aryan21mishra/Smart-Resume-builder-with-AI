import { firebaseAuthService } from "@/service/firebase.auth.service";
import { useAppMutation } from "../useAppMutation";
import { useGoogleOAuthMutation } from "./useAuthMutations";

export function useSigninFirebaseMutation() {
  const { mutate } = useGoogleOAuthMutation();
  return useAppMutation(firebaseAuthService.loginWithGoogle, {
    onSuccess: (data) => {
      console.log(data.token);
      mutate({ token: data.token });
    },
  });
}
