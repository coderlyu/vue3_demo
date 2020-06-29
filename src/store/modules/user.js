import { getToken, setToken, removeToken } from "@/utils/_ls";
import { getInfo } from "@/api/user.js";
const state = {
  token: getToken() || "",
  user: {
    name: "coderly"
  }
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
    setToken(token);
  },
  SET_USER: (state, user) => {
    state.user = user;
  },
  REMOVE_TOKEN: state => {
    state.user = "";
    removeToken();
  }
};
const actions = {
  clearToken({ commit }) {
    commit("REMOVE_TOKEN");
  },
  login({ commit }, user) {
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
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(_res => {
          commit("SET_USER", _res.data);
        })
        .catch(err => {
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
