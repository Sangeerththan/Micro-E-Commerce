import React from 'react';
import { Row } from 'antd';

function PastShoppingDetail ({id, img, name, units, price }) {

  return (
    <article className="mw5 w-30 bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
      <div className="tc">
        <img src={img} className="br-100 h4 w4 dib ba b--black-05 pa2" title={name} />
        <Row>
        <span>Name - {name}</span>
        </Row>
        <Row>
        <span>Quantity - {units}</span>
        </Row>
        <Row>
        <span>Unit Price - ${price}</span>
        </Row>
      </div>
    </article>
  );
};

export default PastShoppingDetail;