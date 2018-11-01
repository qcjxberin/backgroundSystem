import Vue from 'vue'

function sex ( str: string ) {
    if (str === 'MALE') {
        return '男'
    } else if (str === 'FEMALE') {
        return '女'
    } else if (str === 'UNKNOW') {
        return '未知'
    }
}

Vue.filter('sex', sex)
