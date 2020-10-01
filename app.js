// let password = document.getElementById('password')

// let showPassword = document.getElementById('showPassword')
// showPassword.addEventListener('click', () => {
//     if (password.type === 'password') {
//         password.type = 'text'
//     } else {
//         password.type = 'password'
//     }
// })

const togglePassword = document.getElementById('togglePassword')
const password = document.getElementById('password')

togglePassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
})

