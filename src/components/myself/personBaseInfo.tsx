
import Taro from '@tarojs/taro';
import React from 'react';

const PersonBaseInfo: React.FC = () => {
    const toPersonAva = () => {
        Taro.redirectTo({
            url: '/pages/myself/personBaseAvaPage'
        })
    }
  return (
    <div>
      <div className="px-4">
        <div className="pt-6 pb-4">
            <div className="flex justify-between items-center">
                <div className="text-gray-600">16:39</div>
                <div className="flex items-center">
                    <div className="mx-1 text-gray-600">信号</div>
                    <div className="mx-1 text-gray-600">Wi-Fi</div>
                    <div className="mx-1 text-gray-600">电池</div>
                </div>
            </div>
            <div className="text-2xl font-medium text-center text-gray-800 mt-2">个人信息页</div>
            <div className="text-sm text-center text-gray-600 mt-2">完善三步走可认证他人</div>
            <div className="text-xs text-center text-gray-500 mt-1">一勾APP是一个严谨、全面的交友平台，请认真填写资料</div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mt-4">
            <div className="flex justify-between items-center">
                <div className="text-blue-600">基本资料</div>
                <div className="text-gray-400">头像随时</div>
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">昵称</div>
                    <div className="text-gray-500">一狗用户6697 ></div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">性别</div>
                    <div className="text-gray-500">女 ></div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">出生日期</div>
                    <div className="text-gray-500">1994/01/01 屏蔽显示 ></div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">学历</div>
                    <div className="text-gray-500">本科 ></div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">职业地</div>
                    <div className="text-gray-500">北京 ></div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">身高</div>
                    <div className="text-gray-500">160cm ></div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">体重</div>
                    <div className="text-gray-500">45kg ></div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">家乡</div>
                    <div className="text-gray-500">北京 ></div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">职业</div>
                    <div className="text-gray-500">产品经理 ></div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="text-gray-800">年收入</div>
                    <div className="text-gray-500">5-15W ></div>
                </div>
                <div className="flex justify-between items-center py-2">
                    <div className="text-gray-800">婚姻状况</div>
                    <div className="text-gray-500">未婚 ></div>
                </div>
            </div>
        </div>

        <button className="bg-blue-600 text-white rounded-full py-3 mt-6 w-full"
        onClick={toPersonAva}
        >下一步</button>
    </div>
    </div>
  );
};

export default PersonBaseInfo;