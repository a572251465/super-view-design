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
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/brmrlg',
      notes: '个人文章',
      desc: 'JavaScript深入系列之头疼的类型转换(上)',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/dhracb',
      notes: '个人文章',
      desc: 'JavaScript深入系列之继承多种方式优缺点',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/gok67a',
      notes: '个人文章',
      desc: 'JavaScript深入系列之垃圾回收机制',
      isImportant: true
    }
  ]
}

const addressData3: IAddressDetail = {
  title: 'JavaScript编程手写',
  grade: 5,
  children: [
    {
      address: 'https://github.com/a572251465/javascript-program-learning',
      desc: '实现各种编程以及算法题。例如<重写instanceof>, <实现bind/call/apply>',
      isImportant: true
    }
  ]
}

export { addressData, addressData1, addressData2, addressData3 }
