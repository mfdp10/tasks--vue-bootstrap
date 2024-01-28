import { defineStore } from "pinia";

const useAuth = defineStore("auth", {
  state: () => {
    return {
      token: null,
      baseURL: "https://www.negrisl.es/tasks/",
    };
  },
  actions: {
    async register(
      email: string,
      password: string,
      username: string,
      firstName: string,
      lastName: string,
      confirm: string,
      RoleId: string,
      Sign: string
    ): Promise<boolean> {
      const uri = `${this.baseURL}api/Users/Register`;
      const rawResponse = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username: email,
          firstName,
          lastName,
          confirm,
          RoleId,
          Sign,
        }),
      });
      const response = await rawResponse.json();
      console.log("response register", response);

      if (response.success) {
        await this.login(email, password);
        return true;
      } else {
        return false;
      }
    },
    async login(username: string, password: string) {
      const uri = `${this.baseURL}api/Users/Authenticate`;
      const rawResponse = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const response = await rawResponse.json();
      console.log("response login", response);

      if (response.result === "error") {
        return false;
      } else {
        this.token = response.token;
        return true;
      }
    },
    logout() {
      this.token = null;
    },
    async getTasks() {
      const uri = `${this.baseURL}api/Tasks/GetTasks`;
      try {
        const rawResponse = await fetch(uri, {
          headers: {
            "Content-Type": "Application/json; charset=utf-8",
            Accept: "Application/json",
            Authorization: `Bearer ${this.token}`,
          },
        });
        const response = await rawResponse.json();
        return response;
      } catch (error) {
        return "no tasks";
      }
    },
    async createTask() {
      //TODO
    },
  },
  persist: {
    storage: sessionStorage,
    paths: ["token"],
  },
});
export default useAuth;
