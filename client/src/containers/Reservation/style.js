import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 52px 0;
`;

//  for booking info

export const CardWrapper = styled.div`
  border-radius: 6px;
  transition: box-shadow 0.3s;
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  padding: 20px;
  @media (max-width: 480px) {
    width: 300px;
    margin: 0 auto;
  }
`;

export const CardHeading = styled.h3`
  font-family: "Noto Serif", serif;
  display: block;
  color: #222;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: -0.5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eff3f8;
`;

export const HotelDetails = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const HotelImage = styled.img`
  border-radius: 1rem;
  object-fit: cover;
  width: 20%;
  height: 40%;
`;

export const HotelDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HotelName = styled.span`
  font-size: 20px;
  color: #333;
`;

export const HotelCity = styled.span`
  font-size: 18px;
`;

export const HotelRating = styled.span``;

export const BookingDetails = styled.div`
  display: flex;
  //justify-content:space-around;
  border-radius: 1.2rem;
  background: rgb(232, 243, 255);
  padding: 1rem;
  margin-bottom: 1.5rem;
  margin-top:30px;
`;

export const BookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  border-right: 1px solid rgb(119, 119, 119);
`;

export const BookingHead = styled.span`
  color: rgb(119, 119, 119);
`;

export const BookingDate = styled.span`
  ont-size: 1.6rem;
  padding: 0.2rem 0px;
  font-weight: bold;
`;
