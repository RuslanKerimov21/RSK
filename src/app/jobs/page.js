import './index.css';
import Link from "next/link";
import { FormJobs, JobsVideo } from '@/app/components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export const metadata = {
    title: 'Вакансии',
    description: 'Смотрите наши вакансии для проф специалистов',
}
export default function Jobs() {
    return (
        <>
            <section className="page-banner" style={{ backgroundImage: `url('https://s0.rbk.ru/v6_top_pics/media/img/7/83/756062203941837.jpg')` }}>
                <div className="banner-info">
                    <div className="container">
                        <h1 className="banner-title">Карьера</h1>
                        <Link href="#anketa" className="button">
                            Направить резюме
                            <ArrowForwardIcon />
                        </Link>
                    </div>
                </div>
            </section>
            <JobsVideo />
            <section className="anketa">
                <div className="container">
                    <div className="jobs-head">
                        <h2 className="page-title">Анкета соискателя</h2>
                        <p className="jobs-description">
                            Заполните анкету для рассмотрения Вашей кандидатуры на имеющиеся вакансии. <br />
                            В случае наличия подходящих вакансий с Вами свяжутся в ближайшее время.
                        </p>
                    </div>
                    <FormJobs />
                </div>
            </section>
            <section className="page-banner jobs-banner" style={{ backgroundImage: 'url(https://nlmk.com/upload/resize_cache/iblock/1eb/1440_500_240cd750bba9870f18aada2478b24840a/banner_bottom.jpg)' }}>
                <div className="container">
                    <h2 className="banner-title">Создавайте настоящее будущее вместе с нами</h2>
                    <Link className="button" href="https://saratov.hh.ru/employer/636175">
                        Наши вакансии
                        <ArrowForwardIcon />
                    </Link>
                </div>
            </section>
        </>
    )
}