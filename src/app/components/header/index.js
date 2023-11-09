'use client';
import './index.css';
import Link from 'next/link';
import Image from 'next/image';
import { IMG } from '@/app/constants';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { openSidebar } from '@/redux/reducers/payloadReduce';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { getPayloading, getCloseds } from '@/app/context/global.context';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
const Header = () => {

    const payloads = {
        to: useRef(null),
        one: useRef(null),
    }

    const dispatch = useDispatch();
    const [helpbox, openHelpbox] = useState(false);
    const [current, setCurrent] = useState('Главная');
    const [localization, openLoacalization] = useState(false);
    const { navlist } = useSelector(state => state.navigation);

    const mousedEvent = (item) => {
        setCurrent(item.title)
    }

    useEffect(() => {
        getCloseds({ payload: helpbox, ref: payloads.to, useState, action: openHelpbox })
    }, [helpbox])

    useEffect(() => {
        getPayloading({ payload: localization, ref: payloads.one, useState, action: openLoacalization })
    }, [localization])

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-left">
                        <button className="burrger" onClick={() => dispatch(openSidebar(true))}>
                            <MenuIcon />
                        </button>
                        <Link className="logo" href="/">
                            <Image src={IMG.logo} width={30} alt='logo' loading="lazy" />
                        </Link>
                    </div>
                    <nav className="header-nav">
                        <ul className="header-nav_list">
                            {navlist[0].sluglists.map((el) => (
                                <li key={el.title} className={`nav-item ${el.title == current ? 'active' : null}`} onMouseOver={() => mousedEvent(el)}>
                                    <span><Link href={el.path}>{el.title}</Link></span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header-right">
                        <div className={`header-suppor ${helpbox ? 'open' : ''}`} onClick={() => openHelpbox(!helpbox)}>
                            <button>
                                <HelpOutlineIcon />
                                <span>Помощь</span>
                            </button>
                            <div className="header-support_box">
                                <div className="support-head">
                                    <span className="hepl-title">Поддержка Россельторг</span>
                                    <p>Мы на связи и всегда готовы вам помочь</p>
                                </div>
                                <ul className="support-list">
                                    <li>
                                        <Link href="supports" className="button">Центр поддержки</Link>
                                    </li>
                                    <li>
                                        <Link href="telegraph" className="button blue"><TelegramIcon /> Telegramm</Link>
                                    </li>
                                </ul>
                                <ul className="support-link">
                                    <li>
                                        <Link href="questions"><HelpOutlineIcon />Частые вопросы</Link>
                                    </li>
                                    <li>
                                        <Link href="base"><MenuBookOutlinedIcon />База знаний</Link>
                                    </li>
                                    <li>
                                        <Link href="linked"><EmojiObjectsOutlinedIcon />Оставить предложение</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`localization ${localization ? 'open' : ''}`} onClick={() => openLoacalization(!localization)} ref={payloads.one}>
                            <button>Ru <ExpandMoreIcon /></button>
                            <ul className="localization-list">
                                <li>En</li>
                                <li>Ru</li>
                            </ul>
                        </div>
                        <div className="header-auth">
                            <Link href="register">Регистрация</Link>
                            <Link href="auth" className="button">Вход</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;