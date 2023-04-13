import React, { useState } from 'react';
import { Image  } from 'antd';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DiffOutlined,
  UsergroupDeleteOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  
  getItem(<Link to="/">Sản phẩm</Link>, '1', <PieChartOutlined />,[
    getItem(<Link to="/add-product">Thêm sản phẩm</Link>,'addProduct',<DiffOutlined />)
  ]),
  getItem(<Link to="/list-cate">Loại hàng</Link>, '2', <DesktopOutlined />,[
    getItem(<Link to="/add-cate">Thêm loại hàng</Link>,'addCate',<DiffOutlined />)
  ]),
  getItem('User', 'sub1', <UsergroupAddOutlined />, [
    getItem('Justin bia hơi', '3',<UserOutlined />),
    getItem('Alexander rau muống', '4',<UserOutlined />),
   
  ]),
 
];

const Nav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Image
        className='rounded-[50%] w-[50px]'
        src="https://i.pinimg.com/564x/ac/d4/bd/acd4bd57d7fb7b63b90bf740ece2242d.jpg"
      />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
};

export default Nav;