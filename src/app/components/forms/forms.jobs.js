'use client';
import './index.css';
import Link from 'next/link';
import { useState } from 'react';
import InputMask from "react-input-mask";
import { useSelector } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const FormJobs = () => {

    const [level, setLevel] = useState('');
    const [open, setOpen] = useState(false);
    const [works, setWorks] = useState(false);
    const { levels, workses } = useSelector(state => state.payloads);
    const { register, formState: { errors }, control, watch, handleSubmit } = useForm();

    watch((data) => {
        if (data.experience) setWorks(works === false ? true : false);
        return;
    })

    const onSubmit = (data) => {
        fetch('api/sendmail', { body: data })
        .then(res => console.log(res))
        .catch(errors => console.log(errors))
    }

    const getLevels = (item) => {
        setLevel(item);
        setOpen(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-jobs" id='antketa'>
            <div className="form-group">
                <div class="form-group_title">Готовность рассматривать рабочие вакансии</div>
                <div class="form-group_controls-field">
                    <input
                        id="readiness"
                        type="checkbox"
                        {...register("readiness")}
                    />
                    <label for="readiness">Готов(а) рассматривать</label>
                </div>
            </div>
            <div className="form-group">
                <div class="form-group_title">Основная информация</div>
                <div className="form-group_controls">
                    <div className="form-group_row">
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Фамилия Имя Отчество"
                            style={errors.contact && { border: "1px solid red" }}
                            {...register("contact", {
                                required: "Поле обязательно для заполнения",
                            })}
                        />
                        <Controller
                            name="date"
                            control={control}
                            render={({ field }) => (
                                <InputMask
                                    maskChar=""
                                    mask="99.99.9999"
                                    value={field.value}
                                    placeholder="Дата рождения"
                                    {...register("date", {
                                        required: "Поле обязательно для заполнения",
                                    })}
                                >
                                    {(props) => (
                                        <input
                                            className="jobs-input"
                                            style={errors.date && { border: "1px solid red" }}
                                            {...props}
                                        />
                                    )}
                                </InputMask>
                            )}
                        />
                    </div>
                    <div className="form-group_row">
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <InputMask
                                    maskChar=""
                                    value={field.value}
                                    mask="+7 (999) 999-99-99"
                                    placeholder="Контактный номер телефона"
                                    {...register("phone", {
                                        required: "Поле обязательно для заполнения",
                                    })}
                                >
                                    {
                                        (props) => (
                                            <input
                                                className="jobs-input"
                                                style={errors.phone && { border: "1px solid red" }}
                                                {...props}
                                            />
                                        )
                                    }
                                </InputMask>
                            )}
                        />
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="E - mail"
                            {...register("email")}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="form-group_title">
                    Образование
                </div>
                <div className="form-group_controls">
                    <div className="form-group_row">

                        <div className="levels">
                            <div className={`jobs-input ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                                <span>{level.length > 1 ? level : 'Высшее'}</span>
                                <input
                                    hidden
                                    type="text"
                                    value={level.length > 1 ? level : 'высшее'}
                                    {...register("level")}
                                />
                                <ExpandMoreIcon />
                            </div>
                            {open ?
                                <ul className="level-list">
                                    {levels.map((el, i) => (
                                        <li onClick={() => getLevels(el)} key={i}>
                                            <span>{el}</span>
                                        </li>
                                    ))}
                                </ul>
                                : null
                            }
                        </div>
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Название учебного заведения"
                            style={errors.education_name && { border: "1px solid red" }}
                            {...register("education_name", {
                                required: "Поле обязательно для заполнения",
                            })}
                        />
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Специальность"
                            {...register("specialization")}
                        />
                    </div>
                    <div className="form-group_row">
                        <Controller
                            name="ending_year"
                            control={control}
                            render={({ field }) => (
                                <InputMask
                                    maskChar=""
                                    mask="99.99.9999"
                                    value={field.value}
                                    placeholder="Год окончания"
                                    {...register("ending_year")}
                                >
                                    {(props) => (
                                        <input
                                            className="jobs-input"
                                            {...props}
                                        />
                                    )}
                                </InputMask>
                            )}
                        />
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Квалификация/профессия"
                            {...register("qualification")}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="form-group_title">
                    Город работы, должность и желаемый уровень дохода
                </div>
                <div className="form-group_controls">
                    <div className="form-group_row">
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Желаемый город работы"
                            style={errors.district_work && { border: "1px solid red" }}
                            {...register("district_work", {
                                required: "Поле обязательно для заполнения",
                            })}
                        />
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Желаемая должность"
                            {...register("position")}
                        />
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Желаемый уровень дохода, ₽"
                            {...register("income_level")}
                        />
                    </div>
                    <div className="form-group_controls-field">
                        <input
                            id="removal"
                            type="checkbox"
                            style={errors.removal && { border: "1px solid red" }}
                            {...register("removal")}
                        />
                        <label htmlFor="removal">Готов(а) к переезду</label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="form-group_title">
                    Опыт работы
                </div>
                <div className="form-group_controls">
                    <div className="form-group_controls-field">
                        <input
                            id="experience"
                            type="checkbox"
                            {...register("experience")}
                        />
                        <label htmlFor="experience">Нет опыта работы</label>
                    </div>
                    {workses.map((elem, i) => (
                        <div className="form-group_row" key={i}>
                            {elem.value.map((el) => (
                                <input
                                    type="text"
                                    disabled={works}
                                    className="jobs-input"
                                    placeholder={el.placeholder}
                                    style={errors.label ? { border: "1px solid red" } : { border: null }}
                                    {...register(el.label, {
                                        required: "Поле обязательно для заполнения",
                                    })}
                                />
                            ))}
                        </div>
                    ))}
                    {workses.length < 3 ?
                        <div className="button button-works">
                            Добавить
                        </div>
                        : null
                    }
                </div>
            </div>
            <div className="form-group">
                <div className="form-group_title">
                    Дополнительная информация
                </div>
                <div className="form-group_controls">
                    <div className="form-group_row">
                        <Controller
                            name="pasports_csv"
                            control={control}
                            render={({ field }) => (
                                <InputMask
                                    maskChar=""
                                    mask="99 99  999999"
                                    value={field.value}
                                    placeholder="Серия и номер паспорта"
                                    {...register("pasports_csv", {
                                        required: "Поле обязательно для заполнения",
                                    })}
                                >
                                    {(props) => (
                                        <input
                                            className="jobs-input"
                                            style={errors.pasports_csv && { border: "1px solid red" }}
                                            {...props}
                                        />
                                    )}
                                </InputMask>
                            )}
                        />
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Кем выдан паспорт"
                            {...register("issued")}
                        />
                        <Controller
                            name="date_issue"
                            control={control}
                            render={({ field }) => (
                                <InputMask
                                    maskChar=""
                                    mask="99.99.9999"
                                    value={field.value}
                                    placeholder="Дата выдачи"
                                    {...register("date_issue")}
                                >
                                    {(props) => (
                                        <input
                                            className="jobs-input"
                                            {...props}
                                        />
                                    )}
                                </InputMask>
                            )}
                        />
                    </div>
                    <div className="form-group_row">
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Адрес регистрации по паспорту"
                            style={errors.registration_address && { border: "1px solid red" }}
                            {...register("registration_address", {
                                required: "Поле обязательно для заполнения",
                            })}
                        />
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Адрес проживания"
                            {...register("residential_address")}
                        />
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="СНИЛС"
                            {...register("snils")}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="form-group_title">
                    Источник информации о вакансиях
                </div>
                <div className="form-group_controls">
                    <div className="form-group_row">
                        <input
                            type="text"
                            className="jobs-input"
                            placeholder="Откуда узнали о наших вакансиях?"
                            {...register("how_did_you_find_out")}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="form-group_title">
                    Резюме
                </div>
                <div className="form-group_controls">
                    <div className="form-group_row">
                        <input
                            hidden
                            id='file'
                            type="file"
                        />
                        <label className="file-reader" htmlFor="file"><ControlPointIcon /> Прикрепить резюме</label>
                    </div>
                </div>
            </div>
            <div className="form-group_controls-field">
                <input
                    id="politics"
                    type="checkbox"
                    {...register("politics", {
                        required: "Подтвердите согласие",
                    })}
                />
                <label htmlFor="politics" className="politics">
                    Согласен с <Link href='politics'>политикой конфиденциальности</Link>
                </label>
            </div>
            <div className="form-group_controls-field">
                <input
                    id="approval"
                    type="checkbox"
                    {...register("approval", {
                        required: "Подтвердите согласие",
                    })}
                />
                <label htmlFor="approval" className="approval">
                    Подтверждаю свое <Link href="approval">cогласие на обработку персональных данных </Link>
                </label>
            </div>
            <p className="row-footer_text">Мы действуем в соответствии с Федеральным Законом «О защите персональных данных» и Вы <br /> может быть уверены, что Ваши данные находятся под надежной защитой.</p>
            <div className="form-group_row footer">
                <button className="button" disabled={errors.approval && errors.politics}>
                    Отправить анкету
                </button>
            </div>
        </form>
    )
}
export default FormJobs;