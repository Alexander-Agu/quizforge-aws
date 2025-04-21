import React from 'react'
import "./info.css"
import Card from '../card/Card'

function Info({cards}) {
  return (
    <section className='infoContainer'>
        {
            cards.map(x => {
                const {title,  content} = x;

                return <Card title={title} content={content} />
            })
        }
    </section>
  )
}

export default Info