'use client';
import './index.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SearchQuery } from '@/app/components';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Search = ({ section, regions, methods }) => {
    const [open, setOpen] = useState(false)
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        // fetch(`api/search`, { body: data })
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search">
            <div className="search-control">
                <input type="text" {...register("query")} placeholder='Введите ключевое слово номер документа или ИНН' />
                <div className="search-action">
                    <div className="search-setting">
                        <div className="button-control" onClick={() => setOpen(!open)}>
                            <SettingsOutlinedIcon />
                            <span>Расширенный поиск</span>
                        </div>
                    </div>
                    <button className='button-search'>Найти</button>
                </div>
            </div>
            {open ? <SearchQuery s={section} r={regions} m={methods} register={register} /> : null}
        </form>
    )
}
export default Search;