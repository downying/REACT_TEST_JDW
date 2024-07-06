import React, { useEffect, useState } from 'react'
import UpdateForm from '../components/board/UpdateForm'
import * as boards from '../apis/boards'
import { useNavigate } from 'react-router-dom'


const UpdateContainer = ({ no }) => {
  // state
  const navigate = useNavigate()
  const [board, setBoard] = useState({})

 const getBoard = async () => {
    const response = await boards.select(no)
    const data = await response.data  
    // 데이터 잘 넘어갔는지 확인
    console.log("data 수정", data)
    
    const board = data.board
    setBoard(board)
}

  // 게시글 수정 함수
  const onUpdate = async (no, title, writer, content) => {
    try {
      const response = await boards.update(no, title, writer, content) 
      const status = await response.status
      console.log(`게시글 수정 요청 결과 : ${status}`);
      
      // 게시글 수정 완료 알림
      alert("게시글 수정 완료!")

      // 게시글 목록으로 이동
      navigate("/boards")

    } catch (error) {

    }
  }

  // 게시글 삭제 함수
  const onDelete = async (no) => {
    const response = await boards.remove(no)
    const status = await response.status
    console.log(`게시글 삭제 요청 결과 : ${status}`);
    
    // 게시글 삭제 완료 알림
    alert("삭제 완료!")

    // 게시글 목록으로 이동
    navigate("/boards")
  }
 
  // hook
  useEffect(() => {
    getBoard()
  }, [])

  return (
    <>
      <UpdateForm no={no} board={board} onUpdate={onUpdate} onDelete={onDelete} />
    </>
  )
}

export default UpdateContainer