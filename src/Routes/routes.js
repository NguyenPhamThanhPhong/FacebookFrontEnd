import home from '../pages/home/home.js'
import login_register from '../pages/login-register/login-register.js'
import messages  from '../pages/messages/messages.js'
import profile from '../pages/profile/profile.js'


export const publicRoutes = [
    {path: "/", component: home},
    {path: "/login-register", component: login_register},
    {path: "/messages", component: messages},
    {path: "/profile", component: profile}
]