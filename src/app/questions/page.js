import './index.css';
import { getQestions } from '@/api/api';
import { Accordion } from '../components';
export const metadata = {
    title: 'Вопросы и ответы',
    description: 'Часто задаваемы вопросы',
}
export default async function Questions() {
    const questions = await getQestions();
    const current = 'Часто задаваемые вопросы';
    return (
        <section className="questions">
            <div className="container">
                <h1 className="page-title">Вопросы и ответы</h1>
                <div className="qusetions-wrap">
                    <nav className="qusetions-navigation">
                        <ul className="qusetions-navigation_list">
                            {questions.map((el, i) => (
                                <li key={i} className={`${el.title === current ? 'active' : ''}`}>{el.title}</li>
                            ))}
                        </ul>
                    </nav>
                    <Accordion data={questions} current={current} />
                </div>
            </div>
        </section>
    )
}