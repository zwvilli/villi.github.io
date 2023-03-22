import { AppstoreOutlined, ProfileOutlined, SmileOutlined } from '@ant-design/icons';
import { fontSize } from '@mui/system';
import { Menu, Layout } from 'antd';
import { useState } from 'react';
import './header.css'
const { Header } = Layout

const items = [
    {
        label: 'TODO List',
        key: 'todo_list',
        icon: < ProfileOutlined style={{ fontSize: 18 + 'px' }} />,
    },
    {
        label: '前端',
        key: 'qianduan',
        icon: <AppstoreOutlined style={{ fontSize: 18 + 'px' }} />,
        // disabled: true,
    },
    {
        label: '生活随记',
        key: 'life',
        icon: <SmileOutlined style={{ fontSize: 18 + 'px' }} />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
];
const App = () => {
    const [current, setCurrent] = useState('todo_list');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Header style={{ padding: '0 80px' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                onClick={onClick}
                items={items}
                selectedKeys={[current]}
                style={{ minWidth: '100px' }}
            />
        </Header>
    )
};
export default App;