export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};
export const validateRegisterForm = ({ mail, username, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);
  return isMailValid && isPasswordValid && isUsernameValid;
};
const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 12;
};
const validateUsername = (username) => {
  return username.length >= 3 && username.length <= 12;
};
export const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { validateLoginForm, validateRegisterForm };
