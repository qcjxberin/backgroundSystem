(( win: any, lib: any ) => {
    const doc: any = win.document
    const docEl: any = doc.documentElement
    const metaEl: any = doc.querySelector('meta[name="viewport"]')
    const flexibleEl: any = doc.querySelector('meta[name="flexible"]')
    let dpr: any = 0
    let scale: any = 0
    let tid: any
    const flexible: any = lib.flexible || (lib.flexible = {})
    if (metaEl) {
        // console.warn('将根据已有的meta标签来设置缩放比例')
        const match: any = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/)
        if (match) {
            scale = parseFloat(match[1])
            dpr = parseInt((1 / scale).toString(), 0)
        }
    } else if (flexibleEl) {
        const content: any = flexibleEl.getAttribute('content')
        if (content) {
            const initialDpr: any = content.match(/initial\-dpr=([\d\.]+)/)
            const maximumDpr: any = content.match(/maximum\-dpr=([\d\.]+)/)
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1])
                scale = parseFloat((1 / dpr).toFixed(2))
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1])
                scale = parseFloat((1 / dpr).toFixed(2))
            }
        }
    }
    
    if (!dpr && !scale) {
//        const isAndroid: any = win.navigator.appVersion.match(/android/gi)
        const isIPhone: any = win.navigator.appVersion.match(/iphone/gi)
        const devicePixelRatio: any = win.devicePixelRatio
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
                dpr = 2
            } else {
                dpr = 1
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1
        }
        scale = 1 / dpr
    }
    
    docEl.setAttribute('data-dpr', dpr)
    if (!metaEl) {
        const _metaEl: any = doc.createElement('meta')
        _metaEl.setAttribute('name', 'viewport')
        // tslint:disable-next-line
        _metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(_metaEl)
        } else {
            const wrap: any = doc.createElement('div')
            wrap.appendChild(_metaEl)
            doc.write(wrap.innerHTML)
        }
    }
    
    function refreshRem () {
        let width: any = docEl.getBoundingClientRect().width
        if (width / dpr > 540) {
            width = 540 * dpr
        }
        const rem = width / 10
        docEl.style.fontSize = rem + 'px'
        flexible.rem = win.rem = rem
    }
    
    win.addEventListener('resize', () => {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
    }, false)
    win.addEventListener('pageshow', ( e: any ) => {
        if (e.persisted) {
            clearTimeout(tid)
            tid = setTimeout(refreshRem, 300)
        }
    }, false)
    
    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px'
    } else {
        doc.addEventListener('DOMContentLoaded', ( e: any ) => {
            doc.body.style.fontSize = 12 * dpr + 'px'
        }, false)
    }
    refreshRem()
    flexible.dpr = win.dpr = dpr
    flexible.refreshRem = refreshRem
    flexible.rem2px = function ( d: any ) {
        let val: any = parseFloat(d) * this.rem
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px'
        }
        return val
    }
    flexible.px2rem = function ( d: any ) {
        let val: any = parseFloat(d) / this.rem
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem'
        }
        return val
    }
    
})((window as any), ((window as any).lib) || ((window as any).lib = {}))
