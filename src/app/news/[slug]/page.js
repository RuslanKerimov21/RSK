import './index.css';
import { getNews } from "@/api/api";
import Markdown from 'react-markdown';
import { CONFIG } from '@/app/config';
import { Breadcrumbs } from "@/app/components";
export function generateMetadata({ params: { slug } }) {
    return {
        title: slug,
    }
}
export default async function Post({ params: { slug } }) {

    const news = await getNews({ slug });
    const elem = news.find((el) => el.id == slug);
    const breadcrumb = [{ title: 'Новости', link: '/news' }];

    return (
        <div className="container news-container">
            <Breadcrumbs data={breadcrumb} />
            <div className="news-page">
                <h1 className="news-title">{elem.title}</h1>
                {elem.img ?
                    <div className="news-image">
                        <img src={CONFIG.file_url + elem.img.attributes.url} alt={elem.img.attributes.name} />
                    </div>
                    : null
                }
                <div className="news-content">
                    <Markdown>{elem.content}</Markdown>
                </div>
            </div>
        </div>
    )
}