import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
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
    <rect x={0.5} y={0.5} width={23} height={23} rx={11.5} stroke="black" />
    <path
      d="M11.7917 5.75C11.9574 5.75 12.1164 5.81585 12.2336 5.93306C12.3508 6.05027 12.4167 6.20924 12.4167 6.375V11.1667H17.2083C17.3741 11.1667 17.5331 11.2325 17.6503 11.3497C17.7675 11.4669 17.8333 11.6259 17.8333 11.7917C17.8333 11.9574 17.7675 12.1164 17.6503 12.2336C17.5331 12.3508 17.3741 12.4167 17.2083 12.4167H12.4167V17.2083C12.4167 17.3741 12.3508 17.5331 12.2336 17.6503C12.1164 17.7675 11.9574 17.8333 11.7917 17.8333C11.6259 17.8333 11.4669 17.7675 11.3497 17.6503C11.2325 17.5331 11.1667 17.3741 11.1667 17.2083V12.4167H6.375C6.20924 12.4167 6.05027 12.3508 5.93306 12.2336C5.81585 12.1164 5.75 11.9574 5.75 11.7917C5.75 11.6259 5.81585 11.4669 5.93306 11.3497C6.05027 11.2325 6.20924 11.1667 6.375 11.1667H11.1667V6.375C11.1667 6.20924 11.2325 6.05027 11.3497 5.93306C11.4669 5.81585 11.6259 5.75 11.7917 5.75Z"
      fill="black"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconPlusRounded };