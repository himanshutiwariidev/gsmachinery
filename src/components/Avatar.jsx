const PALETTE = ["#b99631", "#5b6470", "#8a6d3b", "#3f6b5e", "#6b4f6b", "#4a5a6b"];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export default function Avatar({ name, className = "w-10 h-10 text-sm" }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const color = PALETTE[hashString(name) % PALETTE.length];

  return (
    <div
      className={`rounded-full flex items-center justify-center font-bold text-white shrink-0 ${className}`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}
