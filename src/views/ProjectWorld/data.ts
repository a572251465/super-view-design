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

export { addressData, addressData1, addressData2 }
