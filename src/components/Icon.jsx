import { icons } from '../data/icons'

/**
 * Inline SVG icon, drop-in for the Font Awesome `<i className="fa-solid …">`
 * elements this replaces.
 *
 * Sizing matches what the icon font did, so every existing `text-sm`,
 * `text-[10px]` and colour class keeps working: height is 1em, width follows
 * from the viewBox's aspect ratio, the fill is currentColor, and the baseline
 * nudge is Font Awesome's own -0.125em.
 *
 * Icons here are decorative — the surrounding copy always carries the meaning —
 * so they are hidden from assistive technology and skipped by tab order.
 * `name` accepts either "check" or "fa-check".
 */
export default function Icon({ name, className = '', ...rest }) {
  const key = name?.startsWith('fa-') ? name.slice(3) : name
  const entry = icons[key]

  // A typo should not blow up a whole section; render nothing and say so.
  if (!entry) {
    if (import.meta.env.DEV) console.warn(`Icon: no glyph named "${name}"`)
    return null
  }

  const [viewBox, d] = entry
  return (
    <svg
      viewBox={viewBox}
      data-icon={key}
      role="img"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      className={`inline-block overflow-visible ${className}`}
      style={{ height: '1em', verticalAlign: '-0.125em' }}
      {...rest}
    >
      <path d={d} />
    </svg>
  )
}
