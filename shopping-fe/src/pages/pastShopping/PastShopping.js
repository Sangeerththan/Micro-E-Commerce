import React from 'react';

function PastShopping ({id, date, status, totalAmount, selectShopping, cancelShopping}) {

  return (
    <article className="mw5 w-30 bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
      <div className="tc">
      <h1 className="f3 mb2">{date.substring(0, 10)}</h1>
      <h1 className="f3 mb2">Time - {date.substring(11, 19)}</h1>
        <h2 className="f5 fw4 gray mt0">{status}</h2>

        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn"
          onClick={() => selectShopping(id)}
        >View</button>
        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn"
        hidden={status!== "NEW"}
          onClick={() => cancelShopping(id)}
        >Cancel</button>
        <span>$ {totalAmount}</span>
      </div>
    </article>
  );
};

export default PastShopping;