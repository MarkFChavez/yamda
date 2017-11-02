import React from 'react'

const styles = {
  large: { fontSize: '40px', fontWeight: 'bolder' },
  center: { textAlign: 'center' },
  uppercase: { textTransform: 'uppercase' }
}

const Header = () => {
  return (
    <div style={styles.center}>
      <span style={styles.large}> YAMDA. </span>

      <div>
        <span style={styles.uppercase}> Yet Another Movie Database App </span>
      </div>

      <div>
        Developed and built for you movie people!
        - <a href='http://markjoelchavez.com'> @mrkjlchvz </a>
      </div>
    </div>
  )
}

export default Header