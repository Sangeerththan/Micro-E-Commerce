import React from "react";
import PastShoppingDetail from "./PastShoppingDetail";

class PastShoppingDetailList extends React.PureComponent {

  render() {
    const {shopping, selectShopping} = this.props;

    return <div> 
    <span>
    <button className="flex flex-wrap f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn"
      onClick={() => selectShopping(-1)}
    >Back</button>
    </span>
    <div className="flex flex-wrap justify-between">
      {
        shopping.shoppingDetailModelDtos.map(p => (
            <PastShoppingDetail key={p.id} {...p} status={shopping.status} />
        ))
      }
      </div>
    </div>
  }
}

export default PastShoppingDetailList;