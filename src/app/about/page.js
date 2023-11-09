import './index.css';
import { CONFIG } from '../config';
import { getSertificates, getServices } from '@/api/api';
import gim from './../datalayer/img/pictures/Демонтаж.png';
import { AccordionAbbout, SliderAbout } from '../components';
import gim2 from './../datalayer/img/pictures/РСКПеребазировка.jpg';
import gim3 from './../datalayer/img/pictures/УстройствоАсфальтобетона.jpg';
import gim4 from './../datalayer/img/pictures/УстройствоДорожногопокрытия.jpg';

export const metadata = {
    title: 'Про компанию РСК',
    description: 'История зарождения, и успехи компании',
}
export default async function About() {
    const services = await getServices()
    const sertificates = await getSertificates()
    const sliders = [
        {
            img: gim,
            title: 'Демонтажные работы',
            info: [
                {
                    list: [
                        { title: '12 гидромолотов различной модификации с частотой удара от 250 до 1570 ударов в минуту' },
                        { title: '12 дорожных фрез Wirtgen с шириной фрезерования от 100 до 2100 мм' },
                        { title: '1 высокопроизводительная землеройно-фрезерная машина VERMEER T-1255' },
                        { title: '12 дробильно-сортировочных комплексов Extec и McCloskey' }
                    ]
                }
            ],
        },
        {
            img: gim2,
            title: 'Устройство земляного полотна в выемки или насыпи',
            info: [
                {
                    list: [
                        { title: '63 бульдозера мощностью от 90 до 302 л.с.' },
                        { title: '60 гусеничных экскаваторов ёмкостью ковша от 1,5 до 3 м3' },
                        { title: '96 фронтальных погрузчиков' }
                    ]
                },
                {
                    list: [
                        { title: '49 грунтовых виброкатков' },
                        { title: '34 автогрейдера' },
                        { title: '5 профилировщиков Gomaco Trimmer 9500' }
                    ]
                }
            ]
        },
        {
            img: gim3,
            title: 'Производство асфальтобетона и цементобетона',
            info: [
                {
                    list: [
                        { title: '12 асфальтобетонных заводов производительностью от 160 до 320 тонн в час Ammann, Benninghoven' },
                        { title: '10 цементобетонных заводов производительностью от 120 до 240 м3 в час' },
                    ]
                },
            ]
        },
        {
            img: gim4,
            title: 'Устройство основания земляного полотна, дорожной одежды и искусственных покрытий ',
            info: [
                {
                    list: [
                        { title: '37 асфальтоукладочных комплексов' },
                        { title: '11 автогудронаторов' },
                        { title: '6 магистральных бетоноукладочных комплексов Gomaco, Wirtgen' },
                        { title: '2 универсальных бетоноукладчиков Gomaco Commander III' }, ,
                    ]
                },
            ]
        },
    ]
    return (
        <>
            <section className="page-banner" style={{ backgroundImage: "url(https://vschudo.ru:1338/uploads/DJI_0922_95e1cd9837.webp)" }}>
                <div className="banner-info">
                    <div className="container">
                        <h1 className="banner-title">Региональная строительная компания</h1>
                        <p>
                            Наша компания на рынке уже более 10 лет
                            РСК — это крупнейший застройщик основана в июне 2014 года для комплексного строительства и реконструкции транспортной инфраструктуры в России. За короткий промежуток времени компания прошла путь от подрядчика до ключевого игрока на рынке строительства и реконструкции автомобильных дорог, аэродромов, промышленных и гидротехнических сооружений, строительства объектов недвижимости.
                        </p>
                    </div>
                </div>
            </section>
            <section className="about-services">
                <div className="container">
                    <h2 className="section-title about">Региональная строительная компания — это целый комплекс предприятий и сервисов</h2>
                    <ul className="about-services_list">
                        {services.map((el, i) => (
                            <li key={i}>
                                <div className="image">
                                    <img src={el.img ? CONFIG.file_url + el.img.attributes.url : null} alt="image" />
                                </div>
                                <div className="information">
                                    {el.title}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="about-slider">
                <div className="container">
                    <h2 className="section-title about">В нашем распоряжении 9000+ единиц техники</h2>
                    <SliderAbout items={sliders} />
                    <AccordionAbbout data={sliders} />
                </div>
            </section>
            <section className="sertificats">
                <div className="container">
                    <h2 className="section-title about">Мы меняем представление о качестве дорожных работ</h2>
                    <ul className="sertificats-list">
                        {sertificates.map((el, i) => (
                            <li key={i}>
                                <div className="sertificat">
                                    <img src={el.sertificate ? CONFIG.file_url + el.sertificate.attributes.name : 'http://tsm.ru/upload/resize_cache/iblock/5ee/95_135_1/Sert12.jpg'} />
                                </div>
                                <div className="sertificat-info">
                                    {el.title}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}