import React from 'react';
import './MonsterList.css';
import MonsterItem from './MonsterItem';
const MonsterList = ({ newMonster }) => {
  return (
    <div className="card-list">
      {newMonster.map(monster => {
        return <MonsterItem key={monster.id} {...monster} />;
      })}
    </div>
  );
};

export default MonsterList;
