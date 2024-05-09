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
      d="M21.8265 4.72756C22.1189 5.02096 22.1181 5.49583 21.8247 5.78821L8.29131 19.2744C7.99827 19.5664 7.52411 19.566 7.23158 19.2735L2.17426 14.2162C1.88137 13.9233 1.88137 13.4484 2.17426 13.1555C2.46715 12.8626 2.94203 12.8626 3.23492 13.1555L7.76283 17.6834L20.7659 4.7257C21.0593 4.43332 21.5342 4.43415 21.8265 4.72756Z"
      fill="#111111"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconCheck };
