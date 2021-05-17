import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "api-key": "732aa444-1930-4c6c-b7eb-efb31b4dc8fd"
    }
})


export const authAPI = {

    login (email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then (response => response.data);
    },
    logout () {
        return instance.delete(`auth/login`).then (response => response.data);
    },
    getAuthUser () {
        return instance.get(`/auth/me`).then (response => response.data);
    },

    getAuthUserProfile (id) {
        return instance.get(`profile/${id}`).then (response => response.data);
    }

}

export const usersAPI = {

    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then (response => response.data);
    },
    setFollow (id) {
        return instance.post(`follow/${id}`).then (response => response.data);
    },
    setUnfollow (id) {
        return instance.delete(`follow/${id}`).then (response => response.data);
    }
}

export const profileAPI = {
    getProfile (userID) {
        return instance.get(`profile/${userID}`).then (response => response.data);
    },
    getStatus (userID) {
        return instance.get(`profile/status/${userID}`).then (response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status : status}).then (response => response.data);
    },
    updateAvatar(file) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        }).then (response => response.data);
    },
    updateProfile(newProfileData) {
        return instance.put(`profile/`, newProfileData).then (response => response.data);
    }
}

export const securityAPI = {
    getCaptcha () {
        return instance.get(`security/get-captcha-url/`).then (response => response.data);
    },
}
