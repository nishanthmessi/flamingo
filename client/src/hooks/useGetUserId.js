export const useGetUserID = () => {
  return window.localStorage.getItem("userId");
};

export const useProfileId = () => {
  return sessionStorage.getItem("profile_id")
}