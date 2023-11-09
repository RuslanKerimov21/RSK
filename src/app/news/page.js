import './index.css';
import Link from "next/link";
import { getNews } from "@/api/api";
import { Breadcrumbs } from "../components";
import { dateParsing, parsDescription } from '../context/global.context';
export default async function News() {
    const news = await getNews({});
    const breadcrumb = [{ title: 'Новости', link: '/news' }];
    return (
        <div className="container">
            <h1 className="page-title">Новости компании</h1>
            <Breadcrumbs data={breadcrumb} />
            <ul className="news-lists">
                {news.map((el) => (
                    <li className="news-itemr" key={el.id}>
                        <Link href={`news/${el.id}`}>
                            <div className="news-data">{dateParsing(el.publication)}</div>
                            {el.title ? <div className="news-titles">{el.title}</div> : null}
                            <div className="news-descriptions">{parsDescription(el.content)}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}