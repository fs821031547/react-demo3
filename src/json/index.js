export const me = {
  // rows: [
  //   {
      userName: "join",
      trueName: "刘佳俊",
      sex: null,
      mobile: null,
      mobile1: null,
      tel: null,
      tel1: null,
      qq: null,
      weixin: null,
      email: null,
      fax: null,
      avatar: null,
      simDesc: null,
      wx_user_openid: "opliYuH05Go7fEswshwmJeq4NC_Q",
      nickname: ".L",
      headimgurl:
        "http://wx.qlogo.cn/mmopen/zW0eFiasBeVX78AHAbz0AHPTmqS8ichdAsr4bcH86d3bhtM0icx9DdyqBuQWcFRU5ERDLSHWQYa55A3k2a0HfSMgMGwJjnyickbib/0",
      deptName: "研发部门",
      ID: 10016,
      jobs: "财务, 销售, 线路OP, 机票OP, 签证OP, 酒店OP",
      cpyName: "同天下内部测试系统",
      merchant_name: "深圳同天下",
      merchant_full_name: "深圳同天下科技有限公司"
  //   }
  // ]
}

export const system = {
  total: 1,
  success: true,
  metaData: {
    fields: [
      { name: "siteName", type: "string" },
      { name: "ID", type: "int" },
      { name: "erpid", type: "int" },
      { name: "isDel", type: "bool" },
      { name: "con_PlanCodePre", type: "string" },
      { name: "con_EndTime", type: "int" },
      { name: "con_Other_SaleMaxMoney", type: "float" },
      { name: "con_Other_CpyMaxMoney", type: "float" },
      { name: "con_Other_iseditCur", type: "int" },
      { name: "con_Other_isWeek", type: "int" },
      { name: "con_Other_DiyCpyCode", type: "int" },
      { name: "con_Other_isCpyMaxMoney", type: "int" },
      { name: "con_Other_isSaleMaxMoney", type: "int" },
      { name: "con_Other_isBillPlus", type: "int" },
      { name: "con_Other_isBillMinus", type: "int" },
      { name: "planCodeRule", type: "string" },
      { name: "planCodeRule1", type: "int" },
      { name: "planCodeRule1Name", type: "string" },
      { name: "planCodeRule1Value", type: "string" },
      { name: "planCodeRule2", type: "int" },
      { name: "planCodeRule2Name", type: "string" },
      { name: "planCodeRule2Value", type: "string" },
      { name: "planCodeRule3", type: "int" },
      { name: "planCodeRule3Name", type: "string" },
      { name: "planCodeRule3Value", type: "string" },
      { name: "planCodeRule4", type: "int" },
      { name: "planCodeRule4Name", type: "string" },
      { name: "planCodeRule4Value", type: "string" },
      { name: "neg_bill_ok", type: "float" },
      { name: "con_fin_level", type: "int" },
      { name: "con_adultPrice1_show", type: "int" },
      { name: "con_adultPrice2_show", type: "int" },
      { name: "con_childPrice1_show", type: "int" },
      { name: "con_sysShow", type: "string" },
      { name: "con_sysShow_20", type: "string" }
    ]
  },
  rows: [
    {
      siteName: "同天下内部测试系统",
      ID: 1,
      erpid: 1,
      isDel: false,
      con_PlanCodePre: "TTX",
      con_EndTime: 1,
      con_Other_SaleMaxMoney: 1000.0,
      con_Other_CpyMaxMoney: 1000.0,
      con_Other_iseditCur: 0,
      con_Other_isWeek: 0,
      con_Other_DiyCpyCode: 0,
      con_Other_isCpyMaxMoney: 1,
      con_Other_isSaleMaxMoney: 1,
      con_Other_isBillPlus: 0,
      con_Other_isBillMinus: 1,
      planCodeRule:
        "{团号前缀}{市场划分代码[]}{-出团日期}{-线路代码}{指定销售}{-同日多团索引号:A[]}",
      planCodeRule1: 0,
      planCodeRule1Name: "",
      planCodeRule1Value: "",
      planCodeRule2: 0,
      planCodeRule2Name: "",
      planCodeRule2Value: "",
      planCodeRule3: 0,
      planCodeRule3Name: "",
      planCodeRule3Value: "",
      planCodeRule4: 0,
      planCodeRule4Name: "",
      planCodeRule4Value: "",
      neg_bill_ok: 5000.0,
      con_fin_level: 4,
      con_adultPrice1_show: 1,
      con_adultPrice2_show: 1,
      con_childPrice1_show: 1,
      con_sysShow: "1,1,0,0,0,0,0,0,0,0",
      con_sysShow_20: "0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0"
    }
  ],
  processedTime: 1
}
 
export const forbid = {
  "sale-list": { permit: true, text: "获取【销售排行榜】列表数据" },
  notice: { permit: true, text: "获取【公告】列表数据" },
  "profile/phone-book": { permit: true, text: "获取【通讯录】列表数据" },
  "line-plan": { permit: true, text: "获取【团期计划】列表数据" },
  order: { permit: true, text: "获取【我的订单管理】列表数据" },
  "order-all": { permit: true, text: "获取【所有订单管理】列表数据" },
  "33Y2YDNGWOOJ": { permit: true, text: "添加订单" },
  "createOrd-reserve": { permit: true, text: "添加订单【确定按钮】【预留】" },
  "createOrd-affirm": { permit: true, text: "添加订单【确定按钮】【确认】" },
  "341VL25QAJIY": { permit: true, text: "添加订单【填写积分提成】【区域】" },
  "341H7MG1QV9G": {
    permit: true,
    text: "添加订单【添加客户联系人】【下拉搜索】"
  },
  "order/from-edit-city": { permit: true, text: "操作【出发城市】确认修改" },
  "order/order-edit-type": { permit: true, text: "操作【订单类型】确认修改" },
  "order/order-edit-placeholder": {
    permit: true,
    text: "操作【修改占位】确认修改"
  },
  "order/order-edit-number": { permit: true, text: "操作【修改人数】确认修改" },
  "order/order-edit-cust-cpy": {
    permit: true,
    text: "操作【修改客户】确认修改"
  },
  "order/order-edit-order": {
    permit: true,
    text: "操作【修改订单备注】确认修改"
  },
  "order/order-edit-iorder": {
    permit: true,
    text: "操作【修改自我备注】确认修改"
  },
  "order/order-edit-sale": { permit: true, text: "操作【修改销售】确认修改" },
  "order/order-edit-zhuli": { permit: true, text: "操作【修改助理】确认修改" },
  "order/order-guarantee-submit": {
    permit: true,
    text: "操作【订单】担保确认 - 申请"
  },
  "order/order-confirm-submit": {
    permit: true,
    text: "操作【订单】确认单转取消 - 申请"
  },
  "order/order-confirm-reserved": {
    permit: true,
    text: "操作【订单】确认转预留 - 申请"
  },
  "order/order-affirm": { permit: true, text: "操作【订单】预留转确认" },
  "order/order-cancel": { permit: true, text: "操作【订单】预留单转取消" },
  "order/order-activate": { permit: true, text: "操作【订单】重新激活订单" },
  "order/order-bill-list": { permit: true, text: "获取【账单管理】列表数据" },
  "order/order-bill-add": { permit: true, text: "操作【账单管理】添加" },
  "order/order-bill-edit": { permit: true, text: "操作【账单管理】修改" },
  "order/order-bill-del": { permit: true, text: "操作【账单管理】删除" },
  "order/order-bill-check": { permit: true, text: "操作【账单管理】审核/弃申" },
  receipt: { permit: true, text: "获取【收款信息】列表数据" },
  "receipt/add": { permit: true, text: "操作【收款】添加" },
  "receipt/edit": { permit: true, text: "操作【收款】修改" },
  "receipt/submit-add-rec": {
    permit: true,
    text: "操作【收款】添加并提交财务"
  },
  "order/order-name-list": {
    permit: true,
    text: "获取【证件识别名单】数据列表"
  },
  "order/order-name-add": {
    permit: true,
    text: "添加/编辑【名单】- 证件识别名单"
  },
  "order/order-name-check-pass": {
    permit: true,
    text: "操作【名单】- 审核通过"
  },
  "order/order-name-check-cancel": {
    permit: true,
    text: "操作【名单】- 审核取消"
  },
  "order/confirmation-interface": {
    permit: true,
    text: "获取【存储确认书保存界面】数据"
  },
  "order/confirmation-template": { permit: true, text: "获取【确认书】数据" },
  "order/notices": { permit: true, text: "获取【出团通知书】数据" },
  attachment: { permit: true, text: "获取【附件】列表数据" },
  "attachment/add": { permit: true, text: "操作【附件】添加" },
  "attachment/edit": { permit: true, text: "操作【附件】修改" },
  "attachment/del": { permit: true, text: "操作【附件】删除" },
  "attachment/lock": { permit: true, text: "操作【附件】锁定" },
  "attachment/nolock": { permit: true, text: "操作【附件】解锁" },
  "cust-user/list": {
    permit: true,
    text: "获取【客户管理（联系人）】列表数据"
  },
  "cust-user/user-insert": {
    permit: true,
    text: "新建【客户管理（联系人）】确认按钮"
  },
  "cust-user/edit": {
    permit: true,
    text: "修改【客户管理（联系人）】确认按钮"
  },
  "cust-cpy/list": { permit: true, text: "获取【客户公司】列表数据" },
  "cust-cpy/cpy-insert": { permit: true, text: "新建【客户公司】 确认按钮" },
  "cust-cpy/edit": { permit: true, text: "修改【客户公司】 确认按钮" },
  "cust-user/get-cpy-notes": {
    permit: true,
    text: "获取【跟进记录】 列表数据"
  },
  "cust-user/get-cpy-notes-info": {
    permit: true,
    text: "获取【跟进记录详情】 详情数据"
  },
  "cust-user/add-cpy-notes": {
    permit: true,
    text: "新增【跟进记录】 确认按钮"
  },
  "cust-user/edit-cpy-notes": {
    permit: true,
    text: "修改【跟进记录】 确认按钮"
  },
  "bank-account": { permit: true, text: "获取【银行账户管理】列表数据" },
  "request-money/check-result": { permit: true, text: "执行【请款】审批按钮" },
  "me-receipt": { permit: true, text: "我要收款" },
  "me-payment": { permit: true, text: "我要交款" }
}
