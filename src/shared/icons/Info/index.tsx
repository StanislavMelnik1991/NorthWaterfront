import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M10 1C5.02528 1 1 5.02564 1 10C1 14.9747 5.02564 19 10 19C14.9747 19 19 14.9744 19 10C19 5.02528 14.9743 1 10 1ZM10 17.5938C5.80259 17.5938 2.40625 14.1971 2.40625 10C2.40625 5.80259 5.80287 2.40625 10 2.40625C14.1974 2.40625 17.5938 5.80287 17.5938 10C17.5938 14.1974 14.1971 17.5938 10 17.5938Z"
      fill="var(--dark-60)"
    />
    <path
      d="M10 8.53504C9.61166 8.53504 9.29688 8.84983 9.29688 9.23816V13.766C9.29688 14.1544 9.61166 14.4692 10 14.4692C10.3883 14.4692 10.7031 14.1543 10.7031 13.766V9.23816C10.7031 8.84983 10.3883 8.53504 10 8.53504Z"
      fill="var(--dark-60)"
    />
    <path
      d="M10 7.67406C10.5242 7.67406 10.9492 7.24908 10.9492 6.72484C10.9492 6.2006 10.5242 5.77562 10 5.77562C9.47576 5.77562 9.05078 6.2006 9.05078 6.72484C9.05078 7.24908 9.47576 7.67406 10 7.67406Z"
      fill="var(--dark-60)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconInfo };
