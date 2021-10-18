import { IAddressDetail } from '@/components/AddressDetail/types'

const addressData: IAddressDetail = {
  title: 'SSO相关的登录机制',
  grade: 5,
  children: [
    {
      address: 'https://juejin.cn/post/6845166891393089544#heading-4',
      notes: '掘金上关于SSO相关的登录机制'
    }
  ]
}

const addressData1: IAddressDetail = {
  title: 'cookie的跨域共享',
  grade: 5,
  children: [
    {
      address: 'https://www.cnblogs.com/hujunzheng/p/5744755.html'
    }
  ]
}

const addressData2: IAddressDetail = {
  title: 'prettier + eslint 最佳实践',
  grade: 4,
  children: [
    {
      address: 'https://www.meteorlxy.cn/posts/2019/08/05/understand-and-use-prettier.html'
    },
    {
      address: 'https://juejin.cn/post/6915378605459521543'
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/fzhxzo/glgphl',
      notes: '个人文章',
      isImportant: true
    }
  ]
}

const addressData3: IAddressDetail = {
  title: '更加优雅的git message',
  grade: 4,
  children: [
    {
      address: 'https://juejin.cn/post/6844903606815064077'
    }
  ]
}

const addressData4: IAddressDetail = {
  title: 'ESModule系列演进',
  grade: 4,
  children: [
    {
      address: 'https://mp.weixin.qq.com/s/0AHmP70HnLUZeJWQlRtUKw'
    }
  ]
}

const addressData5: IAddressDetail = {
  title: '跨浏览器窗口通信',
  grade: 4,
  children: [
    {
      address: 'https://mp.weixin.qq.com/s/q9trh3-RjeMAO7rAUc2qJQ'
    },
    {
      address: 'https://github.com/a572251465/page-cor',
      isImportant: true,
      notes: '个人代码',
      desc: '练习demo'
    }
  ]
}

const addressData6: IAddressDetail = {
  title: '深入解析npm & yarn包管理机制',
  grade: 4,
  children: [
    {
      address: 'https://mp.weixin.qq.com/s/hRjBAIdtYs4f9IEu8s773A'
    }
  ]
}

const addressData7: IAddressDetail = {
  title: 'babel相关配置',
  grade: 5,
  children: [
    {
      address: 'https://zhuanlan.zhihu.com/p/129089156',
      desc: 'babel把es6送上通天塔'
    },
    {
      address: 'https://mp.weixin.qq.com/s/VJL1m3op567LogrC3fWh4w',
      desc: '一文彻底读懂babel'
    },
    {
      address: 'https://github.com/a572251465/babel-config-demo',
      isImportant: true,
      desc: '个人demo'
    }
  ]
}

const addressData8: IAddressDetail = {
  title: '原生的web component',
  grade: 4,
  children: [
    {
      address: 'https://mp.weixin.qq.com/s/o79-iOAJMKX_7a__gmSX2A'
    },
    {
      address: 'https://github.com/a572251465/web-component-demo',
      notes: '个人代码',
      isImportant: true,
      desc: '练习demo'
    }
  ]
}

const addressData9: IAddressDetail = {
  title: 'web worker性能优化体验',
  grade: 4,
  children: [
    {
      address: 'https://mp.weixin.qq.com/s/VQ5MGyLKCJdd888mRVcJ5w'
    }
  ]
}

export {
  addressData,
  addressData1,
  addressData2,
  addressData3,
  addressData4,
  addressData5,
  addressData6,
  addressData7,
  addressData8,
  addressData9
}
