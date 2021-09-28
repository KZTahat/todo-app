import superagent from "superagent";
const API = "https://mid-project-01.herokuapp.com";

export default function SignupForm() {
  function handelSubmit(e) {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      password: e.target.password.value,
      email: e.target.email.value,
      role: e.target.role.value,
    };
    const response = superagent.post(`${API}/signup`).send(body);
    console.log("response :", response);
  }
  return (
    <div id="signupFormContainer">
        <span id='signupSpan'>Fill the following fields to create your account</span>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="signupFormItems"
          required
        />
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          className="signupFormItems"
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          className="signupFormItems"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="signupFormItems"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="signupFormItems"
          required
        />
        <input
          type="text"
          name="role"
          placeholder="role"
          className="signupFormItems"
          required
        />
        <button type="submit" className="signupFormItems" >
          Create Account
        </button>
      </form>
    </div>
  );
}
