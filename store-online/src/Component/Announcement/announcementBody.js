import React from 'react';
import { Link } from 'react-router-dom';

function AnnouncementBody() {
    const styleLink = {
      marginRight: '10px',
      textDecoration: 'none',
      color: 'black'
    }

  return (
    <>
      <div>
        <Link style={ styleLink }>Anúnciar</Link>
      </div>
    </>
  )
}

export default AnnouncementBody;
