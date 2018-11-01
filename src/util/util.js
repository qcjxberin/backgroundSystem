/*
 * 转成小写
 * */
export const toLowerCase = (str) => {
    if (str !== '')
        return str.toLocaleLowerCase();
};
/*
 * 转成大写
 * */
export const toUpperCase = (str) => {
    if (str !== '')
        return str.toLocaleUpperCase();
};
/*
 * 存储localStorage
 * */
export const setStore = (name, content) => {
    if (!name || !content || !window.localStorage)
        return;
    if (typeof content !== 'string')
        content = JSON.stringify(content);
    window.localStorage.setItem(name, content);
};
/*
 * 获取localStorage
 * */
export const getStore = (name) => {
    if (!name || !window.localStorage)
        return;
    let value = window.localStorage.getItem(name);
    if (value !== null) {
        try {
            value = JSON.parse(value);
        }
        catch (e) {
            value = value;
        }
    }
    return value;
};
/*
 * 删除localStorage
 * */
export const removeStore = (name) => {
    if (!name || !window.localStorage)
        return;
    window.localStorage.removeItem(name);
};
/*
 * 清空localStorage
 * */
export const clearStore = () => {
    if (!window.localStorage)
        return;
    window.localStorage.clear();
};
/*
 * 存储sessionStorage
 * */
export const setSession = (name, content) => {
    if (!name || !content || !window.sessionStorage)
        return;
    if (typeof content !== 'string')
        content = JSON.stringify(content);
    window.sessionStorage.setItem(name, content);
};
/*
 * 获取sessionStorage
 * */
export const getSession = (name) => {
    if (!name || !window.sessionStorage)
        return;
    let value = window.sessionStorage.getItem(name);
    if (value !== null) {
        try {
            value = JSON.parse(value);
        }
        catch (e) {
            value = value;
        }
    }
    return value;
};
/*
 * 删除sessionStorage
 * */
export const removeSession = (name) => {
    if (!name || !window.sessionStorage)
        return;
    window.sessionStorage.removeItem(name);
};
/*
 * 清空sessionStorage
 * */
export const clearSession = () => {
    if (!window.sessionStorage)
        return;
    window.sessionStorage.clear();
};
/*
 * 保留两位小数
 * */
export const KeepTwoFloat = (num) => {
    const _num = Math.round(num * 100) / 100;
    const _arr = _num.toString().split('.');
    if (_arr.length === 1) {
        return _num.toString() + '.00';
    }
    if (_arr.length > 1) {
        if (_arr[1].length < 2) {
            return _num.toString() + '0';
        }
        return _num.toString();
    }
};
/*
 * 判断空值
 * */
export const isEmpty = (keys) => {
    if (typeof keys === 'string') {
        keys = keys.replace(/\"|&nbsp;|\\/g, '').replace(/(^\s*)|(\s*$)/g, '');
        if (keys === '' || keys === null || keys === 'null' || keys === 'undefined') {
            return true;
        }
        else {
            return false;
        }
    }
    else if (typeof keys === 'undefined') { // 未定义
        return true;
    }
    else if (typeof keys === 'number') {
        return false;
    }
    else if (typeof keys === 'boolean') {
        return false;
    }
    else if (typeof keys === 'object' && !Array.isArray(keys)) {
        if (JSON.stringify(keys) === '{}') {
            return true;
        }
        else if (keys === null) { // null
            return true;
        }
        else {
            return false;
        }
    }
    else if (keys instanceof Array && keys.length === 0) {
        return true;
    }
    else {
        return false;
    }
};
/*
 * 返回两位小数
 * */
export const getTwoFixedNum = (num) => {
    return Number(num).toFixed(2);
};
/*
 * 获取元素的样式值
 * */
export const getComStyle = (el, style) => {
    return parseInt(window.getComputedStyle(el, null)[style], 0);
};
/*
 * 计算dpr
 * */
export const getDeviceRatio = () => {
    //    const isAndroid = window.navigator.appVersion.match(/android/gi)
    const isIPhone = window.navigator.appVersion.match(/iphone/gi);
    const devicePixelRatio = window.devicePixelRatio;
    let dpr;
    if (isIPhone) {
        // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
        if (devicePixelRatio >= 3) {
            dpr = 3;
        }
        else if (devicePixelRatio >= 2) {
            dpr = 2;
        }
        else {
            dpr = 1;
        }
    }
    else {
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1;
    }
    return dpr;
};
/*
 * 事件处理函数
 * */
export const eventUtil = {
    addHandler(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        }
        else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        }
        else {
            element['on' + type] = handler;
        }
    },
    removeHandler(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        }
        else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        }
        else {
            element['on' + type] = null;
        }
    },
    getEvent(event) {
        return event ? event : window.event;
    },
    getType(event) {
        return event.type;
    },
    // 获取事件源
    getElement(event) {
        return event.target || event.srcElement;
    },
    // 阻止默认事件比如a链接跳转
    preventDefault(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            event.returnValue = false;
        }
    },
    // 阻止事件冒泡
    stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    }
};
//# sourceMappingURL=util.js.map