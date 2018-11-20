<template>
    <div class='login'>
        <Form ref="loginInfo" :model="dataInfo" :rules="rules">
            <FormItem>
                <h3 class="title">后台管理系统</h3>
            </FormItem>
            <FormItem prop="user">
                <Input type="text" v-model="dataInfo.username" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="dataInfo.password" placeholder="密码" autocomplete='off'>
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem class='loading'>
                <Button type="primary" @click="getLogin('loginInfo')" long>登 录</Button>
            </FormItem>
        </Form>
        <div class="copyright">2014-2018 © 北京好欣晴移动医疗科技有限公司</div>
    </div>
</template>
<script lang='ts'>
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import api from '@/util/api'
	import {eventUtil} from '@/util/util'

	@Component({})
	export default class Login extends Vue {
		protected dataInfo: any = {
			username: '',
			password: ''
		}
		protected rules: any = {
			username: [
				{required: true, message: '请输入正确用户名', trigger: 'blur'}
			],
			password: [
				{required: true, message: '请输入正确密码', trigger: 'blur'},
				{type: 'string', min: 6, message: '密码位数至少为6位', trigger: 'blur'}
			]
		}

		protected getLogin (name: string) {
			if (!name) return
			(this.$refs[name] as any).validate((valid: any) => {
				if (valid) {
					(api.login({
						mobile: this.dataInfo.username,
						password: this.dataInfo.password
					}) as any).then((respon: any) => {
						this.$store.dispatch('setToken', {
							token: respon.data.auth.token
						}).then(() => {
							this.$Message.success('登录成功')
							this.$router.push('/')
						})
					})
				}
			})
		}

		protected mounted () {
			const _this = this
			eventUtil.addHandler(document.body, 'keyup', (e: any) => {
				if ((e.keyCode || e.which || e.charCode) === 13) {
					_this.getLogin('loginInfo')
				}
			})
		}
	}
</script>
<style type='text/scss' lang='scss' scoped>
    @import url("../style/index.scss");

    .login {
        width: 100%;
        height: 100%;
        background-color: #2d3a4b;

        .title {
            font-size: 26px;
            font-weight: 400;
            color: #eee;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }

        .ivu-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 370px;
            padding: 35px 35px 15px 35px;
            margin: 120px auto;
        }

        .loading {
            text-align: right;
        }

        .copyright {
            text-align: center;
            margin: 0 auto;
            padding: 10px;
            color: #999;
            font-size: 11px;
            position: fixed;
            bottom: 0px;
            width: 100%;
        }
    }
</style>
