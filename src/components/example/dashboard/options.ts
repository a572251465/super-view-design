import { EChartsOption } from "echarts";

/**
 * @author lihh
 * @description 获取图形参数
 */
const getOptions = (colors: [number, string][]): EChartsOption => {
    const options: EChartsOption = {
        series: [
            // 外圈渐变
            {
                // -- 类型
                type: 'gauge',
                // -- 起始角度
                startAngle: 180,
                radius: '100%',
                // -- 结束角度
                endAngle: 0,
                // -- 表示线的相关操作
                axisLine: {
                    // -- 设置线不显示
                    show: false,
                    // -- 线样式
                    lineStyle: {
                        width: -7,
                        opacity: 0,
                        color: colors
                    }
                },
                title: {show: false},
                detail: {show: false},
                splitLine: {show: false},
                axisTick: {
                    show: true,
                    // -- 刻度长度
                    length: 16,
                    distance: 15,
                    lineStyle: {
                        // -- 刻度颜色 跟线的样式保持一致
                        color: 'auto',
                        // -- 刻度宽度
                        width: 2
                    }
                },
                axisLabel: {show: false},
                pointer: {show: false},
                itemStyle: {
                    color: 'red'
                },
                data: [
                    {
                        value: 180,
                        name: 'test gauge'
                    }
                ]
            },
            // -- 内圈分割线部分
            {
                type: 'gauge',
                radius: '83%',
                center: ['50%', '50%'],
                endAngle: 0,
                startAngle: 180,
                splitNumber: 0,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: [[1, '#112033']]
                    }
                },
                splitLine: {show: false},
                axisLabel: {show: false},
                axisTick: {show: false},
                pointer: {show: false}
            }
        ]
    }
    return options
}

export {
    getOptions
}