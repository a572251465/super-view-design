import { IAddressDetail } from '@/components/AddressDetail/types'

const addressData: IAddressDetail = {
  title: 'Vue Script Setup在线编译',
  grade: 5,
  children: [
    {
      address: 'https://sfc.vuejs.org/'
    }
  ]
}

const addressData1: IAddressDetail = {
  title: 'vue-cli4的全面配置',
  grade: 5,
  children: [
    {
      address: 'https://zhuanlan.zhihu.com/p/109952157'
    }
  ]
}

export { addressData1, addressData }
