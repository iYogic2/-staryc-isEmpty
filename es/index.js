function isEmpty(param) {

  // 'fullReg' 全量匹配模式时，字符串形式的'null'和'undefined'也算是空
  if (modeType && modeType === 'fullReg') {
    return (param !== null && param !== void 0 ? param : '') === '' || param === 'null' || param === "undefined" ? true : false;
  } else {
    // 'commonReg' 默认，常规匹配模式，字符串形式的'null'和'undefined'不算是空
    return (param !== null && param !== void 0 ? param : '') === '' ? true : false;
  }
}

export { isEmpty as default };
