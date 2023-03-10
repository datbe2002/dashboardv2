import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { UilAngleRight } from '@iconscout/react-unicons';
import { privatePage } from '@routers/mainRouter';
import { logo } from '@shared/assets/images';
import './style.scss'
import { CalendarOutlined, ContainerOutlined, DatabaseOutlined, DollarCircleOutlined, FileMarkdownOutlined, FolderOutlined, InfoCircleOutlined, SettingOutlined } from '@ant-design/icons';
import MenuCustom from '@layout/Sidebar/ItemMenu';

const SiderComponent2: React.FC<{
    className: string;
    setClassName: (className: string) => void;
}> = props => {
    const location = useLocation();
    const navigate = useNavigate();
    const { className, setClassName } = props;
    const [width, setWidth] = useState<string | number>();
    const onClick = (e: any) => {
        setClassName('sider-component big');
        e.preventDefault();
        e.stopPropagation();
    };

    useEffect(() => {
        if (className === 'sider-component') {
            setWidth(0);
        } else {
            setWidth('100%');
        }
    }, [className]);
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={className} id='sider-component' onClick={onClick} onMouseEnter={onClick}>

            <div className="mask" style={{ width }}>
                <div className="logo">
                    <img src={logo} alt="logo" width={96} height={96} onClick={() => navigate('/')} />
                </div>
                <MenuCustom listNav={privatePage} location={location.pathname} />
                <div className='iconsSidebar'>
                    <div className='iconsSidebar__wrapper'>
                        <div className='iconsSidebar__icon'>
                            <ContainerOutlined style={{ fontSize: 35 }} />
                        </div>
                        <div className='iconsSidebar__text_content'>
                            Kho b???n ghi
                        </div>

                    </div>
                    <div className='iconsSidebar__wrapper'>
                        <div className='iconsSidebar__icon' >
                            <DatabaseOutlined style={{ fontSize: 35 }} />
                        </div>
                        <div className='iconsSidebar__text_content'>
                            Playlist
                        </div>

                    </div>
                    <div className='iconsSidebar__wrapper'>
                        <div className='iconsSidebar__icon'>
                            <CalendarOutlined style={{ fontSize: 35 }} />
                        </div>
                        <div className='iconsSidebar__text_content'>
                            L???p l???ch ph??t
                        </div>

                    </div>
                    <div className='iconsSidebar__wrapper'>
                        <div className='iconsSidebar__icon'>
                            <FileMarkdownOutlined style={{ fontSize: 35 }} />
                        </div>
                        <div className='iconsSidebar__text_content'>
                            Qu???n l??
                        </div>

                    </div>
                    <div className='iconsSidebar__wrapper'>
                        <div onClick={handleMenuClick}>
                            <div className='iconsSidebar__icon'>
                                <DollarCircleOutlined style={{ fontSize: 35 }} />
                            </div>


                            <div className='iconsSidebar__text_content'>
                                Doanh thu
                            </div>

                        </div>

                        {showMenu && (
                            <ul >
                                <Link to={'/profit'}>
                                    <li style={{ listStyleType: 'none', color: 'white' }}>Qu???n l?? ph??n ph???i danh thu</li>

                                </Link>
                                <Link to={'/history-profit'}>
                                    <li style={{ listStyleType: 'none', color: 'white' }}>L???ch s??? ?????i so??t</li>

                                </Link>
                                <Link to={'/report-profit'}>
                                    <li style={{ listStyleType: 'none', color: 'white' }}>B??o c??o doanh thu</li>

                                </Link>

                            </ul>
                        )}
                    </div>
                    <div className='iconsSidebar__wrapper'>
                        <div className='iconsSidebar__icon'>
                            <SettingOutlined style={{ fontSize: 35 }} />
                        </div>
                        <div className='iconsSidebar__text_content'>
                            C??i ?????t
                        </div>

                    </div>
                    <div className='iconsSidebar__wrapper'>
                        <div className='iconsSidebar__icon'>
                            <InfoCircleOutlined style={{ fontSize: 35 }} />
                        </div>
                        <div className='iconsSidebar__text_content'>
                            H??? tr???
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiderComponent2;
