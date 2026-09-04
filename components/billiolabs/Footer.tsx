import { GitHubIcon, LinkedInIcon, XIcon } from './Icons';
import Logo from './Logo';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
  { label: 'X', href: 'https://x.com', icon: XIcon },
  { label: 'GitHub', href: 'https://github.com', icon: GitHubIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-warm/60 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Logo className="text-base" />
          <p className="text-xs text-muted/70">
            &copy; {year} Billiolabs. All rights reserved.
          </p>
        </div>

        <nav className="flex items-center gap-6" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted transition-colors duration-200 hover:text-white"
            >
              <link.icon />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
