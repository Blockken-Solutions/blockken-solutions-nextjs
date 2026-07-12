import {brand, brandInverted} from '../theme'

export function StudioIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      width="1em"
      height="1em"
      fill="none"
      aria-hidden="true"
    >
      <rect width="25" height="25" rx="6" fill={brand} />
      <text
        x="12.5"
        y="17.5"
        textAnchor="middle"
        fill={brandInverted}
        fontFamily="system-ui, sans-serif"
        fontSize="14"
        fontWeight="700"
      >
        S
      </text>
    </svg>
  )
}
