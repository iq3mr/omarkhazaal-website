import Container from "../ui/Container";
import Logo from "../ui/Logo";

const links = [
  "الرئيسية",
  "المقالات",
  "الدورات",
  "الكتب",
  "من أنا",
  "تواصل",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Logo />

          <nav>
            <ul className="flex items-center gap-8 text-sm font-medium">
              {links.map((link) => (
                <li
                  key={link}
                  className="cursor-pointer transition-colors duration-300 hover:text-red-700"
                >
                  {link}
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </Container>
    </header>
  );
}