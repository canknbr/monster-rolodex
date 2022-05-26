import React from 'react'

const MonsterItem = ({id,name}) => {
  return (
    <div className="card-item" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h3>{name}</h3>
    </div>
  );
}

export default MonsterItem