'use client';
import { useState } from "react";
import Markdown from 'react-markdown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Accordion = ({ data, current }) => {
    const [selected, setSelected] = useState(null);
    const [sub_selected, setSubSeleted] = useState(null)
    const clickedOpen = (el) => {
        if (selected == el) {
            return setSelected(el)
        }
        setSelected(el)
    }
    const handleSubOpen = (e) => {
        const el = e.currentTarget.attributes['tag'].value;
        if (open == el) {
            return setSubSeleted(el)
        }
        setSubSeleted(el)
    }
    return (
        <>
            <div className="qusetions-accordion">
                <ul className="qusetions-list">
                    {data.filter((el) => el.title === current).map((elem) => (
                        elem.accordion.data.map((el, i) => (
                            <li key={i} className={`${selected == el ? 'question-item active' : 'question-item'}`} onClick={() => setSelected(el)}>
                                <div className="qusetion-title">{el.attributes.title} <ExpandMoreIcon /></div>
                                {selected == el ?
                                    <div className="question-content">
                                        <Markdown>{el.attributes.content}</Markdown>
                                    </div>
                                    : null
                                }
                            </li>
                        ))
                    ))}
                </ul>
            </div>
            <div className="qusetion-accoridon_mobile">
                <ul className="qusetions-list">
                    {data.map((el, i) => (
                        <li key={i} className={`${el.title == current ? "active question-item" : "question-item"}`} onClick={() => clickedOpen(el)}>
                            <div className="qusetion-title">{el.title}</div>
                            {selected == el ?
                                <ul className="subgroup-questions_list">
                                    {el.accordion.data.map((el, i) => (
                                        <li key={i} tag={el.attributes.title} onClick={(e) => handleSubOpen(e)}>
                                            <div className="qusetion-title">{el.attributes.title} <ExpandMoreIcon /></div>
                                            {sub_selected == el.attributes.title ?
                                                <div className="question-content">
                                                    <Markdown>{el.attributes.content}</Markdown>
                                                </div>
                                                : null
                                            }
                                        </li>
                                    ))}
                                </ul>
                                : null
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Accordion;