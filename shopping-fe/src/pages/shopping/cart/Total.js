import React from 'react';
import { Row } from 'antd';

const Total = ({total, saveShopping }) => {

  if(total>0){
          return (
            <article className="mw5 w-30 bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id="title">
              <div className="tc">
                <img src={"https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-shopping-feed-ecommerce-final.jpg?s62EBQOnC4qV09Acw1HbgMps0o9l4Q0D&itok=yderrDik"} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Total" />
                <Row>
                <span>$ {total}</span>
                <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn"
                  onClick={() => saveShopping()}
                >Buy</button>
                </Row>
              </div>
            </article>
          );
  }else{
    return(<div></div>)
  }
};

export default Total;