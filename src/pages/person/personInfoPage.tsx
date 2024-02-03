import routes from '@/routeConfig'
import { Button, Picker, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import {
  AtActionSheet,
  AtActionSheetItem,
  AtInput,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader
} from 'taro-ui'
import 'taro-ui/dist/style/index.scss'

const userAttributes = {
  手动输入: {
    label: '昵称',
    initial: '用户9527',
    mode: 'input'
  },
  选择性别: {
    label: '性别',
    initial: '女',
    mode: 'selector',
    range: ['男', '女']
  },
  选择生日: {
    label: '出生日期',
    initial: '1999-01-01',
    mode: 'date'
  },
  选择学历: {
    label: '学历',
    initial: '本科',
    mode: 'selector',
    range: ['小学', '初中', '高中', '本科', '硕士', '博士']
  },
  选择居住地: {
    label: '现居地',
    initial: '北京市,北京市,东城区',
    mode: 'region'
  },
  选择身高: {
    label: '身高',
    initial: '165cm',
    mode: 'selector',
    range: Array.from({ length: 81 }, (v, k) => `${140 + k}cm`)
  },
  选择体重: {
    label: '体重',
    initial: '50kg',
    mode: 'selector',
    range: Array.from({ length: 81 }, (v, k) => `${40 + k}kg`)
  },
  选择家乡: {
    label: '家乡',
    initial: '北京市,北京市,东城区',
    mode: 'region'
  },
  选择职业: {
    label: '职业',
    initial: '教师',
    mode: 'selector',
    range: [
      '教师',
      '会计',
      '护士',
      '销售员',
      '工程师',
      '程序员',
      '医生',
      '律师',
      '个体户',
      '创业者',
      '自由职业者',
      '预算分析师',
      '药剂师',
      '金融顾问',
      '建筑师',
      '警察',
      '社工',
      '厨师',
      '牙医',
      '记者',
      '消防员',
      '电工',
      '邮递员',
      '心理咨询师',
      '画家',
      '经理',
      '投资者',
      '设计师',
      '出租车司机',
      '在校学生',
      '其它'
    ]
  },
  年收入: {
    label: '年收入',
    initial: '5-15W',
    mode: 'selector',
    range: ['5-15W', '15-30W', '30-50W', '50-100W', '100W以上']
  },
  婚姻状况: {
    label: '婚姻状况',
    initial: '未婚',
    mode: 'selector',
    range: ['未婚', '离异无孩', '离异带孩', '离异不带孩', '丧偶']
  }
  //...更多的属性
}

// 默认属性
const initialAttributes = Object.fromEntries(Object.entries(userAttributes).map(([key, value]) => [key, value.initial]))

// 默认弹窗状态
const initialOpenStates = Object.fromEntries(Object.keys(userAttributes).map((key) => [key, false]))

// 根据日期返回对应的星座
function getStarSign(dateString: string) {
  const date = new Date(dateString)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const signs = ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯']
  const days = [20, 19, 21, 21, 21, 22, 23, 23, 23, 24, 23, 22]
  return signs[month - (day < days[month - 1] ? 1 : 0)]
}

const PersonInfoPage = () => {
  const [attributes, setAttributes] = useState(initialAttributes)
  const [openStates, setOpenStates] = useState(initialOpenStates)
  const toPersonAva = () => {
    Taro.redirectTo({
      // url: '/pages/person/personAvaPage'
      url: `/${routes.personAva}`
    })
  }

  const handleAttributeChange = (attribute) => (e) => {
    let value
    if (userAttributes[attribute].mode === 'region') {
      value = e.detail.value.join(',')
    } else {
      value =
        userAttributes[attribute].mode !== 'date' && userAttributes[attribute].range
          ? userAttributes[attribute].range[e.detail.value]
          : e.detail.value
      if (attribute === '选择生日') console.log(`你的星座是${getStarSign(value)}`)
    }
    setAttributes((prev) => ({
      ...prev,
      [attribute]: value
    }))
    setOpenStates((prev) => ({
      ...prev,
      [attribute]: false
    }))
  }

  const handleOpenChange = (attribute) => () => {
    setOpenStates((prev) => ({
      ...prev,
      [attribute]: !prev[attribute]
    }))
  }
  const handleInputChange = (value) => {
    setAttributes((prev) => ({
      ...prev,
      手动输入: value
    }))
  }

  return (
    <div className="px-4">
      <div className="pt-6 pb-4">
        <div className="text-2xl font-medium text-center text-gray-800 mt-2">个人信息页</div>
        <div className="text-sm text-center text-gray-600 mt-2">完善三步走可认证他人</div>
        <div className="text-xs text-center text-gray-500 mt-1">一勾APP是一个严谨、全面的交友平台，请认真填写资料</div>
      </div>
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="bg-blue-600 text-white py-1 px-4 rounded-full text-sm link-effect">
            基本资料
          </a>
          <a href="#" className="bg-purple-300 text-white py-1 px-4 rounded-full text-sm link-effect">
            头像照片
          </a>
          <button className="bg-blue-600 text-white py-1 px-4 rounded-full text-sm">三重认证</button>
        </div>
        <div className="mt-4">
          <View>
            {Object.keys(userAttributes).map((attribute, i) => (
              <View className="flex justify-between items-center py-2 border-b border-gray-200" key={i}>
                <View className="text-gray-800">{userAttributes[attribute].label}</View>
                <View className="text-gray-500" onClick={handleOpenChange(attribute)}>
                  {attributes[attribute]}
                </View>
                {userAttributes[attribute].mode === 'input' ? (
                  <AtModal isOpened={openStates[attribute]} onClose={handleOpenChange(attribute)}>
                    <AtModalHeader>请输入</AtModalHeader>
                    <AtModalContent>
                      <AtInput
                        title="输入"
                        name="value"
                        type="text"
                        value={attributes[attribute]}
                        onChange={handleInputChange}
                      />
                    </AtModalContent>
                    <AtModalAction>
                      <Button onClick={handleOpenChange(attribute)}>确定</Button>
                    </AtModalAction>
                  </AtModal>
                ) : (
                  <AtActionSheet isOpened={openStates[attribute]} onClose={handleOpenChange(attribute)}>
                    <AtActionSheetItem>
                      <Picker
                        mode={userAttributes[attribute].mode}
                        range={userAttributes[attribute].range}
                        value={attributes[attribute]}
                        onChange={handleAttributeChange(attribute)}>
                        <View className="picker">当前选择：{attributes[attribute] || '未选择'}</View>
                      </Picker>
                    </AtActionSheetItem>
                  </AtActionSheet>
                )}
              </View>
            ))}
          </View>
        </div>
        <button className="bg-blue-600 text-white rounded-full py-3 mt-6 w-full" onClick={toPersonAva}>
          下一步
        </button>
      </div>
    </div>
  )
}

export default PersonInfoPage
