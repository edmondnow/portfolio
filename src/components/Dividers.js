import React from 'react';
import Divider from './Divider';

// TODO putin a backward icon from font-awesome, doesn't need list view

const Dividers = ({ changeTarget, dividerList, allOpen }) => {
  return (
    <div className="dividers-container">
      {dividerList.map(item => {
        return (
          <Divider
            {...item}
            key={item.name}
            changeTarget={changeTarget}
            allOpen={allOpen}
          />
        );
      })}
    </div>
  );
};

export default Dividers;
