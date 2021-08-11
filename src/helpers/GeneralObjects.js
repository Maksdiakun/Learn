import React from "react";
import EmailIcon from "../components/icons/EmailIcon";
import PasswordIcon from "../components/icons/PasswordIcon";
import PersonIcon from "../components/icons/PersonIcon";

export const selectLanguage = {
  showList: false,
  defaultSelectText: "UA",
  countryList: [
    { value: "UA", name: "UA-Ukrainian" },
    { value: "RU", name: "RU-Russian" },
    { value: "EN", name: "EN-English" },
  ],
};

export const emailObj = {
  type: "email",
  name: "email",
  label: "Email",
  placeholder: " Email address",
  icon: <EmailIcon />,
};

export const passwordObj = {
  type: "password",
  name: "password",
  label: "Password",
  placeholder: "Password",
  icon: <PasswordIcon />,
};

export const passwordConfirmationObj = {
  type: "password",
  name: "password2",
  label: "Confirm Password",
  placeholder: "Password ",
  icon: <PasswordIcon />,
};

export const firstNameObj = {
  type: "text",
  name: "first_name",
  label: "First Name",
  placeholder: "First Name",
  icon: <PersonIcon />,
};

export const lastNameObj = {
  type: "text",
  name: "last_name",
  label: "Last Name",
  placeholder: "Last Name",
  icon: <PersonIcon />,
};
