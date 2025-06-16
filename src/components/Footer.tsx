
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Products": [
      "Personal Loans",
      "Business Loans", 
      "Home Loans",
      "Gold Loans",
      "Investment Products",
      "Insurance"
    ],
    "Services": [
      "Financial Advisory",
      "Tax Planning",
      "Wealth Management",
      "Credit Counseling",
      "Loan Against Property",
      "Working Capital"
    ],
    "Company": [
      "About Us",
      "Careers",
      "Press Releases",
      "Investor Relations",
      "CSR Activities",
      "Awards & Recognition"
    ],
    "Support": [
      "Contact Us",
      "Help Center",
      "EMI Calculator",
      "Branch Locator",
      "Customer Portal",
      "Grievance Portal"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-finance-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Ayefin</h3>
            <p className="text-lg text-blue-100 mb-8">
              Get the latest financial insights, loan offers, and investment tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 flex-1"
              />
              <Button className="bg-white text-finance-blue hover:bg-blue-50 font-semibold px-8">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-4">Ayefin</h2>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Your trusted financial partner for over a decade. We provide comprehensive 
                financial solutions to help individuals and businesses achieve their dreams 
                and secure their future.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-finance-blue" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-finance-blue" />
                <span>info@ayefin.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-finance-blue mt-1" />
                <span>
                  123 Business District, Financial Tower,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-finance-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-finance-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-finance-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-finance-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Ayefin. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
          
          <div className="text-gray-400 text-sm">
            Regulated by RBI | NBFC License No. ABC123456
          </div>
        </div>
      </div>

      {/* Compliance Notice */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Ayefin is a registered Non-Banking Financial Company (NBFC) regulated by the Reserve Bank of India. 
            All loan products are subject to approval and terms & conditions. Interest rates and processing fees are subject to change. 
            Please read all scheme related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
