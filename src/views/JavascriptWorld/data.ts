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
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/ldgbam',
      notes: '个人文章',
      desc: 'JavaScript深入系列之数据密封，冻结',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/oo56r0',
      notes: '个人文章',
      desc: 'JavaScript深入系列之call, apply, bind区分',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/fcakdc',
      notes: '个人文章',
      desc: 'JavaScript深入系列之浏览器的存储方式',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/fpyl1z',
      notes: '个人文章',
      desc: 'JavaScript深入系列之async实现原理',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/rk8n68',
      notes: '个人文章',
      desc: 'JavaScript深入系列之普通函数以及生成器函数',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/ogrs6x',
      notes: '个人文章',
      desc: 'JavaScript深入系列之dom事件机制',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/gs4zr4',
      notes: '个人文章',
      desc: 'JavaScript深入系列之深度解析XmlHttpRequest和fetch用法',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/ggy4ak',
      notes: '个人文章',
      desc: 'JavaScript深入系列之深度探索typeof以及instanceof',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/tis0d6',
      notes: '个人文章',
      desc: 'JavaScript深入系列之栈空间以及堆空间',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/ae10d4',
      notes: '个人文章',
      desc: 'JavaScript深入系列之this各种指向',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/cbvhr0',
      notes: '个人文章',
      desc: 'JavaScript深入系列之闭包',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/tgrm96',
      notes: '个人文章',
      desc: 'JavaScript深入系列之模块加载规范',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/wlkq8m',
      notes: '个人文章',
      desc: 'JavaScript深入系列之调用栈',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/gmg46y',
      notes: '个人文章',
      desc: 'JavaScrip深入系列之箭头函数以及普通函数',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/rwikzq',
      notes: '个人文章',
      desc: 'JavaScript深入系列之头疼的类型转换(下)',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/pvnnib',
      notes: '个人文章',
      desc: 'JavaScript深入系列之乱七八槽的类型判断',
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
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/nppoip',
      notes: '个人文章',
      desc: 'JavaScript深入系列之作用域链',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/cbhkb8',
      notes: '个人文章',
      desc: 'JavaScript深入系列之ECMAScript规范解读this',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/gok67a',
      notes: '个人文章',
      desc: 'JavaScript深入系列之垃圾回收机制',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/nizx7b/aagab4',
      notes: '个人文章',
      desc: 'JavaScript深入系列之词法作用域和动态作用域',
      isImportant: true
    },
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
    }
  ]
}

const addressData3: IAddressDetail = {
  title: 'JavaScript编程手写实现',
  grade: 5,
  children: [
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/bgqx7m/ikfggv',
      desc: '手写系列之a == 1 && a == 2 && a == 3',
      notes: '个人文章',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/bgqx7m/fifdc5',
      desc: '手写系列之数组扁平化',
      notes: '个人文章',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/bgqx7m/qpzu4e',
      desc: '手写系列之parse函数',
      notes: '个人文章',
      isImportant: true
    },
    {
      address: 'https://www.yuque.com/lihaohao-f0jle/bgqx7m/xgwyyr',
      desc: '手写系列之call实现原理',
      notes: '个人文章',
      isImportant: true
    }
  ]
}

export { addressData, addressData1, addressData2, addressData3 }
