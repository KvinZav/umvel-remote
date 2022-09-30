import { REGEX_EMAIL } from "@constants/emailRegexp.constant";

export const emailValidation = (email: string) => {
  const regex = new RegExp(REGEX_EMAIL);
  return regex.test(email);
}