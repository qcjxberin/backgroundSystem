<template>
    <div class='wrapperMenu'>
        <h2 class='title'>后台管理系统</h2>
        <Menu theme="light" class='sideBarMenu' accordion @on-select='setActive' :active-name="actives">
            <template v-if='routesList' v-for='(item, index) in routesList'>
                <Submenu :name="index" class='sideBarSubmenu' :key='index' @click=''>
                    <template slot="title" class='sidebarTitle' :title='item.content'>
                        <i class="iconfont">{{item.iconfont}}</i>
                        {{item.content}}
                    </template>
                    <template v-if='item.child' v-for='(sitem, sindex) in item.child'>
                        <Menu-item :key='index + "" + sindex' :name="sitem.url">
                            {{sitem.content}}
                        </Menu-item>
                    </template>
                </Submenu>
            </template>
        </Menu>
    </div>
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
  	routesList: Array,
    actives: String
  }
})
export default class SideBar extends Vue {
    protected setActive(e: any) {
        // this.actives = e;
        // this.$store.dispatch('setRouterList', {
        //   routerList: this.routesList.slice()
        // });
    }
  protected mounted() {
    const _this = this;
    console.log((_this as any).routesList);
    console.log((_this as any).actives);
  }
}
</script>
<style type='text/scss' lang='scss'>
@import url("../style/index.scss");

.wrapperMenu {
  height: 100%;
  width: 223px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  flex: 0 0 223px;
  background-color: #f3f3f3;
  .sideBarMenu {
    height: 100%;
    width: 240px;
    min-width: 240px;
    max-width: 240px;
    overflow-y: scroll;
    background-color: #f3f3f3;
    .ivu-menu-submenu-title {
      padding-left: 60px;
    }
    .ivu-menu-item {
      padding-left: 85px !important;
      font-size: 13px;
    }
  }
  .sideBarMenu:after {
    width: 0px;
  }
  .title {
    height: 45px;
    text-align: center;
    margin: 0 auto;
    line-height: 45px;
    font-size: 16px;
  }
}
</style>
