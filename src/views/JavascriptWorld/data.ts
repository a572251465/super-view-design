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
    },
    {
      address: 'https://mp.weixin.qq.com/s/AvMvgtcmzkQtYZ2M4GvLww',
      isImportant: true
    }
  ]
}

const addressData2: IAddressDetail = {
  title: 'JavaScript深入系列',
  grade: 5,
  children: [
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/hdnl6n',
      notes: '个人文章',
      desc: 'JavaScript深入系列之原型到原型链系列',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/xg42ba',
      notes: '个人文章',
      desc: 'JavaScript深入系列之分析变量提升',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/sw838u',
      notes: '个人文章',
      desc: 'JavaScript深入系列之执行上下文',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/imx66t',
      notes: '个人文章',
      desc: 'JavaScript深入系列之变量对象',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/aagab4',
      notes: '个人文章',
      desc: 'JavaScript深入系列之词法作用域和动态作用域',
      isImportant: true
    }
  ]
}

export { addressData, addressData1, addressData2 }
