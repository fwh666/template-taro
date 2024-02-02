// inputPopup.tsx

import React, { useState } from 'react';
import { AtModal, AtModalAction, AtModalContent, AtModalHeader } from 'taro-ui';

import { Text, View } from '@tarojs/components';

const InputPopup: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [clickedDivContent, setClickedDivContent] = useState('');

  const handleDivClick = () => {
    setModalIsOpened(true);
  };

  const handleModalConfirm = () => {
    // 保存输入的内容
    setClickedDivContent(inputValue);
    // 关闭弹出层
    setModalIsOpened(false);
  };

  const handleModalCancel = () => {
    // 取消操作，关闭弹出层
    setModalIsOpened(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <View>
      <View onClick={handleDivClick}>点击这里弹出输入窗口</View>
      <AtModal isOpened={modalIsOpened}>
        <AtModalHeader>请输入内容</AtModalHeader>
        <AtModalContent>
          <input
            type='text'
            placeholder='请输入内容'
            value={inputValue}
            onInput={handleInputChange}
          />
        </AtModalContent>
        <AtModalAction>
          <button onClick={handleModalCancel}>取消</ button>
          <button onClick={handleModalConfirm}>确定</button>
        </AtModalAction>
      </AtModal>
      <View>
        <Text>{clickedDivContent}</Text>
      </View>
    </View>
  );
};

export default InputPopup;