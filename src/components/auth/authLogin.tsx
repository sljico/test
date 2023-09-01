import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../providers/authProvider";
import { signin } from "../../services/api/api";
import FormComponent, { LoginData } from "../forms/LoginForm";

function AuthLogin() {
  const navigate = useNavigate();
  const { dispatch } = useAuthState();

  const {
    formState: { errors },
  } = useForm<LoginData>();

  const { mutate, isLoading } = useMutation(signin, {
    onSuccess: (data) => {
      console.log(123, data.data);
      dispatch({
        type: "SUCCESS_SIGNIN",
      });
      // storage.setToken(data.data);
      navigate("/app/users");
    },
    onError: () => {
      console.log(errors);
    },
  });

  const onSubmit = (data: any) => {
    const formData = {
      ...data,
    };

    mutate(formData);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <FormComponent onSubmit={onSubmit} isSubmitting={isLoading} />
    </>
  );
}

export default AuthLogin;
