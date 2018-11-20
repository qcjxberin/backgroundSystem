import Mock from 'mockjs'
import login from './login'
Mock.setup({
  timeout: '200-400' // 响应时间 200到400毫秒
})

/**
 * 设置响应模板
 * @param configs 模板
 */
function _mock (configs) {
  configs.forEach(config => {
    Mock.mock(RegExp(`${config.url}.*`), config.method, config.data)
  })
}
_mock(login)
