import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {getUserData} from '../../redux/actions/UserActions'
import {Table} from 'antd';

class Account extends React.PureComponent {

    constructor(props) {
        super(props); 
    
        this.state = {
            selectedId: -1,
        }
    }

    componentDidMount(){
        let payload = {};
        payload.username = this.props.userReducer.username;
        payload.token = this.props.userReducer.token;
        this.props.getUserData(payload)    
    }

    columns = [
        {
          title: 'Firstname',
          dataIndex: 'firstname',
          key: 'firstname',
        },
        {
          title: 'Lastname',
          dataIndex: 'lastname',
          key: 'lastname',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

  render() {
    const {userReducer} = this.props;

    if(userReducer.userData !== undefined){
        let user = {};
        user.firstname = userReducer.userData.firstname;
        user.lastname = userReducer.userData.lastname;
        user.address = userReducer.userData.address;
        user.key = userReducer.userData.key;
        let data = [];
        data.push(user);
          return(
              <div>
                  <Table dataSource={data} columns={this.columns} />;
              </div>)
    }else {
      return(<div></div>)
    }


  }
}

const mapStateToProps = ({userReducer}) => {
    return {
      userReducer,
    }
  }
  
  const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
      getUserData
    }, dispatch)
  }

export default connect(mapStateToProps, mapActionsToProps)(Account);