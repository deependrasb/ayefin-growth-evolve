
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { products, services, companyItems } from "./NavigationData";

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileNavigation = ({ isOpen, setIsOpen }: MobileNavigationProps) => {
  return (
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
  );
};

export default MobileNavigation;
