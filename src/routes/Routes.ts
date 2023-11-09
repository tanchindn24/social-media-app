import {TypeRouter} from "../types/Types";
import MainScreen from "../components/MainScreen/Component";
import LoginScreen from "../components/LoginScreen/Component";
import RegisterScreen from "../components/RegiserScreen/Component";
import ForgotPasswordScreen from "../components/ForgotPasswordScreen/Component";
import OTPVerification from "../components/OTPVerification/Component";
import CreatedNewPassword from "../components/ForgotPasswordScreen/CreateNewPassword/Component";
import PasswordChangeSuccess from "../components/ForgotPasswordScreen/CreateNewPassword/PasswordChangeSuccess";
import WelComeScreen from "../components/WelcomeScreen/Component";

export const Screens = {
    welcomeScreen: "welcome-screen",
    loginScreen: "login-screen",
    RegisterScreen: "register-screen",
    ForgotPasswordScreen: "forgot-password-screen",
    OTPVerification: "otp-verification-screen",
    CreatedNewPassword: "create-new-password-screen",
    PasswordChangeSuccess: "password-change-success-screen",
}

export const Routes = <TypeRouter[]>[
    {
        component: WelComeScreen,
        name: Screens.welcomeScreen,
        auth: true,
        options: {
            headerShown: false
        },
    },
    {
        component: LoginScreen,
        name: Screens.loginScreen,
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: RegisterScreen,
        name: 'register-screen',
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: ForgotPasswordScreen,
        name: 'forgot-password-screen',
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: OTPVerification,
        name: 'otp-verification-screen',
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: CreatedNewPassword,
        name: 'create-new-password-screen',
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: PasswordChangeSuccess,
        name: 'password-change-success-screen',
        auth: false,
        options: {
            headerShown: false
        }
    },
];
