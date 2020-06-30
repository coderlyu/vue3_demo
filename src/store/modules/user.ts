import { getToken, setToken, removeToken } from "@/utils/_ls";
import { getInfo } from "@/api/user";
interface userName {
  name?: string;
}
interface stateName {
  token: string;
  user?: userName;
}
interface actionsName {
  commit?: any;
}
interface userInfo {
  username: string;
  password: string;
}
interface resultName {
  data: object | [];
}
const state = {
  token: getToken() || "",
  user: {
    name: "coderly"
  }
};
const mutations = {
  SET_TOKEN: (state: stateName, token: any) => {
    state.token = token;
    setToken(token);
  },
  SET_USER: (state: stateName, user: any) => {
    state.user = user;
  },
  REMOVE_TOKEN: (state: stateName) => {
    state.user = {};
    removeToken();
  }
};

const actions = {
  clearToken({ commit }: actionsName) {
    commit("REMOVE_TOKEN");
  },
  login({ commit }: actionsName, user: userInfo) {
    let { username, password } = user;
    return new Promise(resolve => {
      // 模拟登录
      setTimeout(() => {
        if (!!username && !!password) {
          let token = username + password + username;
          commit("SET_TOKEN", token);
          commit("SET_USER", token);
          resolve();
        }
      }, 1000);
      // login({ username: username.trim(), password: password.trim() })
      //   .then(_res => {
      //     commit("SET_TOKEN", _res.token);
      //     commit("SET_USER", _res.data);
      //   })
      //   .catch(err => {
      //     reject(new Error(err));
      //   });
    });
  },
  getInfo({ commit }: actionsName) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then((_res: resultName) => {
          commit("SET_USER", _res.data);
        })
        .catch((err: any) => {
          reject(new Error(err));
        });
    });
  }
};
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
