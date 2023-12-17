import home from '../pages/home/home.js'
import login_register from '../pages/login-register/login-register.js'
import messages  from '../pages/messages/messages.js'
import profile from '../pages/profile/profile.js'
import Login from '.././components/login-register-boxes/login.js'
import Signup from '@components/login-register-boxes/register.js'
import Forgotpass from '@components/login-register-boxes/forgotpass.js'
import Resetpass from '@components/login-register-boxes/resetpass.js'


export const pathNames = {
    home: "/",
    login_register: "/login-register",
    messages: "/messages",
    profile: "/profile",
    login: "/login",
    signup: "/signup",
    recoverpass: "/recoverpass",
    resetpass: "/resetpass"
}

export const publicRoutes = [
    {path: pathNames.login, component: Login},
    {path: pathNames.signup, component: Signup},
    {path: pathNames.recoverpass, component: Forgotpass},
    {path: pathNames.resetpass, component: Resetpass},
    {path: pathNames.home, component: home},
    {path: pathNames.login_register, component: login_register},
    {path: pathNames.messages, component: messages},
    {path: pathNames.profile, component: profile}
]