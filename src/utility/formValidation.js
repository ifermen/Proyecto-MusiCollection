

export const isRequired = value => value.trim() === '' ? false : true;

export const isBetween = (value,min,max) => value >= min && value <= max;

export const isNumber = (value) =>  !isNaN(value);

export const isNotYearInTheFuture = year => year <= new Date().getFullYear();

export const isDateInThePast = dateString => {
    const date = new Date(dateString);
    date.setHours(0,0,0,0);
    const currentDate = new Date();
    currentDate.setHours(0,0,0,0);

    return date < currentDate;
}