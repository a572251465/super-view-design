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

export { addressData, addressData1, addressData2, addressData3 }
