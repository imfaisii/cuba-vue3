<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="login-card">
          <div>
            <div>
              <!-- <a class="logo" href="index.html">
                <img class="img-fluid for-light" src="" alt="looginpage" />
                <img class="img-fluid for-dark" src="" alt="looginpage" />
              </a> -->
            </div>
            <div class="login-main">
              <form @submit.prevent="storeUser()" class="theme-form">
                <h4>Create your account</h4>
                <p>Enter your personal details to create account</p>
                <div class="form-group">
                  <label class="col-form-label pt-0">Your Name</label>
                  <div class="row g-2">
                    <div class="col-6">
                      <input
                        v-model="user.firstName"
                        :class="{
                          'is-invalid': v$.user.firstName.$error,
                        }"
                        class="form-control"
                        type="text"
                        placeholder="First name"
                      />
                      <span v-if="v$.user.firstName.$error" class="text-danger">
                        {{ v$.user.firstName.$errors[0].$message }}
                      </span>
                    </div>
                    <div class="col-6">
                      <input
                        v-model="user.lastName"
                        class="form-control"
                        type="text"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Email Address</label>
                  <input
                    v-model="user.email"
                    class="form-control"
                    type="email"
                    placeholder="Test@gmail.com"
                  />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Password</label>
                  <div class="form-input position-relative">
                    <input
                      v-model="user.password"
                      class="form-control"
                      type="password"
                      placeholder="*********"
                    />
                    <!-- <div class="show-hide"><span class="show"></span></div> -->
                  </div>
                </div>
                <div class="form-group mb-0">
                  <div class="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label class="text-muted" for="checkbox1"
                      >Agree with
                      <a class="ms-2" href="#">Privacy Policy</a>
                    </label>
                  </div>
                  <button
                    :disabled="loading"
                    class="btn btn-primary btn-block w-100"
                    type="submit"
                  >
                    {{ btnText }}
                    &nbsp;
                    <div
                      v-if="loading"
                      class="spinner-border spinner-border-sm"
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                </div>
                <h6 class="text-muted mt-4 or">Or signup with</h6>
                <div class="social mt-4">
                  <div class="btn-showcase">
                    <a
                      class="btn btn-light"
                      href="https://www.linkedin.com/login"
                      target="_blank"
                      ><i class="txt-linkedin fa-brands fa-linkedin-in"></i>
                      &nbsp;&nbsp;LinkedIn </a
                    ><a
                      class="btn btn-light"
                      href="https://twitter.com/login?lang=en"
                      target="_blank"
                      ><i class="txt-twitter fa-brands fa-twitter"></i>
                      &nbsp;&nbsp;Twitter</a
                    ><a
                      class="btn btn-light"
                      href="https://www.facebook.com/"
                      target="_blank"
                      ><i class="txt-fb fa-brands fa-facebook-f"></i
                      >&nbsp;&nbsp;Facebook</a
                    >
                  </div>
                </div>
                <p class="mt-4 mb-0">
                  Already have an account?
                  <a class="ms-2" href="login.html">Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      loading: false,
      btnText: "Create Account",
    };
  },
  validations() {
    return {
      user: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
      },
    };
  },
  methods: {
    async storeUser() {
      const result = await this.v$.$validate();
      if (!result) {
        // notify user form is invalid
        return;
      }
      this.loading = true;
      this.btnText = "Creating account...";

      console.log(this.user);

      setTimeout(() => {
        this.loading = false;
        this.btnText = "Create Account";
      }, 5000);
    },
  },
};
</script>