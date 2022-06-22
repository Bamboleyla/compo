import { FC } from "react";
import styles from "./card.module.scss";

export const Card: FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <button>
            <span>ON</span>
          </button>
        </div>
      </div>
      <div className={styles.views}>
        <svg
          width="32"
          height="22"
          viewBox="0 0 32 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.8007 0.854431C12.311 0.858414 8.92177 1.86638 6.16572 3.71989C3.40967 5.5734 1.44307 8.16737 0.575012 11.0941C1.45048 14.0144 3.42027 16.6008 6.17564 18.4477C8.93101 20.2945 12.3162 21.2976 15.8007 21.2996C19.2904 21.2957 22.6796 20.2877 25.4356 18.4342C28.1917 16.5807 30.1583 13.9867 31.0263 11.06C30.1509 8.13962 28.1811 5.5533 25.4257 3.70641C22.6703 1.85953 19.2851 0.85646 15.8007 0.854431V0.854431ZM15.8007 4.26197C17.8881 4.26197 19.89 4.97998 21.366 6.25805C22.842 7.53613 23.6713 9.26957 23.6713 11.077C23.6713 12.8845 22.842 14.6179 21.366 15.896C19.89 17.1741 17.8881 17.8921 15.8007 17.8921C13.7133 17.8921 11.7113 17.1741 10.2353 15.896C8.7593 14.6179 7.93008 12.8845 7.93008 11.077C7.93008 9.26957 8.7593 7.53613 10.2353 6.25805C11.7113 4.97998 13.7133 4.26197 15.8007 4.26197V4.26197Z"
            fill="white"
            fill-opacity="0.76"
          />
          <path
            d="M19.7359 11.077C19.7359 11.9808 19.3213 12.8475 18.5833 13.4865C17.8453 14.1256 16.8444 14.4846 15.8006 14.4846C14.7569 14.4846 13.756 14.1256 13.018 13.4865C12.28 12.8475 11.8654 11.9808 11.8654 11.077C11.8654 10.1733 12.28 9.30658 13.018 8.66754C13.756 8.0285 14.7569 7.66949 15.8006 7.66949C16.8444 7.66949 17.8453 8.0285 18.5833 8.66754C19.3213 9.30658 19.7359 10.1733 19.7359 11.077Z"
            fill="white"
            fill-opacity="0.76"
          />
        </svg>
        <div className={styles.counter}>1k</div>
      </div>
    </div>
  );
};