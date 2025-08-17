import { Theme } from './theme';

// Constants for luxery dark AirBNB application
export const BRAND_NAME = "luxery dark AirBNB";
export const PRIMARY_COLOR = "#ff69b4"; // Pink
export const SECONDARY_COLOR = "#000000"; // Black

// URL Endpoints
export const API_URL = "https://api.luxerydarkairbnb.com/v1";
export const IMAGE_URL = "https://images.luxerydarkairbnb.com";

// Application Configuration
export const CONFIG = {
    appName: BRAND_NAME,
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
    theme: Theme.DARK,
    maxListings: 100,
    currency: "USD",
};

// Interface for Property Listing
export interface PropertyListing {
    id: string;
    title: string;
    description: string;
    pricePerNight: number;
    location: string;
    images: string[];
    amenities: string[];
    rating: number;
}

// Interface for User
export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    bookings: Booking[];
}

// Interface for Booking
export interface Booking {
    id: string;
    propertyId: string;
    userId: string;
    checkInDate: Date;
    checkOutDate: Date;
    totalPrice: number;
}

// Sample Data
export const SAMPLE_PROPERTIES: PropertyListing[] = [
    {
        id: "1",
        title: "Luxurious Modern Villa",
        description: "A stunning modern villa with breathtaking views and high-end amenities.",
        pricePerNight: 350,
        location: "Beverly Hills, CA",
        images: [${IMAGE_URL}/property1.jpg],
        amenities: ["Pool", "WiFi", "Parking", "Air Conditioning"],
        rating: 4.8,
    },
    {
        id: "2",
        title: "Elegant Penthouse Suite",
        description: "Experience luxury in our elegant penthouse suite located in the heart of the city.",
        pricePerNight: 500,
        location: "New York, NY",
        images: [${IMAGE_URL}/property2.jpg],
        amenities: ["Gym", "Spa", "Free Breakfast"],
        rating: 4.9,
    },
];

// JSDoc Comments
/
 * @module constants
 * @description Constants and configuration for the luxery dark AirBNB application.
 * This module contains brand-specific constants, configuration settings, and TypeScript interfaces
 * relevant to the property listings and user data structures.
 */