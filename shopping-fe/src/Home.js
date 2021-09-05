import React from "react";

import { Layout, Menu } from 'antd';
import {bindActionCreators} from "redux";

import {
  BarChartOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import ShoppingContainer from "./pages/shopping/ShoppingContainer";
import { connect } from "react-redux";
import {setPage} from './redux/actions/pageActions';
import PastShoppingHome from "./pages/pastShopping/PastShoppingHome";
import { resetData } from "./redux/actions/UserActions";
import LogIn from "./pages/user/LogIn";
import Account from "./pages/account/Account";

const { Header, Content, Footer, Sider } = Layout;


function Home({page, authenticated, setPage, resetData}) {

        if(!authenticated){
            return <LogIn />
        }

        return(<Layout>
            <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
            >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" onClick={() => setPage('Account')} icon={<UserOutlined />}>
                Account
                </Menu.Item>
                <Menu.Item key="2"  onClick={() => setPage('Dashboard')} icon={<VideoCameraOutlined />}>
                Dashboard
                </Menu.Item>
                <Menu.Item key="3"  onClick={() => setPage('Shopping')} icon={<UploadOutlined />}>
                Shopping
                </Menu.Item>
                <Menu.Item key="4"  onClick={() => setPage('Previous')} icon={<BarChartOutlined />}>
                Previous shopping
                </Menu.Item>
                <Menu.Item key="5"  onClick={() => resetData()} icon={<TeamOutlined />}>
                Logout
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                    {page === 'Shopping' && 
                        <ShoppingContainer />
                    }
                    {page === 'Previous' && 
                        <PastShoppingHome />
                    }
                    {page === 'Account' && 
                        <Account />
                    }

                </div>          
            </Content>
            <Footer style={{ textAlign: 'center' }}>SHOPPING APPLICATION FOR SRILANKA</Footer>
            </Layout>
        </Layout>)
    };

    const mapStateToProps = ({pageReducer, userReducer}) => {
        return {
            page: pageReducer.page,
            authenticated: userReducer.authenticated
        }
      }

      const mapActionsToProps = (dispatch) => {
        return bindActionCreators({
            setPage,
            resetData
        }, dispatch)
      }

export default connect(mapStateToProps, mapActionsToProps)(Home);