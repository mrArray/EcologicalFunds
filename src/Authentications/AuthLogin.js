import axios from "axios";

    let username = 'noura';
    let password = 'Pass@1234';
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')


class AuthLogin {

  login(username, password) {
    return axios.post('https://gridxadmin.kedco.com.ng/accounts/api/jwt/' , { username,  password },  { headers: { 'Authorization': `Basic ${token}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
    'Access-Control-Allow-Credentials': true }, }   )
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }



  logout() {
    localStorage.removeItem("user");
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, firstName, lastName, address ,lg, state) {
    return axios.post('https://gridxadmin.kedco.com.ng/accounts/api/jwt/', {
      username,
      email,
      password,
      firstName,
      lastName,
      address,
      lg,
      state
    });
  }


  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthLogin();
