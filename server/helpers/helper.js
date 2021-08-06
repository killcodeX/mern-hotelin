import moment from 'moment';


const dateFormat = "DD-MM-YYYY";
// calculate number of nights

export const numberOfNights = (startDate, endDate) => {
  let date1 = moment(startDate, dateFormat);
  let date2 = moment(endDate, dateFormat);
  let numberOfNight = date2.diff(date1, 'days')

  return numberOfNight
};

export const calDiscount = (price, discount) => {
    return Math.floor((price * discount) / 100)
}

export const findTax = (price) => {
    return Math.floor((price * 18) / 100) 
}

export const calPrice = (totalNights, price, rooms, discount, tax) => {
    let price_rooms_nights = price * totalNights * rooms;
    return price_rooms_nights + tax - discount
}