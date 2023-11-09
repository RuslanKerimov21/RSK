import Link from 'next/link';
import { Breadcrumbs } from '../components';
export default function DocumentLayout({ children }) {
    const breadcrumb = [{ title: 'Документы', link: '/documents' }];
    return (
        <div className="container">
            <Breadcrumbs data={breadcrumb} />
            <h1 className="page-title">Документы</h1>
            <div className="page-wrap">
                <nav className="navigation-page">
                    <div className="navigation-header">Документы</div>
                    <ul className="navigation-page_list">
                        <li><Link href={`/documents/presentation`}>Презентации</Link></li>
                        <li><Link href={`/documents/reports`}>Отчеты</Link></li>
                    </ul>
                </nav>
                {children}
            </div>
        </div>
    )
}
