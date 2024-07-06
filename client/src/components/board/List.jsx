import React from 'react'
import {Link} from 'react-router-dom'

const List = ({boardList}) => {
    // 내려받은 boardList 콘솔에서 확인
    console.log(boardList);

    return (
        <div className='container'>
            <h1>게시글 목록</h1>
            <Link to='/boards/insert'>글쓰기</Link>
            <table border={1} className='listTable'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일자</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 반복문으로 게시글 목록 가져옴 */}
                    {boardList.map((board) => 
                    (
                        <tr key={board.no}>
                            <td>{board.no}</td>
                            <td>
                                <Link to={`/boards/read/${board.no}`}>{board.title}</Link>
                            </td>
                            <td>{board.writer}</td>
                            <td>{board.regDate}</td>
                        </tr>
                    )   
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List