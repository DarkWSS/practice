import {alertMsg} from '../js/dynamicComponents'

export let checkMobile = (value) => {
  if (!value) {
    alertMsg('手机号码不可为空', 2)
  } else {
    const mobileReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
    if (!mobileReg.test(value)) {
      alertMsg('手机号码格式错误', 2)
    }
  }
  return value
}
