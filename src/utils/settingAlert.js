export const settingAlert = (timer = 1500) => {
  return {
    position: 'top-right',
    autoClose: timer,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };
};
