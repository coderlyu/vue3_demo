const preUrl = "/user";
const tokens = {
  user: {
    token: "user-token"
  }
};

const users = {
  "user-token": {
    roles: ["user"],
    intro: "I am an user",
    avatar: "http://coderly.cn/img/self-header.jpg",
    name: "coderly"
  }
};

module.exports = [
  // 用户登录
  {
    url: `${preUrl}/login`,
    type: "post",
    response: config => {
      const { username } = config.body;
      const token = tokens[username];
      if (!token) {
        return {
          code: 200003,
          message: "Account and password are incorrect."
        };
      }
      return {
        code: 200,
        data: token
      };
    }
  },

  // 通过 token 获取用户详情
  {
    url: `${preUrl}/info`,
    type: "get",
    response: config => {
      const { authorizationtoken } = config.headers;
      const info = users[authorizationtoken];
      if (!info) {
        return {
          code: 200002,
          message: "Login failed, unable to get user details."
        };
      }
      return {
        code: 200,
        data: info
      };
    }
  },

  // user logout
  {
    url: "/vue-element-admin/user/logout",
    type: "post",
    response: () => {
      return {
        code: 20000,
        data: "success"
      };
    }
  }
];
