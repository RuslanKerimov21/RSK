'use client';
import Link from "next/link";
import { useMemo } from "react";
import { Breadcrumb } from "antd";
import { useSelector } from "react-redux";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
const Breadcrumbs = ({ data = [] }) => {
    const { bredcrumbs } = useSelector(state => state.navigation);
    const initalValue = [
        {
            title: <Link href="/">Главная</Link>,
            key: "Главная",
        }
    ]
    const items = useMemo(() => {
        const current = data.map((br, index) => {
            return {
                title: <Link href={br.link}>{br.title}</Link>,
                key: br.title + String(index),
            };
        });
        return [...initalValue, ...current];
    })
    return (
        <Breadcrumb
            separator=<NavigateNextOutlinedIcon style={{ fontSize: 15, marginTop: '-4px' }} />
            items={items}
        />
    )
}
export default Breadcrumbs;