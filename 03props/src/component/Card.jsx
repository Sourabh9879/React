import React from 'react';

function Card({name,info='helo'}) {
  return (
    <div className="ma">
<h1>{name}</h1>
<h3>{info}</h3>
    </div>
  );
}

export default Card;