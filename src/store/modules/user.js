import { getToken, setToken, removeToken } from "@/utils/_ls";
import { getUserInfo, login } from "@/api/user.js";
const state = {
  token: getToken() || "",
  user: ""
};
const mutations = {
  SET_TOKEN: (state, token) => {
    token = token || "";
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
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password.trim() })
        .then(_res => {
          commit("SET_TOKEN", _res.data.token);
          resolve();
        })
        .catch(err => {
          reject(new Error(err));
        });
    });
  },
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then(_res => {
          commit("SET_USER", _res.data);
          resolve();
        })
        .catch(err => {
          reject(new Error(err));
        });
    });
  },
  logout({ commit }) {
    return new Promise(resolve => {
      // 模拟登出
      setTimeout(() => {
        commit("REMOVE_TOKEN");
        resolve();
      }, 1000);
    });
  }
};
const getters = {
  name(state) {
    return (state.user && state.user.name) || "";
  },
  avatar(state) {
    return (state.user && state.user.avatar) || "";
  },
  intro(state) {
    return (state.user && state.user.intro) || "";
  },
  roles(state) {
    return (state.user && state.user.roles) || "";
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
