export default function getCurrentDate(localTime){
    const date = new Date(localTime);
    return `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`
}