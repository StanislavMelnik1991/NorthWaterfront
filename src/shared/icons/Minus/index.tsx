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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.46094 11.6996C5.46094 11.3682 5.73746 11.0996 6.07856 11.0996L18.0193 11.0996C18.3604 11.0996 18.6369 11.3682 18.6369 11.6996C18.6369 12.031 18.3604 12.2996 18.0193 12.2996L6.07856 12.2996C5.73746 12.2996 5.46094 12.031 5.46094 11.6996Z"
      fill="#201600"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconMinus };
