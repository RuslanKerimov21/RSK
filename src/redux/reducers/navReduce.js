import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    navlist: [
        {
            slug: 'Навигация',
            sluglists: [
                {
                    path: '/',
                    title: 'Главная',
                    list: [],
                },
                {
                    path: '/jobs',
                    title: 'Вакансии',
                    list: [],
                },
                {
                    path: 'procedures',
                    title: 'Закупки',
                    list: [],
                },
                {
                    path: 'about',
                    title: 'О компании',
                    list: [],
                },
                {
                    path: '/documents',
                    title: 'Документы',
                    list: [],
                },
                {
                    path: 'media-center',
                    title: 'Медиа - центр',
                    list: [],
                },
            ]
        },
    ],
    bredcrumbs: []
}
const navReduce = createSlice({
    name: 'navlist',
    initialState,
    reducers: {
        setNavlist(state, action) {
            state.navlist = action.payload;
        },
        setBreadcrumbs(state, action){
            state.bredcrumbs.push(action.payload)
        }
    }
})
export const { setNavlist, setBreadcrumbs } = navReduce.actions;
export default navReduce.reducer;