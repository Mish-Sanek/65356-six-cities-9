const EMAIL = 'email';

type Email = string;

export const saveEmail = (email: Email): void => {
  localStorage.setItem(EMAIL, email);
};

export const getEmail = (): Email => {
  const email = localStorage.getItem(EMAIL);
  return email ?? '';
};

export const deleteEmail = () => {
  localStorage.removeItem(EMAIL);
};
