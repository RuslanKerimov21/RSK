import Link from 'next/link';
import { Pagination } from 'antd';
import { CONFIG } from '../../config';
import { getPublications } from '@/api/api';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { dateParsing, getFormat } from '../../context/global.context';
export const metadata = {
    title: 'Отчеты',
    description: 'Отчеты компании РСК',
}
export default async function Reports() {
    const reports = await getPublications({ params: 'Отчеты' })
    return (
        <div className="documents-table">
            <div className="table-wrap">
                <div className="documents-table_header">
                    <div className="table-header_row">Отчет, период</div>
                    <div class="table-header_row">Файл</div>
                </div>
                <ul className="documents-list">
                    {reports.map((elem) => (
                        elem.publication.map((el, i) => (
                            <li key={i}>
                                <div class="document-content_row">
                                    <div class="row-info">
                                        <Link href={`${CONFIG.file_url + el.attributes.document.data.attributes.url}`}>
                                            {el.attributes.title}
                                        </Link>
                                        <span class="document-date">{dateParsing(el.attributes.createdAt)}</span>
                                    </div>
                                </div>
                                <div class="document-content_row">
                                    <div class="document-detail_file">
                                        <Link href={`${CONFIG.file_url + el.attributes.document.data.attributes.url}`}>
                                            <span class="document-detail_file-icon">
                                                {getFormat(el.attributes.document.data.attributes.ext)}
                                            </span>
                                            <span class="document-detail_file-size">{3} мб</span>
                                        </Link>
                                    </div>
                                    <div class="docement-detail_mail">
                                        <Link href={`mailto:`}><MailOutlineIcon /></Link>
                                    </div>
                                </div>
                            </li>
                        ))
                    ))}
                </ul>
            </div>
            <Pagination
                current={1}
                total={1 * 10}
                defaultCurrent={1}
                style={{ margin: '30px 0', display: 'flex', justifyContent: 'center' }}
            />
        </div>
    )
}