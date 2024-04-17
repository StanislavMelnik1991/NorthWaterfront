import { SVGProps, Ref, forwardRef, memo } from "react";
import { ThemeIcons } from "../types";

interface Props extends SVGProps<SVGSVGElement> {
  theme?: ThemeIcons;
}
const SvgComponent = (
  { theme = "light", ...props }: Props,
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M21.75 19.5C21.75 19.6989 21.671 19.8897 21.5303 20.0303C21.3897 20.171 21.1989 20.25 21 20.25H3C2.80109 20.25 2.61032 20.171 2.46967 20.0303C2.32902 19.8897 2.25 19.6989 2.25 19.5V4.5C2.25 4.30109 2.32902 4.11032 2.46967 3.96967C2.61032 3.82902 2.80109 3.75 3 3.75C3.19891 3.75 3.38968 3.82902 3.53033 3.96967C3.67098 4.11032 3.75 4.30109 3.75 4.5V13.3472L8.50594 9.1875C8.63536 9.07421 8.79978 9.00885 8.97165 9.00236C9.14353 8.99587 9.31241 9.04866 9.45 9.15188L14.9634 13.2872L20.5059 8.4375C20.5786 8.36556 20.6652 8.30925 20.7605 8.27201C20.8557 8.23478 20.9575 8.21741 21.0597 8.22097C21.1619 8.22454 21.2623 8.24896 21.3547 8.29275C21.4471 8.33653 21.5296 8.39875 21.5971 8.47558C21.6645 8.5524 21.7156 8.64222 21.7471 8.7395C21.7786 8.83678 21.7899 8.93948 21.7802 9.04128C21.7706 9.14307 21.7402 9.24182 21.691 9.33146C21.6418 9.42109 21.5748 9.49972 21.4941 9.5625L15.4941 14.8125C15.3646 14.9258 15.2002 14.9912 15.0283 14.9976C14.8565 15.0041 14.6876 14.9513 14.55 14.8481L9.03656 10.7147L3.75 15.3403V18.75H21C21.1989 18.75 21.3897 18.829 21.5303 18.9697C21.671 19.1103 21.75 19.3011 21.75 19.5Z"
      fill="#344054"
      opacity={theme === "dark" ? 0 : 1}
    />
    <path
      d="M20.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V5.25C21.75 4.85218 21.592 4.47064 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75ZM18.75 16.5C18.9489 16.5 19.1397 16.579 19.2803 16.7197C19.421 16.8603 19.5 17.0511 19.5 17.25C19.5 17.4489 19.421 17.6397 19.2803 17.7803C19.1397 17.921 18.9489 18 18.75 18H5.25C5.05109 18 4.86032 17.921 4.71967 17.7803C4.57902 17.6397 4.5 17.4489 4.5 17.25V6.75C4.5 6.55109 4.57902 6.36032 4.71967 6.21967C4.86032 6.07902 5.05109 6 5.25 6C5.44891 6 5.63968 6.07902 5.78033 6.21967C5.92098 6.36032 6 6.55109 6 6.75V12.6488L9.27 9.92344C9.39426 9.81989 9.54866 9.75929 9.71018 9.75067C9.8717 9.74205 10.0317 9.78588 10.1663 9.87562L14.1975 12.5653L18.2672 9.17344C18.4201 9.04613 18.6173 8.98479 18.8155 9.0029C19.0136 9.02101 19.1964 9.11709 19.3237 9.27C19.4511 9.42291 19.5124 9.62014 19.4943 9.81828C19.4762 10.0164 19.3801 10.1993 19.2272 10.3266L14.7272 14.0766C14.6029 14.1801 14.4485 14.2407 14.287 14.2493C14.1255 14.2579 13.9655 14.2141 13.8309 14.1244L9.79969 11.4347L6 14.6016V16.5H18.75Z"
      fill="#344054"
      opacity={theme === "dark" ? 1 : 0}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconDiagram };