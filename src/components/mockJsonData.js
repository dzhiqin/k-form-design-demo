export const jsonData = 
{
  "list": [
    {
      "columns": [
        {
          "list": [
            {
              "icon": "icon-zihao",
              "options": {
                "fontFamily": "",
                "hidden": false,
                "noFormItem": true,
                "color": "rgba(0, 0, 0, 0.9)",
                "textAlign": "center",
                "showRequiredMark": false,
                "fontSize": "15pt",
                "disabled": true
              },
              "label": "案件（案件风险）信息报送与处置",
              "type": "text",
              "key": "text_1691566377983"
            }
          ],
          "span": 24
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1691566371012"
    },
    {
      "options": {
        "orientation": "",
        "noFormItem": true,
        "disabled": true
      },
      "label": "信息报送",
      "type": "divider",
      "key": "divider_1692779477621"
    },
    {
      "columns": [
        {
          "list": [
            {
              "help": "",
              "icon": "icon-xiala",
              "options": {
                "clearable": false,
                "hidden": false,
                "showSearch": false,
                "width": "80%",
                "multiple": false,
                "options": [
                  {
                    "label": "案件",
                    "value": "案件"
                  },
                  {
                    "label": "案件风险事件",
                    "value": "案件风险"
                  }
                ],
                "disabled": false,
                "dynamic": false,
                "placeholder": "请选择",
                "dynamicKey": "",
                "showLabel": true
              },
              "model": "infoType",
              "rules": [
                {
                  "message": "必填项",
                  "required": true
                }
              ],
              "label": "信息类型",
              "type": "select",
              "key": "select_1691566402506"
            }
          ],
          "span": 12
        },
        {
          "list": [
            {
              "help": "",
              "options": {
                "clearable": false,
                "hidden": false,
                "showSearch": false,
                "width": "80%",
                "multiple": false,
                "options": [
                  {
                    "label": "业内案件",
                    "value": "业内案件"
                  },
                  {
                    "label": "业外案件",
                    "value": "业外案件"
                  }
                ],
                "disabled": false,
                "dynamic": false,
                "placeholder": "请选择",
                "dynamicKey": "",
                "showLabel": true
              },
              "model": "caseType",
              "rules": [
                {
                  "message": "必填项",
                  "required": true
                }
              ],
              "label": "案件分类",
              "type": "select",
              "key": "select_1691566403909"
            }
          ],
          "span": 12
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1691566304780"
    },
    {
      "columns": [
        {
          "list": [
            {
              "help": "",
              "icon": "icon-xiala",
              "options": {
                "clearable": false,
                "hidden": false,
                "showSearch": false,
                "width": "80%",
                "multiple": false,
                "options": [
                  {
                    "label": "信贷业务",
                    "value": "信贷业务"
                  },
                  {
                    "label": "柜面业务",
                    "value": "柜面业务"
                  },
                  {
                    "label": "信息安全/保密工作",
                    "value": "信息安全"
                  },
                  {
                    "label": "资金业务",
                    "value": "资金业务"
                  },
                  {
                    "label": "印章管理",
                    "value": "印章管理"
                  },
                  {
                    "label": "安全保卫",
                    "value": "安全保卫"
                  },
                  {
                    "label": "金库",
                    "value": "金库"
                  },
                  {
                    "label": "其他",
                    "value": "其他"
                  }
                ],
                "disabled": false,
                "dynamic": false,
                "placeholder": "请选择",
                "dynamicKey": "",
                "showLabel": true
              },
              "model": "businType",
              "rules": [
                {
                  "message": "必填项",
                  "required": true
                }
              ],
              "label": "涉及业务类型",
              "type": "select",
              "key": "select_1691566411376"
            }
          ],
          "span": 12
        },
        {
          "list": [
            {
              "help": "",
              "icon": "icon-write",
              "options": {
                "clearable": false,
                "hidden": false,
                "defaultValue": "",
                "width": "80%",
                "disabled": false,
                "placeholder": "请输入",
                "type": "text",
                "addonBefore": "",
                "addonAfter": "",
                "showLabel": true
              },
              "model": "instituName",
              "rules": [
                {
                  "message": "必填项",
                  "required": true
                }
              ],
              "label": "涉案机构名称",
              "type": "input",
              "key": "input_1691566409055"
            }
          ],
          "span": 12
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1691566307010"
    },
    {
      "columns": [
        {
          "list": [
            {
              "help": "",
              "icon": "icon-edit",
              "options": {
                "minRows": 4,
                "maxRows": 6,
                "clearable": false,
                "hidden": false,
                "defaultValue": "",
                "width": "100%",
                "disabled": true,
                "placeholder": "请输入",
                "showLabel": true
              },
              "model": "basicInfo",
              "rules": [
                {
                  "message": "必填项",
                  "required": true
                }
              ],
              "label": "案件（案件风险事件）基本情况",
              "type": "textarea",
              "key": "textarea_1691566436976"
            },
            {
              "columns": [
                {
                  "list": [
                    {
                      "columns": [
                        {
                          "list": [
                            {
                              "help": "",
                              "icon": "icon-xiala",
                              "options": {
                                "clearable": false,
                                "hidden": false,
                                "showSearch": false,
                                "width": "100%",
                                "multiple": false,
                                "options": [
                                  {
                                    "label": "下拉框1",
                                    "value": "1"
                                  }
                                ],
                                "disabled": true,
                                "dynamic": true,
                                "placeholder": "请选择",
                                "dynamicKey": "selName",
                                "showLabel": true
                              },
                              "model": "apply_name_sign",
                              "rules": [
                                {
                                  "message": "必填项",
                                  "required": true
                                }
                              ],
                              "label": "报送人",
                              "type": "select",
                              "key": "select_1691566535772"
                            }
                          ],
                          "span": 24
                        }
                      ],
                      "icon": "icon-zhage",
                      "options": {
                        "gutter": 0,
                        "noFormItem": true,
                        "disabled": true
                      },
                      "label": "栅格布局",
                      "type": "grid",
                      "key": "grid_1692686125714"
                    },
                    {
                      "help": "",
                      "icon": "icon-edit",
                      "options": {
                        "minRows": 4,
                        "maxRows": 6,
                        "clearable": false,
                        "hidden": true,
                        "defaultValue": "",
                        "width": "100%",
                        "disabled": false,
                        "placeholder": "请输入",
                        "showLabel": true
                      },
                      "model": "advice_comment_1692846041371",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "风险合规部管理岗意见",
                      "type": "textarea",
                      "key": "textarea_1692846041371"
                    }
                  ],
                  "span": 24
                }
              ],
              "icon": "icon-zhage",
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1692846027535"
            },
            {
              "columns": [
                {
                  "list": [
                    {
                      "help": "",
                      "icon": "icon-edit",
                      "options": {
                        "minRows": 4,
                        "maxRows": 6,
                        "clearable": false,
                        "hidden": true,
                        "defaultValue": "",
                        "width": "100%",
                        "disabled": true,
                        "placeholder": "请输入",
                        "showLabel": true
                      },
                      "model": "advice_comment_1692846106181",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "风险合规部负责人意见",
                      "type": "textarea",
                      "key": "textarea_1692846106181"
                    }
                  ],
                  "span": 24
                }
              ],
              "icon": "icon-zhage",
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1692846103899"
            },
            {
              "icon": "icon-fengexian",
              "options": {
                "orientation": "",
                "noFormItem": true,
                "disabled": true
              },
              "label": "案件调查移交",
              "type": "divider",
              "key": "divider_1692779515140"
            },
            {
              "columns": [
                {
                  "list": [
                    {
                      "help": "",
                      "icon": "icon-write",
                      "options": {
                        "clearable": false,
                        "hidden": true,
                        "defaultValue": "",
                        "width": "100%",
                        "disabled": true,
                        "placeholder": "请输入",
                        "type": "text",
                        "addonBefore": "",
                        "addonAfter": "",
                        "showLabel": true
                      },
                      "model": "input_1694162108299",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "移交部门",
                      "type": "input",
                      "key": "input_1694162108299"
                    }
                  ],
                  "span": 10
                },
                {
                  "list": [
                    
                  ],
                  "span": 2
                },
                {
                  "list": [
                    {
                      "help": "",
                      "icon": "icon-write",
                      "options": {
                        "clearable": false,
                        "hidden": true,
                        "defaultValue": "",
                        "width": "100%",
                        "disabled": true,
                        "placeholder": "请输入",
                        "type": "text",
                        "addonBefore": "",
                        "addonAfter": "",
                        "showLabel": true
                      },
                      "model": "input_1694162111866",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "接收部门",
                      "type": "input",
                      "key": "input_1694162111866"
                    }
                  ],
                  "span": 10
                }
              ],
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1693361561246"
            }
          ],
          "span": 24
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1691566309532"
    },
    {
      "columns": [
        {
          "list": [
            {
              "help": "",
              "icon": "icon-edit",
              "options": {
                "minRows": 4,
                "maxRows": 6,
                "clearable": false,
                "hidden": true,
                "defaultValue": "",
                "width": "100%",
                "disabled": true,
                "placeholder": "请输入",
                "showLabel": true
              },
              "model": "transferReason",
              "rules": [
                {
                  "message": "必填项",
                  "required": false
                }
              ],
              "label": "案件（风险事件）基本情况及移交原因",
              "type": "textarea",
              "key": "textarea_1691566364564"
            },
            {
              "columns": [
                {
                  "list": [
                    {
                      "icon": "icon-zu",
                      "options": {
                        "hidden": false,
                        "closable": false,
                        "description": "",
                        "banner": false,
                        "disabled": true,
                        "type": "info",
                        "showIcon": true,
                        "showLabel": false
                      },
                      "label": "应在知悉或应当知悉案件发生后，应于三个工作日内报送案件确认报告；在知悉或应当知悉案件风险事件后，应于五个工作日内报送案件风险事件报告",
                      "type": "alert",
                      "key": "alert_1693811760364"
                    },
                    {
                      "help": "",
                      "icon": "icon-upload",
                      "options": {
                        "headers": {
                          
                        },
                        "fileName": "file",
                        "hidden": true,
                        "data": "{}",
                        "defaultValue": "[]",
                        "multiple": false,
                        "downloadWay": "a",
                        "showLabel": true,
                        "width": "100%",
                        "limit": 3,
                        "action": "http://172.18.4.3:8080/jcgbprod/sys/common/upload2",
                        "disabled": true,
                        "drag": false,
                        "placeholder": "上传",
                        "dynamicFun": ""
                      },
                      "model": "reportText",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "案件确认报告/案件风险事件报告",
                      "type": "uploadFile",
                      "key": "uploadFile_1694479446435"
                    }
                  ],
                  "span": 24
                }
              ],
              "icon": "icon-zhage",
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1693811693701"
            }
          ],
          "span": 24
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1691566321127"
    },
    {
      "columns": [
        {
          "list": [
            {
              "help": "",
              "icon": "icon-edit",
              "options": {
                "minRows": 4,
                "maxRows": 6,
                "clearable": false,
                "hidden": true,
                "defaultValue": "",
                "width": "100%",
                "disabled": true,
                "placeholder": "请输入",
                "showLabel": true
              },
              "model": "advice_comment_1692846176019",
              "rules": [
                {
                  "message": "必填项",
                  "required": false
                }
              ],
              "label": "总行行长意见",
              "type": "textarea",
              "key": "textarea_1692846176019"
            }
          ],
          "span": 24
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1692846170371"
    },
    {
      "options": {
        "orientation": "",
        "noFormItem": true,
        "disabled": true
      },
      "label": "案件问责移交",
      "type": "divider",
      "key": "divider_1692779560604"
    },
    {
      "columns": [
        {
          "list": [
            {
              "columns": [
                {
                  "list": [
                    {
                      "help": "",
                      "icon": "icon-danxuan-cuxiantiao",
                      "options": {
                        "hidden": true,
                        "defaultValue": "",
                        "options": [
                          {
                            "label": "需要问责",
                            "value": "1"
                          },
                          {
                            "label": "无需问责",
                            "value": "0"
                          }
                        ],
                        "disabled": true,
                        "dynamic": false,
                        "dynamicKey": "",
                        "showLabel": true
                      },
                      "model": "accountability",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "是否需要问责",
                      "type": "radio",
                      "key": "radio_1692772872366"
                    }
                  ],
                  "span": 24
                }
              ],
              "icon": "icon-zhage",
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1692772841214"
            },
            {
              "columns": [
                {
                  "list": [
                    {
                      "help": "",
                      "icon": "icon-write",
                      "options": {
                        "clearable": false,
                        "hidden": true,
                        "defaultValue": "",
                        "width": "100%",
                        "disabled": true,
                        "placeholder": "请输入",
                        "type": "text",
                        "addonBefore": "",
                        "addonAfter": "",
                        "showLabel": true
                      },
                      "model": "input_1694162061143",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "移交部门",
                      "type": "input",
                      "key": "input_1694162061143"
                    }
                  ],
                  "span": 10
                },
                {
                  "list": [
                    
                  ],
                  "span": 2
                },
                {
                  "list": [
                    {
                      "help": "",
                      "icon": "icon-write",
                      "options": {
                        "clearable": false,
                        "hidden": true,
                        "defaultValue": "",
                        "width": "100%",
                        "disabled": true,
                        "placeholder": "请输入",
                        "type": "text",
                        "addonBefore": "",
                        "addonAfter": "",
                        "showLabel": true
                      },
                      "model": "input_1694162093978",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "接收部门",
                      "type": "input",
                      "key": "input_1694162093978"
                    }
                  ],
                  "span": 10
                }
              ],
              "icon": "icon-zhage",
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1693364488432"
            },
            {
              "help": "",
              "options": {
                "minRows": 4,
                "maxRows": 6,
                "clearable": false,
                "hidden": true,
                "defaultValue": "",
                "width": "100%",
                "disabled": true,
                "placeholder": "请输入",
                "showLabel": true
              },
              "model": "identiResult",
              "rules": [
                {
                  "message": "必填项",
                  "required": false
                }
              ],
              "label": "主要违规问题及初步责任认定结果",
              "type": "textarea",
              "key": "textarea_1691566366508"
            },
            {
              "columns": [
                {
                  "list": [
                    {
                      "icon": "icon-zu",
                      "options": {
                        "hidden": false,
                        "closable": false,
                        "description": "",
                        "banner": false,
                        "disabled": true,
                        "type": "info",
                        "showIcon": true,
                        "showLabel": false
                      },
                      "label": "一般应于移交日起三个月内完成调查，于案件确认后四个月内完成案件调查工作",
                      "type": "alert",
                      "key": "alert_1693811913213"
                    },
                    {
                      "help": "",
                      "icon": "icon-upload",
                      "options": {
                        "headers": {
                          
                        },
                        "fileName": "file",
                        "hidden": true,
                        "data": "{}",
                        "defaultValue": "[]",
                        "multiple": false,
                        "downloadWay": "a",
                        "showLabel": true,
                        "width": "100%",
                        "limit": 3,
                        "action": "http://172.18.4.3:8080/jcgbprod/sys/common/upload2",
                        "disabled": true,
                        "drag": false,
                        "placeholder": "上传",
                        "dynamicFun": ""
                      },
                      "model": "uploadFile_1694479509499",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "案件调查报告/案件风险事件调查报告",
                      "type": "uploadFile",
                      "key": "uploadFile_1694479509499"
                    }
                  ],
                  "span": 24
                }
              ],
              "icon": "icon-zhage",
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1693811877157"
            }
          ],
          "span": 24
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1691566336995"
    },
    {
      "columns": [
        {
          "list": [
            {
              "columns": [
                {
                  "list": [
                    {
                      "help": "",
                      "icon": "icon-edit",
                      "options": {
                        "minRows": 4,
                        "maxRows": 6,
                        "clearable": false,
                        "hidden": true,
                        "defaultValue": "",
                        "width": "100%",
                        "disabled": true,
                        "placeholder": "请输入",
                        "showLabel": true
                      },
                      "model": "advice_comment_1692846238099",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "监事长意见",
                      "type": "textarea",
                      "key": "textarea_1692846238099"
                    }
                  ],
                  "span": 24
                }
              ],
              "icon": "icon-zhage",
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1692846231187"
            }
          ],
          "span": 24
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1692602157143"
    },
    {
      "options": {
        "orientation": "",
        "noFormItem": true,
        "disabled": true
      },
      "label": "案件问责与整改跟踪",
      "type": "divider",
      "key": "divider_1694479283383"
    },
    {
      "columns": [
        {
          "list": [
            {
              "icon": "icon-zu",
              "options": {
                "hidden": false,
                "closable": false,
                "description": "",
                "banner": false,
                "disabled": true,
                "type": "info",
                "showIcon": true,
                "showLabel": false
              },
              "label": "案件问责方案应经属地银保监派出机构和省联社同意后再上传；内部问责应在首次报送案件确认报告之日起七个月内完成；案件风险事件最终认定不属案件的，按内部问责办法及流程进行问责。",
              "type": "alert",
              "key": "alert_1693389649900"
            },
            {
              "help": "",
              "icon": "icon-upload",
              "options": {
                "headers": {
                  
                },
                "fileName": "file",
                "hidden": true,
                "data": "{}",
                "defaultValue": "[]",
                "multiple": false,
                "downloadWay": "a",
                "showLabel": true,
                "width": "100%",
                "limit": 3,
                "action": "http://172.18.4.3:8080/jcgbprod/sys/common/upload2",
                "disabled": true,
                "drag": false,
                "placeholder": "上传",
                "dynamicFun": ""
              },
              "model": "accountProgram",
              "rules": [
                {
                  "message": "必填项",
                  "required": false
                }
              ],
              "label": "问责方案，问责通报",
              "type": "uploadFile",
              "key": "uploadFile_1692602178567"
            }
          ],
          "span": 24
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1694479337210"
    },
    {
      "options": {
        "orientation": "",
        "noFormItem": true,
        "disabled": true
      },
      "label": "案件审结",
      "type": "divider",
      "key": "divider_1692779635888"
    },
    {
      "columns": [
        {
          "list": [
            {
              "columns": [
                {
                  "list": [
                    {
                      "icon": "icon-zu",
                      "options": {
                        "hidden": false,
                        "closable": false,
                        "description": "",
                        "banner": false,
                        "disabled": true,
                        "type": "info",
                        "showIcon": true,
                        "showLabel": false
                      },
                      "label": "应于案件确认后八个月内向监管报送案件审结报告",
                      "type": "alert",
                      "key": "alert_1693389723671"
                    },
                    {
                      "help": "",
                      "icon": "icon-upload",
                      "options": {
                        "headers": {
                          
                        },
                        "fileName": "file",
                        "hidden": true,
                        "data": "{}",
                        "defaultValue": "[]",
                        "multiple": false,
                        "downloadWay": "a",
                        "showLabel": true,
                        "width": "100%",
                        "limit": 3,
                        "action": "http://172.18.4.3:8080/jcgbprod/sys/common/upload2",
                        "disabled": true,
                        "drag": false,
                        "placeholder": "上传",
                        "dynamicFun": ""
                      },
                      "model": "closingReportUpload",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "审结报告",
                      "type": "uploadFile",
                      "key": "uploadFile_1692581343046"
                    }
                  ],
                  "span": 24
                }
              ],
              "icon": "icon-zhage",
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1692581324895"
            },
            {
              "columns": [
                {
                  "list": [
                    {
                      "help": "",
                      "icon": "icon-xiala",
                      "options": {
                        "clearable": false,
                        "hidden": true,
                        "showSearch": false,
                        "width": "100%",
                        "multiple": false,
                        "options": [
                          {
                            "label": "案件审结",
                            "value": "案件审结"
                          },
                          {
                            "label": "问责台账",
                            "value": "问责台账"
                          }
                        ],
                        "disabled": true,
                        "dynamic": false,
                        "placeholder": "请选择",
                        "dynamicKey": "",
                        "showLabel": false
                      },
                      "model": "closingReport",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "审结报告（案件要素）",
                      "type": "select",
                      "key": "select_1692240375647"
                    },
                    {
                      "help": "",
                      "icon": "icon-xiala",
                      "options": {
                        "clearable": false,
                        "hidden": true,
                        "showSearch": false,
                        "width": "100%",
                        "multiple": false,
                        "options": [
                          {
                            "label": "下拉框1",
                            "value": "1"
                          },
                          {
                            "label": "下拉框2",
                            "value": "2"
                          }
                        ],
                        "disabled": true,
                        "dynamic": false,
                        "placeholder": "请选择",
                        "dynamicKey": "",
                        "showLabel": false
                      },
                      "model": "ledger",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "整改问责台账",
                      "type": "select",
                      "key": "select_1695630072244"
                    },
                    {
                      "help": "",
                      "icon": "icon-write",
                      "options": {
                        "clearable": false,
                        "hidden": true,
                        "defaultValue": "",
                        "width": "100%",
                        "disabled": true,
                        "placeholder": "请输入",
                        "type": "text",
                        "addonBefore": "",
                        "addonAfter": "",
                        "showLabel": true
                      },
                      "model": "advice_people",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "建议人",
                      "type": "input",
                      "key": "input_1699954362988"
                    },
                    {
                      "help": "",
                      "icon": "icon-write",
                      "options": {
                        "clearable": false,
                        "hidden": true,
                        "defaultValue": "",
                        "width": "100%",
                        "disabled": true,
                        "placeholder": "请输入",
                        "type": "text",
                        "addonBefore": "",
                        "addonAfter": "",
                        "showLabel": true
                      },
                      "model": "advice_time",
                      "rules": [
                        {
                          "message": "必填项",
                          "required": false
                        }
                      ],
                      "label": "建议时间",
                      "type": "input",
                      "key": "input_1699954408803"
                    }
                  ],
                  "span": 24
                }
              ],
              "icon": "icon-zhage",
              "options": {
                "gutter": 0,
                "noFormItem": true,
                "disabled": true
              },
              "label": "栅格布局",
              "type": "grid",
              "key": "grid_1691981590931"
            }
          ],
          "span": 24
        }
      ],
      "options": {
        "gutter": 0,
        "noFormItem": true,
        "disabled": true
      },
      "label": "栅格布局",
      "type": "grid",
      "key": "grid_1691566338783"
    }
  ],
  "config": {
    "layout": "vertical",
    "customStyle": "",
    "wrapperCol": {
      "xl": 17,
      "md": 17,
      "sm": 17,
      "xs": 17,
      "lg": 17,
      "xxl": 17
    },
    "labelLayout": "Grid",
    "hideRequiredMark": false,
    "labelWidth": 129,
    "labelCol": {
      "xl": 7,
      "md": 7,
      "sm": 7,
      "xs": 7,
      "lg": 7,
      "xxl": 7
    }
  }
}
export const jsonData2 = {
  "list":[{"type":"time","label":"时间选择框","options":{"width":"100%","defaultValue":"","disabled":false,"showLabel":true,"hidden":false,"clearable":false,"placeholder":"请选择","format":"HH:mm:ss"},"model":"time_1701920776461","key":"time_1701920776461","help":"","rules":[{"required":false,"message":"必填项"}]},{"type":"date","label":"日期选择框","options":{"width":"100%","defaultValue":"","rangeDefaultValue":[],"range":false,"showTime":false,"disabled":false,"showLabel":true,"hidden":false,"clearable":false,"placeholder":"请选择","rangePlaceholder":["开始时间","结束时间"],"format":"YYYY-MM-DD"},"model":"","key":"","help":"","rules":[{"required":false,"message":"必填项"}]}],"config":{"layout":"horizontal","labelCol":{"xs":4,"sm":4,"md":4,"lg":4,"xl":4,"xxl":4},"labelWidth":100,"labelLayout":"flex","wrapperCol":{"xs":18,"sm":18,"md":18,"lg":18,"xl":18,"xxl":18},"hideRequiredMark":false,"customStyle":""}
}