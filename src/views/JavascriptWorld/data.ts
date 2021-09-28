import { IAddressDetail } from '@/components/AddressDetail/types'

const addressData: IAddressDetail = {
  title: 'script标签的defer 以及async比较',
  grade: 5,
  children: [
    {
      address: 'https://www.yuque.com/tangxuefeng/ptkd32/meorhu',
      notes: '个人文章',
      isImportant: true
    }
  ]
}

const addressData1: IAddressDetail = {
  title: 'websocket重要文章',
  grade: 5,
  children: [
    {
      address: 'https://juejin.cn/post/6844903544978407431',
      isImportant: true
    },
    {
      address: 'https://www.ruanyifeng.com/blog/2017/05/websocket.html',
      isImportant: true
    }
  ]
}

export { addressData, addressData1 }
