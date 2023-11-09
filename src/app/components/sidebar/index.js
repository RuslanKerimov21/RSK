'use client';
import './index.css';
import Link from 'next/link';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '@/redux/reducers/payloadReduce';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const SideBar = () => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(null)
    const { sidebar } = useSelector(state => state.payloads);
    const { navlist } = useSelector(state => state.navigation);
    const open = (elem) => {
        if (selected == elem) {
            return setSelected(null)
        }
        setSelected(elem)
    }
    return (
        <aside className={`overlay sidebar ${sidebar ? 'open' : ''}`} onClick={() => dispatch(openSidebar(false))}>
            <div className="sidebar-inner">
                <div className="sidebar-box" onClick={(e) => e.stopPropagation()}>
                    <div className="sidebar-content">
                        <div className="sidebar-head">
                            <div className="logo">
                                РСК
                            </div>
                            <button onClick={() => dispatch(openSidebar(false))}>
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="sidebar-auth">
                            <Link href={`register`} className='button'>Регистрация</Link>
                            <Link href={`authorization`} className='button blue'>Вход</Link>
                        </div>
                        <div className="navigation-list">
                            {navlist.map((el, i) => (
                                <nav className={`sidebar-navigation ${selected === el ? 'open' : ''}`} key={i} onClick={() => open(el)}>
                                    <span className='sidebar-nav_title'>{el.slug} <KeyboardArrowDownIcon /></span>
                                    {el.sluglists.length >= 1 ?
                                        <ul className="nav-list">
                                            {el.sluglists.map((elem) => (
                                                <li key={elem.title} onClick={() => dispatch(openSidebar(false))}><Link href={elem.path}>{elem.title}</Link></li>
                                            ))}
                                        </ul>
                                        : null
                                    }
                                </nav>
                            ))}
                        </div>
                    </div>
                </div>
                <button onClick={() => dispatch(openSidebar(false))}><CloseIcon /></button>
            </div>
        </aside>
    )
}
export default SideBar;