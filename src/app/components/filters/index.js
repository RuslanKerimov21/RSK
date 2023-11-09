'use client';
import './index.css';
import { getProcedures } from '@/api/api';
import { useEffect, useState } from 'react';
const Filters = ({ query }) => {
    
    const [slug, setSelect] = useState([])
    const [current, setCurrent] = useState('Все');

    const changedEvent = (item) => {
        const value = item.target.value;
        if (slug.includes(value)) {
            setSelect(slug.filter(item => item !== value));
            return;
        }
        setCurrent(value);
        setSelect([value]);
    }

    useEffect(() => {
        const currentslug = slug.find((i) => i === current)
        if (currentslug === "Все") {
            getProcedures({ slug: [] })
        }
        else {
            getProcedures({ slug: slug })
        }
    }, [slug])

    return (
        <div className="filters">
            <ul className="filters-list">
                {query.map((el) => (
                    <li key={el.title}>
                        <input
                            hidden
                            type="radio"
                            name={el.title}
                            value={el.title}
                            id={`${el.title}`}
                            onChange={changedEvent}
                            checked={el.title === current}
                        />
                        <label htmlFor={`${el.title}`}>
                            {el.title}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Filters;