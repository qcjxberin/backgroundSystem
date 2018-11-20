// import api from '@/utils/api'

/**
 * 登录模拟数据
 * @type {*[]}
 */
let configs = [{
  url: 'login',
  method: 'post',
  data: {
    'code': 1000,
    'message': 'MOCK:: 登录成功',
    'data': {
      'auth': {
        'token': '75822928846e26f4ec90cb4749f74671',
        'expire': new Date().getTime()
      },
      'user': {
        'code': '00000000000000000000000000',
        'usr': '尉明叶',
        'mobile': '186124443223',
        'station_id': 5, // 岗位： 1 管理员 2 总监 3 大区经理 4 地区经理 5 销售代表 6 BD
        'station_name': '管理员',
        'district_id': '42', // 大区
        'status': 1,
        'user_id': 0
      }
    }
  }
}]

export default configs
