import React from 'react'

export default function Lists(props) {
  return (
    <div>
      {props.tasks.join(",")}
    </div>
  )
}
