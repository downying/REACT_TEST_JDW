import React from 'react'
import * as boards from '../apis/boards'
import { useNavigate } from 'react-router-dom';
import InsertForm from '../components/board/InsertForm';

const InsertContainer = () => {
  const navigate = useNavigate();

  const onInsert = async (title, writer, content) => {
    try {
      const response = await boards.insert(title, writer, content);
      
      // 게시글 등록 완료 알림
      alert("게시글 등록 완료");

      // 게시글 목록으로 이동
      navigate("/boards")
    } catch (error) {
      console.log(error);
    }  
  }
  return (
    <>
      {/* 게시글 등록 - 컴포넌트에 내려줌*/}
      <InsertForm onInsert={onInsert}/>
    </>  
  )
}

export default InsertContainer