import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxery dark AirBNB website.
 * This hook provides a mechanism to animate elements for a high-end user experience
 * that reflects the luxury and sophistication of the brand.
 *
 * @param {string} animationClass - The CSS class to apply for the animation.
 * @param {boolean} isVisible - A boolean that determines if the animation should be triggered.
 * @returns {React.RefObject<HTMLElement>} - A ref to attach to the animated element.
 */
export function useAnimation(animationClass: string, isVisible: boolean) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVisible && elementRef.current) {
      // Trigger the animation by adding the designated class
      elementRef.current.classList.add(animationClass);
      
      // Optional: Remove the class after animation duration
      const duration = getComputedStyle(elementRef.current)
        .getPropertyValue('animation-duration');
      const timeout = parseFloat(duration) * 1000; // Convert to milliseconds

      const timer = setTimeout(() => {
        elementRef.current?.classList.remove(animationClass);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [isVisible, animationClass]);

  return elementRef;
}

/
 * Interface defining the properties for animated components in luxery dark AirBNB.
 */
export interface AnimatedComponentProps {
  animationClass: string;
  isVisible: boolean;
}

/
 * Function to generate a unique animation class name.
 * This can be expanded to include specific types of animations based on user interactions.
 *
 * @param {string} base - The base name for the animation.
 * @returns {string} - A unique animation class name.
 */
export function generateAnimationClass(base: string): string {
  return ${base}-animation luxery-dark-airbnb;
}