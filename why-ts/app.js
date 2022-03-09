// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

// NOTE: js 도구 이용 /** 치고 엔터 누르면 타입 정의 및 속성 지정 가능 => 자동완성에 뜸
/**
 * @typedef {object} Address
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {promises<User>}
 */
function fetchUser() {
  return axios.get(url);
}

// fetchUser().then(function (response) {
//   response.address.
// })

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // 이름, 이메일, 주소 표시하기
      username.innerText = user.name
      email.innerText = user.email
      address.innerText = user.address.city
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
