import React from "react";
import {bindActionCreators} from "redux";
import { getPastShopping } from '../../redux/actions/UserActions';
import { connect } from "react-redux";
import PastShoppingList from './PastShoppingList';

class PastShoppingHome extends React.PureComponent {

  addToCart = (product) => {
    this.props.addToCartAction(product);
  };

  componentDidMount(){
    let payload = {}
      payload.username = this.props.username;
      payload.token = this.props.token;
        this.props.getPastShopping(payload);
  }


  render() {
    const {pastShopping} = this.props;
    
    if(pastShopping.length > 0){
      return (
        <main className="pa3 pa5-ns w-100">
          <PastShoppingList shoppings={pastShopping}/>
        </main>
      );
    } else{
        return(
          <div></div>
        )
    }
  }
}

const mapStateToProps = ({userReducer}) => {
    return {
      pastShopping: userReducer.pastShopping,
      username: userReducer.username,
      token: userReducer.token
    }
  }

  const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
      getPastShopping
    }, dispatch)
  }

export default connect(mapStateToProps, mapActionsToProps)(PastShoppingHome)