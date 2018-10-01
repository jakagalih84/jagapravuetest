import Api from '@/services/Api'

export default {
    searchUser (param) {
        return Api().get('users/' + param.username);
    },
}