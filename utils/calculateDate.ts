export const calculateDate = (date : string) => {
    const projectPublishDate = new Date(date);
    const time1 = projectPublishDate.getDay() + projectPublishDate.getMonth() + projectPublishDate.getFullYear();
    const currentDate = new Date();
    const time2 = currentDate.getDay() + currentDate.getMonth() + currentDate.getFullYear();
    return time1 == time2 ? "today" : time1 < time2 ? "yesterday" : date;
}