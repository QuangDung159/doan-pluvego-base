import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import "react-phone-input-2/lib/style.css"
import { useDispatch } from "react-redux";
import * as yup from "yup";
import InlineInp from "@Components/base/inline-input";
// import InlinePhoneInput from "@Components/base/InlinePhoneInput"
import { setGlobalShowToast } from "@Redux/Actions";
import { getCurrentAdminAsync } from "@Utils/ApiManager";

// create validation schema
const schema = yup.object().shape({
  nom: yup
    .string()
    .required("Veuillez entrer votre nom")
    .max(100, "Plus de 100 caractères"),
  prenom: yup
    .string()
    .required("Veuillez entrer votre prenom")
    .max(100, "Plus de 100 caractères"),
  fonction: yup
    .string()
    .required("Veuillez entrer votre fonction")
    .max(100, "Plus de 100 caractères"),
  email: yup
    .string()
    .required("Veuillez entrer votre email")
    .max(200, "Plus de 200 caractères")
    .email("Email non valide"),
});

export default function Profil() {
  // redux
  const dispatch = useDispatch();

  // variable
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    fonction: "",
    email: "",
    phoneNum: "",
  });

  const [isPhoneValid, setIsPhoneValid] = useState(true);

  // function
  useEffect(() => {
    getCurrentAdminInfo();
  }, []);

  const getCurrentAdminInfo = async () => {
    const res = await getCurrentAdminAsync("admin123");
    if (res.status === 200) {
      setFormData(res.data);
    }
  };

  const onSubmit = () => {
    onValidatePhone(formData.phoneNum);
    if (!isPhoneValid) return;
    dispatch(setGlobalShowToast(true, "Update success", "success"));
  };

  const onValidatePhone = (phone) => {
    if (phone.length === 0) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  // render
  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <InlineInp
          type="text"
          register={register}
          inputName="nom"
          label="Nom"
          validateMessage={errors?.nom?.message}
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={formData.nom}
        ></InlineInp>
        <InlineInp
          type="text"
          register={register}
          inputName="prenom"
          label="Prénom"
          validateMessage={errors?.prenom?.message}
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={formData.prenom}
        ></InlineInp>
        <InlineInp
          type="text"
          register={register}
          inputName="fonction"
          label="Fonction"
          validateMessage={errors?.fonction?.message}
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={formData.fonction}
        ></InlineInp>
        <InlineInp
          type="text"
          register={register}
          inputName="email"
          label="Adresse email"
          validateMessage={errors?.email?.message}
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={formData.email}
        ></InlineInp>
        {/* <InlinePhoneInput
          country="fr"
          value={formData.phoneNum}
          onChange={phone => {
            setFormData({ ...formData, phoneNum: phone })
            onValidatePhone(phone)
          }}
          validateMessage={
            !isPhoneValid && "Le numéro de téléphone n'est pas valide"
          }
          label="Numéro de téléphone"
        ></InlinePhoneInput> */}

        <div className="flex justify-end">
          <button type="submit" className="t_empty_btn cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="flex flex-col justify-center min-h-t_body h-full items-center">
      {renderForm()}
    </div>
  );
}
