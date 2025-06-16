
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    { title: "Business Loans", href: "/business-loans", description: "Flexible funding solutions for your business growth" },
    { title: "Personal Loans", href: "/personal-loans", description: "Quick and easy personal financing options" },
    { title: "Home Loans", href: "/home-loans", description: "Competitive rates for your dream home" },
    { title: "Investment Products", href: "/investments", description: "Wealth building and investment solutions" },
    { title: "Insurance", href: "/insurance", description: "Comprehensive protection plans" },
    { title: "Gold Loans", href: "/gold-loans", description: "Instant loans against gold jewelry" },
  ];

  const services = [
    { title: "Financial Advisory", href: "/advisory", description: "Expert guidance for your financial decisions" },
    { title: "Tax Planning", href: "/tax-planning", description: "Strategic tax optimization services" },
    { title: "Wealth Management", href: "/wealth-management", description: "Comprehensive wealth building strategies" },
    { title: "Credit Counseling", href: "/credit-counseling", description: "Improve your credit score and financial health" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@ayefin.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/careers" className="hover:text-finance-blue transition-colors">Careers</a>
            <a href="/investor-relations" className="hover:text-finance-blue transition-colors">Investor Relations</a>
            <a href="/media" className="hover:text-finance-blue transition-colors">Media</a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-12">
            <a href="/" className="text-2xl font-bold gradient-text">
              Ayefin
            </a>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-2">
                      {products.map((product) => (
                        <NavigationMenuLink
                          key={product.title}
                          href={product.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          )}
                        >
                          <div className="text-sm font-medium leading-none flex items-center justify-between">
                            {product.title}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {product.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] grid-cols-1">
                      {services.map((service) => (
                        <NavigationMenuLink
                          key={service.title}
                          href={service.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          )}
                        >
                          <div className="text-sm font-medium leading-none flex items-center justify-between">
                            {service.title}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="text-base font-medium px-4 py-2 hover:text-finance-blue transition-colors">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className="text-base font-medium px-4 py-2 hover:text-finance-blue transition-colors">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex">
              Login
            </Button>
            <Button className="finance-button text-white hidden md:flex">
              Apply Now
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  <a href="/" className="text-2xl font-bold gradient-text">
                    Ayefin
                  </a>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Products</h3>
                      <div className="space-y-2 ml-4">
                        {products.map((product) => (
                          <a key={product.title} href={product.href} className="block text-sm text-gray-600 hover:text-finance-blue">
                            {product.title}
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Services</h3>
                      <div className="space-y-2 ml-4">
                        {services.map((service) => (
                          <a key={service.title} href={service.href} className="block text-sm text-gray-600 hover:text-finance-blue">
                            {service.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Button variant="outline">Login</Button>
                    <Button className="finance-button text-white">Apply Now</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
