import React from "react";
import { Heading } from "../../components/UI/Heading";
import Details from './details';
import Review from './review';
import ReservationForm from './ReservationForm'
import {
  SectionWrapper,
  ImageWrapper,
  HotelImage,
  DescWrapper,
  HeadText,
} from "./singleStyle";

import { data } from "./fakeData";

export const SingleHotel = () => {
    
  console.log(data);
  return (
    <SectionWrapper>
      <ImageWrapper>
        <HotelImage src={data.image} alt={data.name} />
      </ImageWrapper>
      <div className="container">
        <div className="row mt-5 position-relative">
          <div className="col-md-7 col-sm-12">
            <Heading content={data.name} />
            <DescWrapper>{data.description}</DescWrapper>
            <HeadText>Details</HeadText>
              <Details details={data.details}/>
            <HeadText>Reviews</HeadText>
            {
              data.reviews.map(item => {
                return(
                  <Review key={item.id} data={item} />
                )
              })
            }
          </div>
          <div className="col-md-5 col-sm-12 p-5"><ReservationForm price={data.price}/></div>
        </div>
      </div>
    </SectionWrapper>
  );
};
