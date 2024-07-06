import React from 'react'
import ReadContainer from '../../containers/ReadContainer'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'

const Read = () => {
// 컨트롤러에서 @Pathvariable을 쓴 경우 
// usePrams()를 통해파라미터를 내려줌
const { no } = useParams()

  return (
    <>
        <Header />
        <ReadContainer no={no} />
    </>
  )
}

export default Read