import { ReactNode } from 'react';

/
 * Represents a property listed on luxery dark AirBNB.
 * @interface Property
 * @property {string} id - Unique identifier for the property.
 * @property {string} title - The title or name of the property.
 * @property {string} description - A detailed description of the property.
 * @property {string} location - The geographical location of the property.
 * @property {number} price - The nightly price for booking the property.
 * @property {string} imageUrl - URL of the property image.
 * @property {boolean} isAvailable - Availability status of the property.
 */
export interface Property {
    id: string;
    title: string;
    description: string;
    location: string;
    price: number;
    imageUrl: string;
    isAvailable: boolean;
}

/
 * Represents a user of luxery dark AirBNB platform.
 * @interface User
 * @property {string} id - Unique identifier for the user.
 * @property {string} name - Full name of the user.
 * @property {string} email - Email address of the user.
 * @property {string} password - Encrypted password of the user.
 * @property {string[]} bookedProperties - Array of property IDs booked by the user.
 */
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    bookedProperties: string[];
}

/
 * Represents a booking made by a user on luxery dark AirBNB.
 * @interface Booking
 * @property {string} id - Unique identifier for the booking.
 * @property {string} userId - ID of the user who made the booking.
 * @property {string} propertyId - ID of the booked property.
 * @property {Date} checkInDate - Check-in date for the booking.
 * @property {Date} checkOutDate - Check-out date for the booking.
 * @property {number} totalPrice - Total price for the booking.
 */
export interface Booking {
    id: string;
    userId: string;
    propertyId: string;
    checkInDate: Date;
    checkOutDate: Date;
    totalPrice: number;
}

/
 * Represents the configuration for luxery dark AirBNB application.
 * @interface AppConfig
 * @property {string} brandName - The brand name of the application.
 * @property {string} primaryColor - Primary color used in the application.
 * @property {string} secondaryColor - Secondary color used in the application.
 * @property {string} theme - Theme of the application indicating dark mode.
 */
export interface AppConfig {
    brandName: string;
    primaryColor: string;
    secondaryColor: string;
    theme: string;
}

/
 * The configuration object for luxery dark AirBNB, representing the brand and color scheme.
 */
export const appConfig: AppConfig = {
    brandName: "luxery dark AirBNB",
    primaryColor: "#000000", // Black
    secondaryColor: "#FF69B4", // Pink
    theme: "dark",
};

/
 * Represents the response from an API to fetch properties for luxery dark AirBNB.
 * @interface PropertyResponse
 * @property {Property[]} properties - Array of properties available.
 * @property {number} total - Total number of properties available.
 */
export interface PropertyResponse {
    properties: Property[];
    total: number;
}

/
 * Represents the response from an API to fetch users for luxery dark AirBNB.
 * @interface UserResponse
 * @property {User[]} users - Array of users registered.
 * @property {number} total - Total number of registered users.
 */
export interface UserResponse {
    users: User[];
    total: number;
}

/
 * Represents the response from an API to fetch bookings for luxery dark AirBNB.
 * @interface BookingResponse
 * @property {Booking[]} bookings - Array of bookings made.
 * @property {number} total - Total number of bookings made.
 */
export interface BookingResponse {
    bookings: Booking[];
    total: number;
}