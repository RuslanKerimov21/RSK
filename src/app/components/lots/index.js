import './index.css';
import Link from 'next/link';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
const Lots = ({ childrens }) => {
    return (
        <div className="lots">
            <ul className="lot-list">
                {childrens.map((el) => (
                    <li className="lot-item" key={el.title}>
                        <div className="lot-content_left">
                            <div className="lot-header">
                                <div className="lot-id">
                                    <Link href={`procedures/${el.procedure_id}`}>{el.procedure_id}</Link>
                                </div>
                                <div className="lot-section">{el.platform}</div>
                            </div>
                            <div className="procedure-name">
                                <Link href={`/procedures/${el.procedure_id}`}>
                                    {el.title}
                                </Link>
                            </div>
                            <div className="procedure-organisator">
                                {el.organizer}
                            </div>
                            {/* {el.tags.length >= 1 ?
                                <div className="procedures-tag">
                                    <ul className="tag-list">
                                        {el.tags.map((elem) => (
                                            <li className="tag-item">
                                                <Link href={`${elem.attributes.title}`}>{elem.attributes.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                : null
                            } */}
                        </div>
                        <div className="lot-content_right">
                            <div className="method-conducting">
                                {el.methods_conducting}
                            </div>
                            <div className="price">
                                <p>{el.price ? el.price.toLocaleString() : null}</p>
                                <span>{el.currency}</span>
                            </div>
                            <div className="region">
                                <FmdGoodOutlinedIcon />
                                {el.region}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Lots;