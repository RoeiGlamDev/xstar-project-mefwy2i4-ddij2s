import { CSSProperties } from 'react';

/
 * Utility functions for luxery dark AirBNB application
 * This file includes functions and types specifically designed for 
 * enhancing the user experience of the luxery dark AirBNB website.
 */

/
 * A utility function to conditionally join class names together.
 * @param classes - An array of class names to be joined.
 * @returns A single string of class names.
 */
export const cn = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
};

/
 * Formatter functions for luxery dark AirBNB application
 */
export interface Formatter {
    formatPrice: (price: number) => string;
    formatDate: (date: Date) => string;
}

/
 * Implementation of the Formatter interface with business-specific logic.
 */
export const formatter: Formatter = {
    /
     * Format the price to include a dollar sign and two decimal places.
     * @param price - The price to be formatted.
     * @returns A formatted price string.
     */
    formatPrice: (price: number): string => {
        return $${price.toFixed(2)};
    },

    /
     * Format the date to a readable string in the context of luxery dark AirBNB.
     * @param date - The date to be formatted.
     * @returns A formatted date string.
     */
    formatDate: (date: Date): string => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    },
};

/
 * Styled component properties for luxery dark AirBNB application.
 */
export interface LuxeryDarkAirbnbStyles {
    container: CSSProperties;
    header: CSSProperties;
    button: CSSProperties;
}

/
 * Luxery dark AirBNB specific styles for a dark-themed website.
 */
export const styles: LuxeryDarkAirbnbStyles = {
    container: {
        backgroundColor: 'black',
        color: 'pink',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '20px',
    },
    button: {
        backgroundColor: 'pink',
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

/
 * Exports for luxery dark AirBNB application.
 */
export { cn, formatter, styles };