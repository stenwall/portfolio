interface Props {
  color?: string;
}

const CodeIcon = ({ color = '#000000' }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="code-icon"
    viewBox="0 0 32 32"
  >
    <path
      d="M3 11h26"
      className="st0"
      // fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 9c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7l.1-.1c.1 0 .1-.1.2-.1.1-.1.1-.1.2-.1h.4c.1 0 .1 0 .2.1.1 0 .1.1.2.1l.1.1c.1.1.2.2.2.3.1.1.1.3.1.4 0 .1 0 .3-.1.4 0 .1-.1.2-.2.3-.2.2-.4.3-.7.3zm3 0c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.1-.1.2-.2.3-.2.4-.2.8-.1 1.1.2.1.1.2.2.2.3.1.1.1.3.1.4 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3zm3 0c-.1 0-.3 0-.4-.1-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.4-.4 1-.4 1.4 0 .1.1.2.2.2.3.1.1.1.3.1.4 0 .1 0 .3-.1.4-.1.1-.1.2-.2.3-.2.2-.4.3-.7.3z"
      fill={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 5H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h22c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"
      className="st0"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m11 16-3 3 3 3m10-6 3 3-3 3m-3-7-4 8"
      className="st0"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CodeIcon;
