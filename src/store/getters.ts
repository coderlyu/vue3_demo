interface userName {
  token: string;
  user: any;
}
interface stateName {
  user: userName;
}
const getters = {
  token: (state: stateName) => state.user.token,
  user: (state: stateName) => state.user.user
};
export default getters;
