'use client';
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const AccordionAbbout = ({ data }) => {
    const [selected, setSelected] = useState(null);
    const clickedOpen = (el) => {
        if (selected == el) {
            return setSelected(el)
        }
        setSelected(el)
    }
    return (
        <div className="about-accordion">
            <ul className="about-accordion_list">
                {data.map((el, i) => (
                    <li key={i} onClick={() => clickedOpen(el)} className="about-accordion_item">
                        <div className="about-accordion_title">{el.title}<ExpandMoreIcon /></div>
                        {selected == el ?
                            <div className="about-accordion_content">
                                {el.info.map((el, i) => (
                                    <ul key={i} className="abbout-accordion_content-list">
                                        {el.list.map((el, i) => (
                                            <li key={i}>{el.title}</li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                            : null
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default AccordionAbbout;