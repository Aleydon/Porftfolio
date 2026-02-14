import FacebookIcon from '@/components/ui/icons/FacebookIcon';
import { GitHubIcon } from '@/components/ui/icons/GitHubIcon';
import InstagramIcon from '@/components/ui/icons/InstagramIcon';
import LinkedInIcon from '@/components/ui/icons/LinkedInIcon';
import TwitterIcon from '@/components/ui/icons/TwitterIcon';
import { SOCIAL_LINKS } from '@/lib/data';

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon
} as const;

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#e8eaed] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 sm:gap-6 sm:px-8 sm:py-12 lg:px-12 xl:px-16 2xl:px-20">
        <nav aria-label="Social media links">
          <ul className="flex items-center gap-5 sm:gap-7">
            {SOCIAL_LINKS.map(link => {
              const Icon = iconMap[link.icon];
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="block text-[#1a1f3a] transition-colors duration-200 hover:text-[#FF5E5B]"
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <p className="text-center text-sm text-[#6b7280]">
          Copyright ©{new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
