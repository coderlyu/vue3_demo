// interface userName {
//   token: string;
//   user: any;
// }
// interface stateName {
//   user: userName;
// }
const getters = {
  token: (state: any) => state.user.token,
  user: (state: any) => state.user.user
};
export default getters;
