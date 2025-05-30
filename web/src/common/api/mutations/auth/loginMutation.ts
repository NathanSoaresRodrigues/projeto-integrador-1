import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { ApiResponse } from "../../interfaces/api-response";
import { LoginRequest } from "../../interfaces/auth/auth-api-interfaces";
import { loginDispatch } from "../../dispatch/auth/auth-dispatch";

export const loginMutation = (): UseMutationResult<
  ApiResponse<null>,
  unknown,
  LoginRequest
> => {
  return useMutation({
    mutationFn: (request: LoginRequest) => loginDispatch(request),
  });
};
