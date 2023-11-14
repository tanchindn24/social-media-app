import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { URL_SERVER } from '../../helpers/UrlServer'
import Toast from 'react-native-toast-message'

const getData = async () => {
    const response: any = await AsyncStorage.getItem('user')
    return response
}
const register = async (userData: any) => {
    const response = await axios.post(URL_SERVER + '/sign-up', userData)
    if (response.data) {
        console.log(response.data.userData)
        await AsyncStorage.setItem('user', JSON.stringify(response.data))
        // window.location.href = '/sign-in'
    }
    return response.data
}
const login = async (userData: any) => {
    const response = await axios.post(URL_SERVER + '/sign-in', userData)
    if (response.data) {
        if (response.data.message === 'success' && response.data.userData.isAdmin === false) {
            Toast.show({
                type: 'success',
                text1: 'Notification',
                text2: 'Login Success',
            })
            await AsyncStorage.setItem('user', JSON.stringify(response.data))
        }
    }
    return response.data
}
const authentication = async (accessToken: any) => {
    const response = await axios.get(URL_SERVER + '/authorization', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    return !!(response.data && response.data.status === 200);
}
const logout = () => {
    AsyncStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
    authentication,
    getData,
}
export default authService
