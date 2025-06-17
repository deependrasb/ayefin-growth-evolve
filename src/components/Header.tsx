
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Phone, Mail, Users, TrendingUp, Building, User, Award, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    { title: "Business Loans", href: "/business-loans", description: "Flexible funding solutions for your business growth", icon: <Building className="w-5 h-5" /> },
    { title: "Personal Loans", href: "/personal-loans", description: "Quick and easy personal financing options", icon: <Users className="w-5 h-5" /> },
    { title: "Home Loans", href: "/home-loans", description: "Competitive rates for your dream home", icon: <Building className="w-5 h-5" /> },
    { title: "Investment Products", href: "/investment-products", description: "Wealth building and investment solutions", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Insurance", href: "/insurance", description: "Comprehensive protection plans", icon: <Users className="w-5 h-5" /> },
    { title: "Gold Loans", href: "/gold-loans", description: "Instant loans against gold jewelry", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const services = [
    { title: "Financial Advisory", href: "/advisory", description: "Expert guidance for your financial decisions" },
    { title: "Tax Planning", href: "/tax-planning", description: "Strategic tax optimization services" },
    { title: "Wealth Management", href: "/wealth-management", description: "Comprehensive wealth building strategies" },
    { title: "Credit Counseling", href: "/credit-counseling", description: "Improve your credit score and financial health" },
  ];

  const companyItems = [
    { title: "About Company", href: "/about-company", description: "Learn about our journey and values", icon: <Building className="w-5 h-5" /> },
    { title: "From The MD's Desk", href: "/md-desk", description: "Message from our Managing Director", icon: <User className="w-5 h-5" /> },
    { title: "Our Team", href: "/our-team", description: "Meet our experienced leadership team", icon: <Users className="w-5 h-5" /> },
    { title: "Our Investors", href: "/our-investors", description: "Trusted partners and stakeholders", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Accolades", href: "/accolades", description: "Awards and recognition received", icon: <Award className="w-5 h-5" /> },
    { title: "Insight", href: "/insight", description: "Careers and social impact initiatives", icon: <BookOpen className="w-5 h-5" /> },
  ];

  const investorItems = [
    { title: "Financial Reports", href: "/investor-relations", description: "Annual reports and quarterly results" },
    { title: "Presentations", href: "/investor-relations", description: "Investor presentations and meeting materials" },
    { title: "Announcements", href: "/investor-relations", description: "Corporate announcements and disclosures" },
    { title: "Governance", href: "/investor-relations", description: "Board information and corporate policies" },
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
                    <div className="grid gap-3 p-6 w-[650px] grid-cols-2">
                      {products.map((product) => (
                        <NavigationMenuLink
                          key={product.title}
                          href={product.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          )}
                        >
                          <div className="text-sm font-medium leading-none flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {product.icon}
                              <span>{product.title}</span>
                            </div>
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
                  <NavigationMenuTrigger className="text-base font-medium">Our Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[550px] grid-cols-1">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-finance-blue mb-2">About Ayefin</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Learn more about our leadership, team, and achievements
                        </p>
                      </div>
                      {companyItems.map((item) => (
                        <NavigationMenuLink
                          key={item.title}
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          )}
                        >
                          <div className="text-sm font-medium leading-none flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {item.icon}
                              <span>{item.title}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">Investors</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[550px] grid-cols-1">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-finance-blue mb-2">Investor Relations</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Comprehensive information for our investors and stakeholders
                        </p>
                      </div>
                      {investorItems.map((item) => (
                        <NavigationMenuLink
                          key={item.title}
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          )}
                        >
                          <div className="text-sm font-medium leading-none flex items-center justify-between">
                            {item.title}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
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

                    <div>
                      <h3 className="font-semibold mb-2">Our Company</h3>
                      <div className="space-y-2 ml-4">
                        {companyItems.map((item) => (
                          <a key={item.title} href={item.href} className="block text-sm text-gray-600 hover:text-finance-blue">
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Investors</h3>
                      <div className="space-y-2 ml-4">
                        <a href="/investor-relations" className="block text-sm text-gray-600 hover:text-finance-blue">
                          Investor Relations
                        </a>
                      </div>
                    </div>

                    <div>
                      <a href="/contact" className="font-semibold hover:text-finance-blue">Contact</a>
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
