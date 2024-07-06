import React, { useEffect, useState} from 'react'
import List from '../components/board/List'
import * as boards from '../apis/boards'
import '../components/board/css/boards.css'

const ListContainer = () => {
    // state
    const [boardList, setBoardList] = useState([])

    const getBoardList = async () => {
        const response = await boards.list()
        const data = await response.data
        setBoardList(data) 
    }

    // hook
    useEffect( () => {
        getBoardList()
    }, [])
    
    return (
        <>
            {/* 게시글 목록 - 컴포넌트에 내려줌*/}
            <List boardList={boardList}/>
        </>
    )
}

export default ListContainer
