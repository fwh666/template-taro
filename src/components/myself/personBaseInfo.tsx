
import Taro from '@tarojs/taro';
import React, { useState } from 'react';

const PersonBaseInfo: React.FC = () => {
    const[nickName,setNickName]=useState<string>('');
    const toPersonAva = () => {
        savaData();
        Taro.redirectTo({
            url: '/pages/myself/personBaseAvaPage'
        })
    }
    const handleNickName = () => {
        Taro.showModal({
            title: '修改昵称',
            content: '修改昵称',
            confirmText: '确认',
            cancelText: '取消',
            showCancel: true,
        })
    }
    const savaData = () => {
        console.log(nickName);
    }
  return (
    <div>
      <div className="px-4">
        <div className="pt-6 pb-4">
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
                    {/* <div className="text-gray-500" onClick={handleNickName}>一狗用户6697</div> */}
                    <input className='text-gray-500' placeholder='用户9527' onChange={() => {setNickName}}/>
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