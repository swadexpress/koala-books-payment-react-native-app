import {Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

export const cardPerSlide = 1;
export const cardPadding = 0;
export const paddingAround = cardPadding * 1; // slide horizontal padding
export const cardBetweenPadding = cardPadding * (cardPerSlide - 1);
export const totalPadding = paddingAround + cardBetweenPadding;
export const imageWidth = (screenWidth - totalPadding) / cardPerSlide;
export const imageHeight = imageWidth / (2 / 3);
