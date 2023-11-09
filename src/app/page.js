import Link from "next/link";
import Image from "next/image";
import { Lists, Slider } from "@/app/components";
import { dateParsing } from "./context/global.context";
import { getSlide, getLists, getNews } from "@/api/api";
import arrow from './datalayer/img/icons/solar_alt-arrow-right-linear.svg';
export default async function Home() {
  const news = await getNews({})
  const lists = await getLists()
  const slider = await getSlide()
  return (
    <>
      <section className="offer">
        <Slider items={slider} />
      </section>
      <section className="lists">
        <div className="container">
          {lists.length >= 1 ? <Lists data={lists} /> : null}
        </div>
      </section>
      {news.length >= 1 ?
        <section className="news">
          <div className="container">
            <div className="news-head">
              <h2 className='section-title'>Новости</h2>
              <Link href='news'>Все новости <Image src={arrow} alt="arrow" /></Link>
            </div>
            <ul className="news-list">
              {news.map((el) => (
                <li className="news-item">
                  <Link href={`news/${el.id}`}>
                    <div className="news-date">
                      {dateParsing(el.publication)}
                    </div>
                    <div className="news-description">
                      {el.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        : null
      }
      <section className="about-us_history">
        <div className="container">
          <div className="history-items">
            <div className="history-item">
              <div className="history-count">
                10 лет
              </div>
              <div className="history-text">
                Успешной деятельности
              </div>
            </div>
            <div className="history-item">
              <div className="history-count">
                1000+
              </div>
              <div className="history-text">
                Довольных клиентов
              </div>
            </div>
            <div className="history-item">
              <div className="history-count">
                200+
              </div>
              <div className="history-text">
                Завершённых строительных объектов
              </div>
            </div>
            <div className="history-item">
              <div className="history-count">
                100%
              </div>
              <div className="history-text">
                Выполнение проектов в срок
              </div>
            </div>
            <div className="history-item">
              <div className="history-count">
                50
              </div>
              <div className="history-text">
                Лучших специалистов в индустрии
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="investors">
        <div className="container">
          <h2 className="section-title">Инвесторам и акционерам</h2>
          <div className="investors-items">
            <div className="investors-item">
              <div className="investors-title">Инвесторам</div>
              <ul className="investors-list">
                <li>Подготовка и реализация проектов строительства (реконструкции, комплексного обустройства) автомобильных дорог на основе механизмов частного партнерства.</li>
              </ul>
            </div>
            <div className="investors-item">
              <div className="investors-title">Производственные возможности</div>
              <ul className="investors-list">
                <li>
                  <div className="indicator-value_box">
                    <div className="indicator-label">Более</div>
                    <div className="indicator-value">6000+ </div>
                    <div className="indicator-label">квалифицированных сотрудников</div>
                  </div>
                </li>
                <li>
                  <div className="indicator-value_box">
                    <div className="indicator-value">10 000+</div>
                    <div className="indicator-label">Строительной техники</div>
                  </div>
                </li>
                <li>
                  <div className="indicator-label">Собственные производственные мощности</div>
                </li>
              </ul>
            </div>
            <div className="investors-item">
              <div className="investors-title">Стратегии 2024</div>
              <ul className="investors-list">
                <li>
                  <div className="indicator-value_box">
                    <div className="indicator-value">+1,25к</div>
                    <div className="indicator-label">млрд рублей EBITDA</div>
                  </div>
                  <div className="indicator-title">Целевой структурный эффект реализации стратегии</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
