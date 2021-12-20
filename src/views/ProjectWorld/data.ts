import { IAddressDetail } from '@/components/AddressDetail/types'

const addressData: IAddressDetail = {
  title: '实现简易版的webpack-flow',
  grade: 5,
  children: [
    {
      address: 'https://juejin.cn/post/7035125972739293221',
      notes: '个人文章',
      isImportant: true
    }
  ]
}

const addressData1: IAddressDetail = {
  title: '多种维度解析webpack的plugin实现',
  grade: 5,
  children: [
    {
      address: 'https://juejin.cn/post/7035619099392606239',
      notes: '个人文章',
      isImportant: true
    }
  ]
}

const addressData2: IAddressDetail = {
  title: '解密webpack的指纹“锁”',
  grade: 5,
  children: [
    {
      address: 'https://juejin.cn/post/7035829641440919588',
      notes: '个人文章',
      isImportant: true
    }
  ]
}

const addressData3: IAddressDetail = {
  title: '轻松理解webpack热更新原理 ',
  grade: 5,
  children: [
    {
      address: 'https://juejin.cn/post/6844904008432222215'
    }
  ]
}

const addressData4: IAddressDetail = {
  title: '构建优化篇~~DllPlugin到底为我们做了什么',
  grade: 5,
  children: [
    {
      address: 'https://juejin.cn/post/7043653757053173797'
    }
  ]
}

export { addressData, addressData1, addressData2, addressData3, addressData4 }
