import Image from "next/image";
import type { NavTopic } from "@/data/portfolioData";

type NavBarProps = {
  navTopics: NavTopic[];
};

export default function NavBar({ navTopics }: NavBarProps) {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a href="#topo" className="brand" aria-label="Ir para o topo">
          <Image
            src="/LogoSemeiaCode.png"
            alt="SemeiaCOde"
            className="brand-mark"
            width={36}
            height={36}
            priority
          />
          <span className="brand-text">
            <strong>SemeiaCOde</strong>
            <span>Semeando talentos</span>
          </span>
        </a>

        <nav aria-label="Navegacao principal">
          <ul className="menu-list">
            {navTopics.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
