'use client';
import './index.css';
import Link from 'next/link';
import Image from 'next/image';
import { IMG } from '@/app/constants';
import { useSelector } from 'react-redux';
import CallIcon from '@mui/icons-material/Call';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
    const { navlist } = useSelector(state => state.navigation);
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="container">
                    <Link className="logo" href="/">
                        <Image src={IMG.logo} width={60} alt='footer-logo' loading="lazy" />
                    </Link>
                    <div className="footer-intro">
                        <Link href='https://t.me/RSK_Payroll_Bot'>
                            <div className="intro-link_icon">
                                <TelegramIcon />
                            </div>
                            <div className="intro-footer">
                                <span>Telegram-помощник</span>
                                <p>Процедуры. Сервисы. Поддержка</p>
                            </div>
                        </Link>
                        <Link href="tel:+7 (499) 749-10-69">
                            <div className="intro-link_icon">
                                <CallIcon />
                            </div>
                            <div className="intro-footer">
                                <span>+7 (499) 749-10-69</span>
                                <p>Для звонков по России</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-inner">
                <div className="container">
                    <div className="footer-navigation">
                        <ul className='footer-list_items'>
                            {navlist[0].sluglists.map((el) => (
                                <li key={el.title}>
                                    <Link href={el.path}>{el.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-navigation">
                        <div className="footer-requisites">
                            Получатель Общество с ограниченной ответственностью "Региональная строительная компания" <br />
                            ИНН получателя 7706810472 <br />
                            Номер счета 40702810200000013238 <br />
                            Банк Банк ГПБ (АО) <br />
                            БИК 044525823 <br />
                        </div>
                    </div>
                    <div className="footer-navigation">
                        <div className="footer-navigation_wrap">
                            <ul className='footer-list_items'>
                                <li>
                                    Номер телефона
                                    <Link href="tel:+7 (499) 749-10-69">+7 (499) 749-10-69 </Link>
                                </li>
                                <li>
                                    Адрес
                                    <Link href="/">Россия, 142784, г. Москва, пос. Московский, 3-й мкр, д. 9А, пом. 2(6) </Link>
                                </li>
                                <li>
                                    Почта
                                    <Link href="mailto:office@rsk.msk.ru">office@rsk.msk.ru</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-inner">
                <div className="container">
                    <ul className='footer-list_information'>
                        <li>
                            <Link href="/politics">Политика конфиденциальности</Link>
                        </li>
                        <li>
                            <Link href="/politics">Согласие на обработку персональных данных</Link>
                        </li>
                        <li>
                            <Link href="/politics">Раскрытие информации</Link>
                        </li>
                        <li>
                            <Link href="/politics">Сводные данные по результатам СОУТ</Link>
                        </li>
                    </ul>
                    <div className="copy">©2016, Общество с ограниченной ответственностью «Региональная строительная компания»</div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;