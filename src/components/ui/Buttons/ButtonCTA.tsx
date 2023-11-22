interface ButtonCTAProps {
    item: string;
    href: string;
}

export default function ButtonCTA ({ item, href }: ButtonCTAProps) {
  return (
    <a
    className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-green rounded-md "
    href={href}
  >
    {item}
  </a>
  )
}
