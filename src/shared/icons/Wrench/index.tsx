import { SVGProps, Ref, forwardRef, memo } from "react";
import { ThemeIcons } from "../types";

interface Props extends SVGProps<SVGSVGElement> {
  theme?: ThemeIcons;
}

const SvgComponent = (
  { theme = "light", ...props }: Props,
  ref: Ref<SVGSVGElement>,
) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M21.2588 6.46874C21.2133 6.3563 21.1412 6.25656 21.0487 6.1781C20.9562 6.09963 20.8461 6.04477 20.7277 6.01822C20.6093 5.99167 20.4863 5.99423 20.3692 6.02567C20.252 6.05711 20.1442 6.1165 20.0551 6.19874L16.2769 9.6853L14.6616 9.33843L14.3147 7.72312L17.8013 3.94499C17.8836 3.85583 17.9429 3.74805 17.9744 3.63089C18.0058 3.51374 18.0084 3.39071 17.9818 3.27235C17.9553 3.15399 17.9004 3.04383 17.822 2.95133C17.7435 2.85883 17.6438 2.78674 17.5313 2.74124C16.5066 2.32671 15.3957 2.17019 14.2963 2.28545C13.1969 2.4007 12.1426 2.78419 11.2261 3.40223C10.3096 4.02026 9.55895 4.85393 9.04003 5.82998C8.52111 6.80602 8.24984 7.89458 8.25006 8.99999C8.24885 9.93344 8.44034 10.8571 8.81256 11.7131L3.16787 16.5937C3.15381 16.605 3.14068 16.6181 3.12756 16.6303C2.56489 17.193 2.24878 17.9561 2.24878 18.7519C2.24878 19.1459 2.32639 19.536 2.47717 19.9C2.62795 20.2641 2.84895 20.5948 3.12756 20.8734C3.40617 21.152 3.73692 21.373 4.10094 21.5238C4.46496 21.6746 4.85511 21.7522 5.24912 21.7522C6.04486 21.7522 6.80801 21.4361 7.37068 20.8734C7.38287 20.8612 7.396 20.8472 7.40725 20.8341L12.2869 15.1875C13.3148 15.6387 14.439 15.8264 15.5578 15.7337C16.6765 15.6409 17.7545 15.2706 18.694 14.6563C19.6336 14.042 20.4051 13.203 20.9387 12.2153C21.4723 11.2277 21.7512 10.1226 21.7501 8.99999C21.7515 8.13241 21.5847 7.27279 21.2588 6.46874ZM15.0001 14.25C14.1123 14.2488 13.2393 14.023 12.4622 13.5937C12.3117 13.5106 12.1372 13.4817 11.9678 13.5119C11.7985 13.5421 11.6447 13.6296 11.5322 13.7597L6.29162 19.8291C6.00803 20.0985 5.6304 20.2465 5.23926 20.2415C4.84812 20.2365 4.47441 20.0788 4.1978 19.8022C3.9212 19.5256 3.7636 19.1519 3.75859 18.7608C3.75358 18.3696 3.90157 17.992 4.171 17.7084L10.2357 12.4687C10.366 12.3562 10.4536 12.2022 10.4839 12.0327C10.5141 11.8632 10.485 11.6884 10.4016 11.5378C9.92352 10.6731 9.69915 9.69101 9.75431 8.70447C9.80946 7.71793 10.1419 6.76698 10.7134 5.96095C11.2849 5.15491 12.0723 4.52652 12.985 4.14801C13.8977 3.76949 14.8987 3.65623 15.8729 3.82124L12.9479 6.99093C12.8665 7.07922 12.8075 7.18575 12.7758 7.30158C12.7442 7.41741 12.7408 7.53915 12.766 7.65655L13.2966 10.125C13.327 10.2662 13.3974 10.3956 13.4995 10.4977C13.6017 10.5998 13.7311 10.6703 13.8722 10.7006L16.3426 11.2312C16.46 11.2564 16.5817 11.253 16.6975 11.2214C16.8134 11.1897 16.9199 11.1308 17.0082 11.0494L20.1779 8.12437C20.3042 8.87719 20.2651 9.6485 20.0632 10.3847C19.8612 11.1208 19.5014 11.8041 19.0086 12.3871C18.5158 12.9701 17.9019 13.4388 17.2097 13.7605C16.5174 14.0822 15.7634 14.2492 15.0001 14.25Z"
        fill="#344054"
        opacity={theme === "dark" ? 0 : 1}
      />
      <path
        d="M21.75 9.00006C21.7511 10.1226 21.4723 11.2278 20.9387 12.2154C20.4051 13.2031 19.6335 14.042 18.694 14.6564C17.7544 15.2707 16.6765 15.641 15.5577 15.7337C14.439 15.8265 13.3148 15.6388 12.2869 15.1876L7.40627 20.8332C7.39502 20.8463 7.3819 20.8604 7.36971 20.8726C6.80703 21.4352 6.04389 21.7513 5.24815 21.7513C4.4524 21.7513 3.68926 21.4352 3.12658 20.8726C2.56391 20.3099 2.2478 19.5467 2.2478 18.751C2.2478 17.9553 2.56391 17.1921 3.12658 16.6294C3.13971 16.6172 3.15283 16.6041 3.1669 16.5929L8.81252 11.7132C8.30671 10.5561 8.13527 9.28048 8.31766 8.03094C8.50004 6.78139 9.02896 5.60797 9.8444 4.64377C10.6598 3.67957 11.7292 2.96319 12.9311 2.57588C14.133 2.18858 15.4194 2.14585 16.6444 2.45256C16.7707 2.48421 16.8865 2.54818 16.9806 2.63819C17.0746 2.72819 17.1437 2.84113 17.1808 2.96589C17.218 3.09066 17.2221 3.22295 17.1926 3.34976C17.1632 3.47656 17.1012 3.59352 17.0128 3.68912L13.5 7.50006L14.0306 9.97037L16.5 10.5001L20.311 6.98256C20.4066 6.8942 20.5235 6.83224 20.6503 6.80278C20.7771 6.77333 20.9094 6.77739 21.0342 6.81456C21.1589 6.85173 21.2719 6.92074 21.3619 7.0148C21.4519 7.10885 21.5159 7.22472 21.5475 7.351C21.6821 7.89035 21.7501 8.44416 21.75 9.00006Z"
        fill="#344054"
        opacity={theme === "dark" ? 1 : 0}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconWrench };