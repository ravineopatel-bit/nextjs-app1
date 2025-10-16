import React from 'react'
import styls from './cardList.module.css'
import Pagination from '../pagination/Pagination'
const CardList = () => {
  return (
    <div    className={styls.container}>CardList
      <Pagination/>
    </div>
  )
}

export default CardList
