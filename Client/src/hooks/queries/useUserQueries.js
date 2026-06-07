import { userQueryKeys } from "@/queries/query-keys/user.query-keys";
import { useAppQuery } from "../useAppQuery";
import { user } from "@/service/user.service";

export const useGetProfile = () =>
  useAppQuery(userQueryKeys.userInfo, () => user.getProfile());
