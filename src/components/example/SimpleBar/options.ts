import { EChartsOption } from 'echarts'
import * as echarts from 'echarts'

/**
 * @author lihh
 * @description 获取简单柱状图参数
 */
const getSimpleBarOptions = (): EChartsOption => {
  const xData = ['B1', 'B4', 'BMDT', 'HQ', 'CTO', '数据中心']
  const yData = [65, 38, 47, 72, 51, 60]
  const options: EChartsOption = {
    // -- 表示x轴信息
    xAxis: {
      type: 'category',
      data: xData,
      boundaryGap: true,
      axisLine: {
        show: true,
        // -- x轴字体颜色
        lineStyle: { color: '#274363' }
      },
      minorTick: {
        show: false
      },
      axisTick: {
        show: false
      },
      // -- 刻度标签
      axisLabel: {
        color: '#6b9ec4',
        show: true,
        interval: 0
      }
    },
    // -- 表示y轴信息
    yAxis: {
      type: 'value',
      name: '百分比',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#5a85a7',
        align: 'center'
      },
      axisLine: {
        show: true,
        lineStyle: { color: '#274363' }
      },
      splitLine: {
        lineStyle: {
          color: '#0e1d36'
        }
      },
      axisLabel: {
        show: true,
        color: '#6b9ec4'
      },
      // -- 设置行间距的留白 (可以理解为y轴增长比例)
      boundaryGap: ['30%', '30%'],
      min: 0,
      max: 100
    },
    // -- 系列信息
    series: [
      {
        type: 'bar',
        barGap: '10%',
        barWidth: '20%',
        barCategoryGap: '10%',

        // -- 柱状图标题
        label: {
          // -- 开始显示
          show: true,
          // -- 显示位置
          position: 'top',
          // -- 字体大小
          fontSize: 13,
          distance: 2,
          // -- 显示颜色
          color: '#34DCFF',
          // -- 显示格式
          formatter: '{c}%'
        },
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: '#019ed7'
            },
            {
              offset: 0.2,
              color: '#019bd5'
            },
            {
              offset: 0.4,
              color: '#0579ae'
            },
            {
              offset: 0.6,
              color: '#035a8b'
            },
            {
              offset: 0.7,
              color: '#052e52'
            },
            {
              offset: 0.8,
              color: '#061a35'
            },
            {
              offset: 1,
              color: 'transparent'
            }
          ]),
          opacity: 0.8
        },
        data: yData
      }
    ]
  }
  return options
}

export default getSimpleBarOptions
