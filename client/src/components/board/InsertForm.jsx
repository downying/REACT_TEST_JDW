import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const InsertForm = ({ onInsert }) => {
  const [title, setTitle] = useState('') 
  const [writer, setWriter] = useState('') 
  const [content, setContent] = useState('') 

    // 게시글 제목이 바뀔 때 호출되는 함수
    const handleChangeTitle = (e) => {
      setTitle(e.target.value)
    }

    // 게시글 작성자가 바뀔 때 호출되는 함수
    const handleChangeWriter = (e) => {
        setWriter(e.target.value)
    }

    // 게시글 내용이 바뀔 때 호출되는 함수
    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    // 유효성 검사
    const onSubmit = () => {
        onInsert(title, writer, content)
    }

    return (
        <div className='container'>
            <h1 className='title'>게시글 등록</h1>
            <table>
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input type='text' value={title} onChange={handleChangeTitle}/>
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input type="text" value={writer} onChange={handleChangeWriter}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>내용</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <textarea cols="40" rows="10" value={content} onChange={handleChangeContent}></textarea>
                        </td>
                    </tr> 
                </tbody>
            </table>
            <div className='btn-box'>
                <Link to="/boards" className='btn'>목록</Link>
                <button className='btn' onClick={ onSubmit }>등록</button>
            </div>
        </div>
    )
}

export default InsertForm