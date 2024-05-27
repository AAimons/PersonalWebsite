import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="50"
      height="25"
      viewBox="0 0 150 70"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 0 70.5 L 12.6 70.5 L 19.8 53.6 L 52.9 53.6 L 60 70.5 L 73 70.5 L 42.2 0 L 30.8 0 L 0 70.5 Z M 85 70.5 L 117.4 70.5 A 42.312 42.312 0 0 0 128.028 69.258 C 137.326 66.835 143.078 60.906 143.294 51.832 A 22.388 22.388 0 0 0 143.3 51.3 L 143.3 51.1 A 18.748 18.748 0 0 0 142.422 45.167 C 140.951 40.729 137.714 37.828 133.334 35.71 A 37.368 37.368 0 0 0 129.4 34.1 A 18.301 18.301 0 0 0 137.606 26.461 C 138.41 24.908 138.985 23.122 139.245 21.056 A 20.466 20.466 0 0 0 139.4 18.5 L 139.4 18.3 C 139.4 13.7 137.8 9.8 134.7 6.7 C 131.246 3.246 126.374 1.212 120.082 0.656 A 41.874 41.874 0 0 0 116.4 0.5 L 85 0.5 L 85 70.5 Z M 117.5 59.6 L 97.1 59.6 L 97.1 40.4 L 116.6 40.4 A 31.521 31.521 0 0 1 121.531 40.753 C 125.526 41.389 128.235 42.869 129.7 45.088 A 8.373 8.373 0 0 1 131 49.8 L 131 50 C 131 56.4 125.9 59.6 117.5 59.6 Z M 113.9 30 L 97.1 30 L 97.1 11.4 L 114.8 11.4 C 118.405 11.4 121.259 12.07 123.307 13.319 A 7.718 7.718 0 0 1 127.1 20.3 L 127.1 20.5 A 8.78 8.78 0 0 1 125.854 25.228 C 123.86 28.433 119.588 30 113.9 30 Z M 24.3 42.7 L 36.3 14.7 L 48.4 42.7 L 24.3 42.7 Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
