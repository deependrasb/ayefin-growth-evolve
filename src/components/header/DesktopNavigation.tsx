
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { products, services, companyItems, investorItems } from "./NavigationData";

const DesktopNavigation = () => {
  return (
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
  );
};

export default DesktopNavigation;
