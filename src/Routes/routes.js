import home from '../pages/home/home.js'
import login_register from '../pages/login-register/login-register.js'
import messages  from '../pages/messages/messages.js'
import profile from '../pages/profile/profile.js'
import Login from '.././components/login-register-boxes/login.js'
import Signup from '@components/login-register-boxes/register.js'
import Forgotpass from '@components/login-register-boxes/forgotpass.js'
import Resetpass from '@components/login-register-boxes/resetpass.js'



export const publicRoutes = [
    {path: "/login", component: Login},
    {path: "/signup", component: Signup},
    {path: "/recoverpass", component: Forgotpass},
    {path: "/resetpass", component: Resetpass},
    {path: "/", component: home},
    {path: "/login-register", component: login_register},
    {path: "/messages", component: messages},
    {path: "/profile", component: profile}
]