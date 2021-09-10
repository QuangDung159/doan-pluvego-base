import React, { useEffect, useState } from "react";
import Inp from "@Components/base/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FolderMinus } from "react-feather";
import { useHistory } from "react-router-dom";
import { loginAsync } from "@Utils/ApiManager";

// create validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Veuillez entrer votre email")
    .email("Email invalide"),
  password: yup.string().required("Veuillez entrer un mot de passe"),
});

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "admin@mail.com",
    password: "0000",
  });

  const handleNavigate = (message) => {
    setTimeout(() => {
      if (formData.email === "user@mail.com") {
        history.push("/user/profil");
      } else {
        history.push("/admin/profil");
      }
    }, 2000);
  };

  const onLoginSubmit = async () => {
    const { email, password } = formData;

    const body = {
      username: email,
      password,
    };

    const res = await loginAsync(body);

    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      handleNavigate(res.data?.message);
    } else {
      console.log("res :>> ", res);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log("errors :>> ", errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="flex flex-col justify-center min-h-t_body h-full items-center">
        <Inp
          label="Adresse email"
          register={register}
          inputName="email"
          validateMessage={errors?.email?.message}
          onChange={(e) => handleInputChange(e)}
          value={formData.email}
          placeholder="user@mail.com"
          type="text"
        />

        <Inp
          label="Mot de passe"
          register={register}
          inputName="password"
          type="password"
          validateMessage={errors?.password?.message}
          onChange={(e) => handleInputChange(e)}
          value={formData.password}
        />
        <div className="md:block">
          <button type="submit" className="t_empty_btn cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
