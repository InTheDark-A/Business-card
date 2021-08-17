import './App.css';
import 'antd/dist/antd.css';
import {Layout, Menu} from "antd";
import {CodeOutlined, HeatMapOutlined, HomeOutlined, LinkOutlined, UserOutlined,} from '@ant-design/icons';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import {AboutMe} from "./components/AboutMe";
import {Contacts} from "./components/Contacts";
import MySkills from "./components/MySkills";
import {MyWorks} from "./components/MyWorks";
import {StartPage} from "./components/StartPage";
import {Error} from "./components/404";
import {useState} from "react";

const {Header, Content, Footer, Sider} = Layout;

function AppContainer() {
    const [collapsed, onCollapse] = useState(false);
    return (
        <div className="App">
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to={"/"}>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            <Link to={"/about-me"}>About me</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<HeatMapOutlined />}>
                            <Link to={"/skills"}>Skills</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<CodeOutlined />}>
                            <Link to={"/works"}>Works</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<LinkOutlined />}>
                            <Link to={"/contact"}>Contact</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Switch>
                                <Route exact path={"/about-me"} render={AboutMe}/>
                                <Route exact path={"/contact"} render={Contacts}/>
                                <Route exact path={"/skills"} render={MySkills}/>
                                <Route exact path={"/works"} render={MyWorks}/>
                                <Route exact path={"/"} render={StartPage}/>
                                <Route exact path={"/*"} render={Error}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>©Arthur Shagiakhmetov</Footer>
                </Layout>
            </Layout>
        </div>
    );
};


const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
);

export default App;
