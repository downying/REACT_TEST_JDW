import React from 'react'
import UpdateContainer from '../../containers/UpdateContainer'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'

const Update = () => {
  const { no } = useParams()
  
  return (
    <>
        <Header />
        <UpdateContainer no={no} />  
    </>
  )
}

export default Update