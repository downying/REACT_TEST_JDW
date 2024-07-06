import React, { useEffect, useState } from 'react'
import Read from '../components/board/Read'
import * as boards from '../apis/boards'

const ReadContainer = ({no}) => {
    // state
    const [board, setBoard] = useState({})
 
    const getBoard = async () => {
       
        const response = await boards.select(no)
        const data = await response.data   
        console.info(data)

        setBoard(data) 
    }

    // hook
    useEffect( () => {
        getBoard()
    }, [])

    return (
        <>
            {/* 게시글 조회 - 컴포넌트에 내려줌*/}
            <Read no={no} board={board}/>
        </>
    )
}

export default ReadContainer