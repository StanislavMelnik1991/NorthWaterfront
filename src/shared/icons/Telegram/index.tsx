import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M9.83928 14.5592L9.52635 19.0308C9.98615 19.0308 10.1893 18.8302 10.4459 18.5922L12.655 16.5434L17.2509 19.7821C18.0967 20.2272 18.7072 19.9967 18.9178 19.0331L21.9349 5.47242C22.2437 4.29121 21.4628 3.75547 20.6537 4.10585L2.93773 10.6215C1.72845 11.0841 1.7355 11.7276 2.7173 12.0144L7.26361 13.3678L17.7888 7.03429C18.2857 6.7469 18.7417 6.90141 18.3674 7.21825L9.83901 14.559L9.83928 14.5592Z"
      fill="black"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconTelegram };
