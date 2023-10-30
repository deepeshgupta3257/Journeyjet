import navLocationIcon from "./assets/search-nav/nav-location-icon.svg";
import navBikeIcon from "./assets/search-nav/nav-bike-icon.svg";
import navCalendarIcon from "./assets/search-nav/nav-calendar-icon.svg";
import navGroupIcon from "./assets/search-nav/nav-group-icon.svg";

import bigSurImg from "./assets/destinations/big-sur.svg";
import prescottImg from "./assets/destinations/prescott.svg";
import fortMayersImg from "./assets/destinations/fort-mayers.svg";
import tucsonImg from "./assets/destinations/tucson.svg";
import stJosephImg from "./assets/destinations/st-joseph.svg";

import monasteroImg from "./assets/hotels-restaurants/monastero.svg";
import grandHotelImg from "./assets/hotels-restaurants/grand-hotel.svg";
import oberoiImg from "./assets/hotels-restaurants/oberoi.svg";
import beverlyHillsImg from "./assets/hotels-restaurants/beverly-hills.svg";
import ratingThree from "./assets/hotels-restaurants/rating-3.svg";
import ratingFour from "./assets/hotels-restaurants/rating-4.svg";
import ratingFive from "./assets/hotels-restaurants/rating-5.svg";

import eastVillageImg from "./assets/travel/east-village.svg";
import brooklynImg from "./assets/travel/brooklyn.svg";

import sailingImg from "./assets/activities/sailing.svg";
import climbingImg from "./assets/activities/climbing.svg";
import skiingImg from "./assets/activities/skiing.svg";
import hikingImg from "./assets/activities/hiking.svg";

export const navItems = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Hotels",
  },
  /*{
    id: 3,
    name: "Restaurants",
  },*/
  {
    id: 4,
    name: "Packages",
  },
  {
    id: 5,
    name: "Destinations",
  },
  /*{
    id: 6,
    name: "Activities",
  },*/
  {
    id: 7,
    name: "Contact",
  },
  {
    id: 8,
    name: "Best Deals",
  },
  {
    id: 8,
    name: "Trip Planner",
  },
];

export const searchNavItems = [
  {
    id: 1,
    normalText: "Location",
    boldText: "Explore nearby destinations",
    icon: navLocationIcon,
  },
  {
    id: 2,
    normalText: "Activity",
    boldText: "All activities",
    icon: navBikeIcon,
  },
  {
    id: 3,
    normalText: "When",
    boldText: "Choose a Date",
    icon: navCalendarIcon,
  },
  {
    id: 4,
    normalText: "Guests",
    boldText: "1 guest",
    icon: navGroupIcon,
  },
];

export const destinations = [
  {
    id: 1,
    name: "Nahargarh Fort",
    location: "Jaipur,Rajasthan",
    image: bigSurImg,
  },
  {
    id: 2,
    name: "Hawa Mahal",
    location: "Jaipur,Rajasthan",
    image: prescottImg,
  },
  {
    id: 3,
    name: "Jantar Mantar, Jaipur",
    location: "Jaipur,Rajasthan",
    image: fortMayersImg,
  },
  {
    id: 4,
    name: "Albert Hall Museum",
    location: "Jaipur,Rajasthan",
    image: tucsonImg,
  },
  {
    id: 5,
    name: "The City Palace",
    location: "Jaipur,Rajasthan",
    image: stJosephImg,
  },
];

export const hotelsRestaurants = [
  {
    id: 1,
    name: "Rambag Palace Jaipur ",
    location: "Jaipur,Rajasthan",
    image: monasteroImg,
    ratingImage: ratingFive,
  },
  {
    id: 2,
    name: "Lemon Tree Hotels Jaipur",
    location: "Jaipur,Rajasthan",
    image: grandHotelImg,
    ratingImage: ratingFour,
  },
  {
    id: 3,
    name: "ITC Rajputana, a Luxury Collection Hotel, Jaipur",
    location: "Jaipur,Rajasthan",
    image: oberoiImg,
    ratingImage: ratingFour,
  },
  {
    id: 4,
    name: "The Lalit Jaipur",
    location: "Jaipur,Rajasthan",
    image: beverlyHillsImg,
    ratingImage: ratingThree,
  },
];

export const travelItems = [
  {
    id: 1,
    image: eastVillageImg,
    location: "Pink City Jaipur ",
    text: "Engage yourself in the Beauty of the pink of the pink city glamour.Explore forts like Amer & Jaigard fort and make your trip fantastic also visit biological park of jaipur to see various animals",
    calendarText: "4 Days Ago",
    userText: "Dev",
    
  },
  {
    id: 2,
    image: brooklynImg,
    location: "Lake city Udaipur",
    text: "Udaipur is set around a series of artificial lakes. It's known for its lavish royal residences, including the City Palace, which overlooks Lake Pichola. The City Palace is a monumental complex of 11 palaces, courtyards, and gardens. It's famed for its intricate peacock mosaics",
    calendarText: "Today",
    userText: "Dolly",
    
  },
];

export const activities = [
  {
    id: 1,
    name: "Sailing",
    image: sailingImg,
  },
  {
    id: 2,
    name: "Climbing",
    image: climbingImg,
  },
  {
    id: 3,
    name: "Skiing",
    image: skiingImg,
  },
  {
    id: 4,
    name: "Hiking",
    image: hikingImg,
  },
];

export const footerNav = [
  {
    id: 1,
    title: "Know Us",
    links: ["About Us", "Disclaimer","Privacy Policy", ""],
  },
  {
    id: 2,
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Contact Us"],
  },
  {
    id: 3,
    title: "",
    links: ["", ""," ", ""],
  },
];
