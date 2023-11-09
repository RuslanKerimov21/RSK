import './index.css';
import Link from 'next/link';
import { CONFIG } from '@/app/config';
import { getProcedures } from '@/api/api';
import { Breadcrumbs } from "@/app/components";
import { getExtc } from '@/app/context/global.context';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
export function generateMetadata({ params: { id } }) {
    return {
        title: id,
    }
}
export default async function Post({ params: { id } }) {
    const list = await getProcedures({ id });
    const elem = await list.find((el) => el.procedure_id == id);
    const breadcrumb = [{ title: 'Закупки', link: '/procedures' }, { title: `${id}`, link: `${id}` }];
    return (
        <>
            <section className="procedure-page">
                <div className="container">
                    <Breadcrumbs data={breadcrumb} />
                    <div className="procedure-inner">
                        <h1 className="page-title">Процедура: {id}</h1>
                        <div className="procedure-title">
                            <span>Наименование процедуры</span>
                            {elem.title}
                        </div>
                        <ul className="procedure-information_list">
                            {elem.organizator ? <li><span>Организатор</span>{elem.organizator}</li> : null}
                            {elem.contragent ? <li><span>ФИО</span>{elem.contragent}</li> : null}
                            {elem.phone_contragent ? <li><span>Телефон</span>{elem.phone_contragent}</li> : null}
                            {elem.email_contragent ? <li><span>E-mail</span>{elem.email_contragent}</li> : null}
                            {elem.methods_conducting ? <li><span>Способ проведения</span>{elem.methods_conducting}</li> : null}
                            {elem.platform ? <li><span>Электронная площадка</span>{elem.platform}</li> : null}
                        </ul>
                    </div>
                </div>
            </section>
            {elem.procedure_offers.length >= 1 ?
                <section className="lot-offer">
                    <div className="container">
                        <h2 className="section-titles">Лоты</h2>
                        <ul className="lot-offers">
                            {elem.procedure_offers.map((el) => (
                                <li className='lot-item' key={el.title}>
                                    <div className="lot-content_left">
                                        <div className="lot-header">
                                            <div className={`lot-status ${el.attributes.status}`}></div>
                                            <div className="lot-ssid">Лот {el.id}</div>
                                            <div className="lot-status_endtime">
                                                <span>{el.attributes.status === 'acceptance_applications' ? 'Прием заявок' : 'Ничего'}</span>
                                                <time dateTime='2023-11-05T16:37:22+03:00'>
                                                    до &nbsp;13.11.23 09:00:00<span> (7дн.) [GMT +3 ] ( по Мск )</span>
                                                </time>
                                            </div>
                                        </div>
                                        <div className="lot-item__subject">
                                            {el.attributes.title}
                                        </div>
                                        <div className="lot-item__footer">
                                            {el.attributes.region ?
                                                <div className="region">
                                                    <FmdGoodOutlinedIcon />
                                                    <p> 61.{el.attributes.region.data.attributes.title}</p>
                                                </div>
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className="lot-content_right">
                                        <div className="method-conducting">
                                            {el.methods_conducting}
                                        </div>
                                        {el.attributes.price ?
                                            <div className="price-offer">
                                                <span>{el.attributes.price.toLocaleString()}</span>
                                                <span>₽</span>
                                            </div>
                                            : null
                                        }
                                        <div className="lot-provision">
                                            <div className="provision-item">
                                                <span>Обеспечение заявки: </span>
                                                Не предусмотренно
                                            </div>
                                            <div className="provision-item">
                                                <span>Обеспечение контракта: </span>
                                                6 772,41 ₽
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                : null
            }
            <section className="procedure-document">
                <div className="container">
                    <h2 className="section-titles">Документы</h2>
                    <div className="documents">
                        <div className="document-item">
                            <span className="document-title">Приложения к извещению</span>
                            <ul className="document-list">
                                {elem.file_list.map((el) => (
                                    <li key={el.id}>
                                        <Link href={`${CONFIG.file_url + el.attributes.url}`}>
                                            <span className="doc-format" style={{ background: getExtc(el.attributes.ext) }}>
                                                {el.attributes.ext.replace(/[\s.,%]/g, '')}
                                            </span>
                                            {el.attributes.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}