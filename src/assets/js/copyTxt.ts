/**
 * @author lihh
 * @description 进行文本复制
 * @param dom input输入框的dom
 * @param value 复制的值
 * @returns Promise
 */
const copyTxt = (dom: HTMLInputElement, value: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        if (!Reflect.has(document, 'execCommand')) {
            reject(false)
        } else {
            dom.value = value
            dom.select()
            document.execCommand('Copy')
            resolve(true)
        }
    })
}

export {
    copyTxt
}