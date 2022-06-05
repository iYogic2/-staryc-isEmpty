 function isEmpty(param, regType = 'commonReg' ){
   // 'fullReg' 全量匹配模式时，字符串形式的'null'和'undefined'也算是空
   if( modeType && modeType === 'fullReg'){
      return (param??'') === ''|| param==='null' || param === "undefined" ? true : false
   }else{
      // 'commonReg' 默认，常规匹配模式，字符串形式的'null'和'undefined'不算是空
      return (param??'') === '' ? true : false
   } 
 }


 export default isEmpty