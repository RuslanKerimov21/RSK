'use client';
import './index.css';
import { useState } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const SearchQuery = ({ s, r, m, register }) => {
    const [select, setSelect] = useState(false);
    const [region, setRegion] = useState(false);
    const [methods, setMethods] = useState(false);
    const [contragent, setContragent] = useState(false);
    const [regions, setRegions] = useState('Москва')
    const [meth, setMeth] = useState('Запрос котировок');
    const [section, setSection] = useState('Государственные закупки(44-ФЗ)');

    const sectionChanged = (el) => {
        setSection(el.target.value)
        console.log(section)
    }
    const setMethodChanged = (el) => {
        setMeth(el.target.value)
        console.log(meth)
    }
    const setRegionChaged = (el) => {
        setRegions(el.target.value)
        console.log(regions)
    }
    return (
        <div className="search-query_params">
            <div className={`query-options ${select ? 'open' : ''}`} onClick={() => setSelect(!select)}>
                <span className="label">
                    Тороговые секции
                </span>
                <div className="text-box">
                    <span style={section.length >= 1 ? { color: 'black' } : { color: '#c7cdd2' }}>
                        {section.length < 1 ? 'Все торговые секции' : section}
                    </span>
                    <KeyboardArrowDownOutlinedIcon />
                </div>
                {select ?
                    <ul className="select-options" onClick={(e) => e.stopPropagation()}>
                        {s.map((el, i) => (
                            <li key={i}>
                                <input
                                    type="radio"
                                    value={el.title}
                                    id={`${el.title}`}
                                    {...register("section")}
                                    onChange={sectionChanged}
                                    checked={el.title === section}
                                />
                                <label htmlFor={`${el.title}`}>
                                    {el.title}
                                </label>
                            </li>
                        ))}
                    </ul>
                    : null
                }
            </div>
            <div className={`query-options ${methods ? 'open' : ''}`} onClick={() => setMethods(!methods)}>
                <span className="label">Способ проведения</span>
                <div className="text-box">
                    <span style={meth.length >= 1 ? { color: 'black' } : { color: '#c7cdd2' }}>
                        {meth.length < 1 ? 'Выбрать способ' : meth}
                    </span>
                    <KeyboardArrowDownOutlinedIcon />
                </div>
                {methods ?
                    <ul className="select-options" onClick={(e) => e.stopPropagation()}>
                        {m.map((el, i) => (
                            <li key={i}>
                                <input
                                    type="radio"
                                    value={el.title}
                                    id={`${el.title}`}
                                    {...register("method")}
                                    onChange={setMethodChanged}
                                    checked={el.title === meth}
                                />
                                <label htmlFor={`${el.title}`}>
                                    {el.title}
                                </label>
                            </li>
                        ))}
                    </ul>
                    : null
                }
            </div>
            <div className={`query-options ${region ? 'open' : ''}`} onClick={() => setRegion(!region)}>
                <span className="label">Регион</span>
                <div className="text-box">
                    <span style={regions.length >= 1 ? { color: 'black' } : { color: '#c7cdd2' }}>
                        {regions.length < 1 ? 'Выбрать регион' : regions}
                    </span>
                    <KeyboardArrowDownOutlinedIcon />
                </div>
                {region ?
                    <ul className="select-options" onClick={(e) => e.stopPropagation()}>
                        {r.map((el, i) => (
                            <li key={i}>
                                <input
                                    type="radio"
                                    value={el.title}
                                    id={`${el.title}`}
                                    {...register("regions")}
                                    onChange={setRegionChaged}
                                    checked={el.title === regions}
                                />
                                <label htmlFor={`${el.title}`}>
                                    {el.title}
                                </label>
                            </li>
                        ))}
                    </ul>
                    : null
                }
            </div>
            <div className={`query-options ${contragent ? 'open' : ''}`} onClick={() => setContragent(!contragent)}>
                <span className="label">Заказчик или организатор</span>
                <div className="text-box">
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}
export default SearchQuery;