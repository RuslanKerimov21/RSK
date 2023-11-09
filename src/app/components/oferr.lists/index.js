import './index.css';
import Link from 'next/link';
import Image from 'next/image';
import { CONFIG } from '@/app/config';
import arrow from '../../datalayer/img/icons/solar_alt-arrow-right-linear.svg';
const Lists = ({ data }) => {
    return (
        <ul className="lists-items">
            {data.map((el) => (
                <li key={el.title}>
                    <div className="list-item_info">
                        <img src={el.img.data ? CONFIG.file_url + el.img.data.attributes.url : "https://avatars.mds.yandex.net/get-bunker/50064/d72205e544198b757690858b7cf6245b7d8df050/orig"} alt={el.img.data ? el.img.data.attributes.name : 'no-pictures'} />
                        <span className='title'>{el.name}</span>
                        <span className='description'>{el.description}</span>
                    </div>
                    <Link href={el.path ? el.path : null}>Перейти <Image src={arrow} alt='arrow' /></Link>
                </li>
            ))}
        </ul>
    )
}
export default Lists;