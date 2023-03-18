export const useGetUserID = () => {
  return window.localStorage.getItem("userId");
};