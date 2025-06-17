import { Button } from '../../../../components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../../../../components/ui/navigation-menu';

export const MainContentSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Services', href: '#services' },
    { label: 'Why Chipup', href: '#why-chipup' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Subscribe', href: '#subscribe' },
  ];

  // Handle navigation click with smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Remove the # from href to get the element ID
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="py-8 w-full flex items-center justify-between">
      {/* Logo section */}
      <div className="flex items-center gap-2.5">
        <div className="relative w-8 h-8">
          <img className="absolute w-7 h-7 top-0.5 left-0.5" alt="Logo icon" src="/group-78.png" />
        </div>
        <img className="w-[93px] h-8" alt="Logo text" src="/frame-12.svg" />
      </div>

      {/* Navigation menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-medium text-white text-base tracking-[-0.60px] leading-[22.4px] hover:text-main-colour transition-colors cursor-pointer"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
