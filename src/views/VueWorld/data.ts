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

const addressData2: IAddressDetail = {
  title: '全面拥抱vue源码',
  grade: 6,
  children: [
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/apohhm/gwu0k3',
      desc: 'vue2源码系列之响应式数据',
      notes: '个人文章',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/apohhm/ey5zpc',
      desc: 'vue3源码系列之响应式数据',
      notes: '个人文章',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/apohhm/untdpk',
      desc: 'vue2源码系列之依赖收集',
      notes: '个人文章',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/apohhm/xhwvzc',
      desc: 'vue3源码系列之依赖收集',
      notes: '个人文章',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/apohhm/ot7aoy',
      desc: 'vue3源码系列之初期化执行流程',
      notes: '个人文章',
      isImportant: true
    }
  ]
}

export { addressData1, addressData, addressData2 }
