import React from 'react'

const Attribution = ({ logo }) => {
  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '0px' }}>
      <a href='https://www.themoviedb.org' target='_blank'>
        <img src={logo} width={92} height={64} />
      </a>
    </div>
  )
}

export default Attribution

