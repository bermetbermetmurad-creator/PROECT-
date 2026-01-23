import emailjs from "emailjs-com";

const SERVICE_ID = "service_iix6dd9";
const TEMPLATE_LOGIN = "template_z8q4e56";
const TEMPLATE_LOGOUT = "template_z8q4e56";
const PUBLIC_KEY = "h7YgMrc-s210-NanN";

export const sendLoginEmail = (user) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_LOGIN,
    {
      name: user.name,
      email: user.email,
    },
    PUBLIC_KEY
  );
};

export const sendLogoutEmail = (user) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_LOGOUT,
    {
      name: user.name,
      email: user.email,
    },
    PUBLIC_KEY
  );
};
