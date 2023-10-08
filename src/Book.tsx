// import React from 'react'
import Title from './Title'

type propsInfo = {
    title: string,
    imgSrc: string,
    text: string
}
export default function Book(props: propsInfo):JSX.Element {
    const {title, imgSrc, text}= props
  return (
    <div id='book'>
      <Title text={title}/>
      <img src={imgSrc} alt="book" />
      <p>{text}</p>
    </div>
  )
}
