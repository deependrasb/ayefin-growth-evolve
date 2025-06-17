
import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
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
  );
};

export default TopBar;
