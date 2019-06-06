import Vue from 'vue'
import {alertMsg} from '../js/dynamicComponents'

Vue.filter('moneyCaseFold', (num) => { // 方法存在问题，废弃 ---存在精度问题，拾万亿级数字可用
  const numArr = num.toString().replace(new RegExp(',', 'g'), '').replace(/^\s+|\s+$/g, '').split('.') // 替换num中的“,”与空格将其拆分为数组
  let chineseUppercaseNumber = '零壹贰叁肆伍陆柒捌玖'
  let capitalized = []
  let yuan = '元整'
  let chineseMoney = ''
  let regZero = new RegExp('零')
  if (numArr.length > 0 && numArr.length < 3) {
    numArr[0] = numArr[0].split('').reverse()
    let index = 0
    let numberArr = []
    for (let i = 0; i < numArr[0].length; i++) {
      let reg = /^\d$/
      if (reg.test(numArr[0][i])) {
        let number = chineseUppercaseNumber[numArr[0][i]]
        switch (i % 4) {
          case 1:
            number += '拾'
            if (regZero.test(number)) {
              number = ''
            }
            numberArr.push(number)
            break
          case 2:
            number += '佰'
            if (regZero.test(number)) {
              number = ''
            }
            numberArr.push(number)
            break
          case 3:
            number += '仟'
            if (regZero.test(number)) {
              number = ''
            }
            numberArr.push(number)
            capitalized[index] = numberArr
            numberArr = []
            index++
            break
          default:
            if (regZero.test(number)) {
              number = ''
            }
            numberArr.push(number)
        }
        if (i > numArr[0].length - 2) {
          capitalized[index] = numberArr
        }
      } else {
        alertMsg('你输入的数字错误，包含错误字符')
        return
      }
    }
    for (let i = 0; i < capitalized.length; i++) {
      let emptyNum = 0
      capitalized[i] = capitalized[i].reverse()
      for (let j = 0; j < capitalized[i].length; j++) {
        if (capitalized[i][j].length > 0) {
          if (emptyNum > 0) {
            emptyNum = 0
            capitalized[i][j - 1] = '零'
          }
        } else {
          emptyNum++
        }
      }
      if (i > 0 && emptyNum > 3) {
        capitalized[i][0] = '零'
      }
      if (i > 0) {
        if (emptyNum < 4) {
          switch (i % 2) {
            case 1:
              capitalized[i].push('万')
              break
            default:
              capitalized[i].push('亿')
          }
        }
      }
    }
    let floatMoney = ''
    if (numArr.length > 1) {
      yuan = '元'
      let jiao = regZero.test(chineseUppercaseNumber[numArr[1][0]]) ? '零' : chineseUppercaseNumber[numArr[1][0]] + '角'
      let fen = regZero.test(chineseUppercaseNumber[numArr[1][0]]) ? '' : chineseUppercaseNumber[numArr[1][0]] + '分'
      if (fen.length < 1) {
        if (regZero.test(jiao)) {
          jiao = ''
          yuan = '元整'
        }
      }
      floatMoney = (jiao + fen)
    }
    chineseMoney = capitalized.reverse().join('').replace(new RegExp(',', 'g'), '') + yuan + floatMoney
  } else {
    alertMsg('你输入的数字错误，包含错误字符')
  }
  return chineseMoney
})
