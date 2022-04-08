const USER = 'user';

export const saveData = (data: JSON) => {
  const res = JSON.stringify(data);
  localStorage.setItem(USER, res);
};

export const deleteData = (): void => {
  localStorage.removeItem(USER);
};

export const getData = () => {
  const user = localStorage.getItem(USER);
  if(user) {
    return JSON.parse(user);
  } else {
    return '';
  }
};
