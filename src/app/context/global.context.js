import TabIcon from '@mui/icons-material/Tab';
import FitbitIcon from '@mui/icons-material/Fitbit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
export const getPayloading = ({ payload, ref, useState, action }) => {
    if (!payload) return;
    const click = (e) => {
        if (!ref.current) return;
        if (!ref.current.contains(e.target)) {
            useState(action())
        }
    }
    document.addEventListener('click', click)
    return () => {
        document.removeEventListener('click', click)
    }
}
export const getCloseds = ({ payload, ref, dispatch, action }) => {
    if (!payload) return;
    const click = (e) => {
        if (!ref.current) return;
        if (!ref.current.contains(e.target)) {
            dispatch(action())
            console.log('кликнули за пределы блока')
        }
    }
    document.addEventListener('click', click)
    return () => {
        document.removeEventListener('click', click)
    }
}
export const dateParsing = (date) => {
    const event = new Date(`${date}`)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return event == 'Invalid Date' ? 'Неверный формат даты' : event.toLocaleDateString(undefined, options)
}
export const parsDescription = (text) => {
    let slice = text.slice(0, 100);
    if (slice.length < text.length) {
        return slice += '...';
    }
}
export const getExtc = (extc) => {
    let bg;
    switch (extc) {
        case '.jpg':
            bg = "red"
            break;
        case '.example':
            bg = "#1F66FF";
            break;
        case '.zip':
            bg = "#f08d24";
            break;
        default:
    }
    return bg;
}
export const getFormat = (extc) => {
    let icon;
    switch (extc) {
        case '.doc':
            icon = <TabIcon />;
            break;
        case '.example':
            icon = <FitbitIcon />;
            break;
        case '.pdf':
            icon = <PictureAsPdfIcon />;
            break;
        default:
    }
    return icon;
}