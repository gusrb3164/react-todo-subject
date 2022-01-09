import React from 'react';

const Filter = ({ filter, changeFilter, backgroundColor, changeBackgroundColor }) => {
  return (
    <section className="todos-filter">
      <input type="color" value={backgroundColor} onChange={changeBackgroundColor} />
      <ul>
        <button className={filter === 'all' ? 'active' : undefined} data-type="all" onClick={changeFilter}>
          ALL
        </button>
        <button className={filter === 'active' ? 'active' : undefined} data-type="active" onClick={changeFilter}>
          Active
        </button>
        <button className={filter === 'completed' ? 'active' : undefined} data-type="completed" onClick={changeFilter}>
          Completed
        </button>
      </ul>
    </section>
  );
};

export default React.memo(Filter);
