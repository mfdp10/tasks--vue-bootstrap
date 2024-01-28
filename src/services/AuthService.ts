import { Ref, ref } from "vue";

class AuthService {
  private jwt: Ref<string>;
  private error: Ref<string>;

  constructor() {
    this.jwt = ref("");
    this.error = ref("");
  }

  getJwt(): Ref<string> {
    return this.jwt;
  }

  getError(): Ref<string> {
    return this.error;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const res = await fetch("https://www.negrisl.es/tasks/api/Users/Authenticate", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          //   "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
          //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          UserName: email,
          Password: password,
        }),
      });

      const response = await res.json();
      console.log("response", response);

      if (response.result === "error") {
        this.error.value = "Login failed";
        console.log("error", response.result);
        return false;
      }

      this.jwt.value = response.token;

      //$cookies.set.set("auth", response.token);
      console.log("no error", response.token);
      return true;
    } catch (error) {
      this.error.value = "Login failed";
      return false;
    }
  }
}

export default AuthService;
