import { connect } from './common.js';

window.onload = function() {
    document.querySelector('input[value="登录"]').onclick = function() {
        let username = document.querySelector('input[name="username"]').value
        let password = document.querySelector('input[name="password"]').value
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        if (connect()) {
            window.location.href = 'main.html'
        }
    }
}