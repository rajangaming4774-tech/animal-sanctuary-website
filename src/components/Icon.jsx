// Lightweight inline SVG icon set (stroke-based, currentColor)
const paths = {
  paw: <><circle cx="5.5" cy="10.5" r="2.2"/><circle cx="9.5" cy="6.5" r="2.2"/><circle cx="14.5" cy="6.5" r="2.2"/><circle cx="18.5" cy="10.5" r="2.2"/><path d="M12 12.5c-2.6 0-5 2-5 4.4 0 1.7 1.4 2.6 3 2.6 1 0 1.4-.4 2-.4s1 .4 2 .4c1.6 0 3-.9 3-2.6 0-2.4-2.4-4.4-5-4.4Z"/></>,
  bowl: <><path d="M3 11h18a9 9 0 0 1-9 9 9 9 0 0 1-9-9Z"/><path d="M12 11c0-3 2-3 2-5s-2-2-2-4"/></>,
  heart: <path d="M12 20s-7-4.3-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 2.5C19 15.7 12 20 12 20Z"/>,
  home: <><path d="M4 11 12 4l8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></>,
  hand: <><path d="M6 12V7a1.5 1.5 0 0 1 3 0v4"/><path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M12 11V6.5a1.5 1.5 0 0 1 3 0V12"/><path d="M15 12V8.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L4 15c-.6-1 .8-2.4 1.8-1.5L6 14"/></>,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5"/><path d="M16 6a3 3 0 0 1 0 6"/><path d="M17 20c0-2-.6-3.6-1.8-4.7"/></>,
  location: <><path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z"/><circle cx="12" cy="11" r="2"/></>,
  phone: <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L16 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  clock: <><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></>,
  camera: <><path d="M4 8h3l2-2h6l2 2h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="3.2"/></>,
  check: <path d="m5 12 5 5L20 7"/>,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
  gift: <><rect x="4" y="9" width="16" height="11" rx="1"/><path d="M4 13h16M12 9v11"/><path d="M12 9C9 9 7 8 7 6.5S8.5 4 10 5s2 4 2 4Zm0 0c3 0 5-1 5-2.5S15.5 4 14 5s-2 4-2 4Z"/></>,
  star: <path d="m12 4 2.3 4.7 5.2.8-3.8 3.6.9 5.1L12 15.8 7.4 18.2l.9-5.1L4.5 9.5l5.2-.8L12 4Z"/>,
  leaf: <><path d="M4 20c0-8 6-14 16-14 0 10-6 14-14 14"/><path d="M4 20c3-6 6-8 10-9"/></>,
  chart: <><path d="M4 20V6M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="14" width="3" height="3"/></>,
  whatsapp: <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.3 12c-.2.6-1.2 1.1-1.7 1.1-.4 0-1 .1-3.2-.9-2.6-1.2-4.2-3.9-4.3-4.1-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.7 1.8c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.6 1 1.3 1.7.9.8 1.6 1 1.9 1.2.3.1.4.1.6-.1l.6-.7c.2-.2.3-.2.6-.1l1.7.8c.2.1.4.2.4.3.1.1.1.6-.1 1.2Z"/>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <path d="M6 6l12 12M18 6 6 18"/>,
  sparkle: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>,
  quote: <path d="M7 7h4v4c0 3-2 5-4 6v-2c1-.6 2-1.6 2-3H7V7Zm8 0h4v4c0 3-2 5-4 6v-2c1-.6 2-1.6 2-3h-2V7Z"/>,
}

export default function Icon({ name, size = 22, stroke = 2, className = '', style }) {
  const filled = ['heart', 'star', 'quote', 'whatsapp'].includes(name)
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  )
}
