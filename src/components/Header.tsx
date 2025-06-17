
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import TopBar from "./header/TopBar";
import DesktopNavigation from "./header/DesktopNavigation";
import MobileNavigation from "./header/MobileNavigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto">
        <TopBar />

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-12">
            <a href="/" className="text-2xl font-bold gradient-text">
              Ayefin
            </a>

            <DesktopNavigation />
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex">
              Login
            </Button>
            <Button className="finance-button text-white hidden md:flex">
              Apply Now
            </Button>

            <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
