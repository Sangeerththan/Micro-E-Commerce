import React from "react";
import PastShopping from "./PastShopping";
import PastShoppingDetailList from "./PastShoppingDetailList";
import {cancelShopping} from '../../redux/actions/shopping_actions'
import {getPastShopping} from '../../redux/actions/UserActions'
import { connect } from "react-redux";
import {bindActionCreators} from "redux";


class PastShoppingList extends React.PureComponent {

    constructor(props) {
        super(props); 
    
        this.state = {
            selectedId: -1,
        }
    }

  selectShopping = (shoppingId) => {
    this.setState({selectedId: shoppingId});
  };

  cancelShopping = (shoppingId) => {
    this.props.cancelShopping(this.props.token, shoppingId);
    let payload = {}
    payload.username = this.props.username;
    payload.token = this.props.token;
    this.props.getPastShopping(payload);
  }


  render() {
    const {shoppings} = this.props;
    const {selectedId} = this.state;


    if(selectedId === -1){
        return <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'sspace-between'}} className="flex flex-wrap justify-between">
      {
        shoppings.map(p => (
            <PastShopping key={p.id} {...p} selectShopping={this.selectShopping} cancelShopping={this.cancelShopping} />
        ))
      }
    </div>
    } else {
        let shopping = shoppings.filter(p => p.id === this.state.selectedId)[0];
            return(
        <PastShoppingDetailList key={shopping.id} shopping={shopping} selectShopping={this.selectShopping}/>
            )
    }
  }
}

const mapStateToProps = ({userReducer}) => {
  return {
    token: userReducer.token,
    username: userReducer.username,
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    cancelShopping,
    getPastShopping
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(PastShoppingList);