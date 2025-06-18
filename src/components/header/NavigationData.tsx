
import React from "react";
import { Building, User, Users, TrendingUp, Award, BookOpen } from "lucide-react";

export const products = [
  { title: "Business Loans", href: "/business-loans", description: "Flexible funding solutions for your business growth", icon: <Building className="w-5 h-5" /> },
  { title: "Personal Loans", href: "/personal-loans", description: "Quick and easy personal financing options", icon: <Users className="w-5 h-5" /> },
  { title: "Home Loans", href: "/home-loans", description: "Competitive rates for your dream home", icon: <Building className="w-5 h-5" /> },
  { title: "Investment Products", href: "/investment-products", description: "Wealth building and investment solutions", icon: <TrendingUp className="w-5 h-5" /> },
  { title: "Insurance", href: "/insurance", description: "Comprehensive protection plans", icon: <Users className="w-5 h-5" /> },
  { title: "Gold Loans", href: "/gold-loans", description: "Instant loans against gold jewelry", icon: <TrendingUp className="w-5 h-5" /> },
];

export const services = [
  { title: "Financial Advisory", href: "/advisory", description: "Expert guidance for your financial decisions" },
  { title: "Tax Planning", href: "/tax-planning", description: "Strategic tax optimization services" },
  { title: "Wealth Management", href: "/wealth-management", description: "Comprehensive wealth building strategies" },
  { title: "Credit Counseling", href: "/credit-counseling", description: "Improve your credit score and financial health" },
];

export const companyItems = [
  { title: "About Company", href: "/about-company", description: "Learn about our journey and values", icon: <Building className="w-5 h-5" /> },
  { title: "From The MD's Desk", href: "/md-desk", description: "Message from our Managing Director", icon: <User className="w-5 h-5" /> },
  { title: "Our Team", href: "/our-team", description: "Meet our experienced leadership team", icon: <Users className="w-5 h-5" /> },
  { title: "Our Investors", href: "/our-investors", description: "Trusted partners and stakeholders", icon: <TrendingUp className="w-5 h-5" /> },
  { title: "Accolades", href: "/accolades", description: "Awards and recognition received", icon: <Award className="w-5 h-5" /> },
  { title: "Insight", href: "/insight", description: "Careers and social impact initiatives", icon: <BookOpen className="w-5 h-5" /> },
];

export const investorItems = [
  { title: "Financial Reports", href: "/investor-relations", description: "Annual reports and quarterly results" },
  { title: "Presentations", href: "/investor-relations", description: "Investor presentations and meeting materials" },
  { title: "Announcements", href: "/investor-relations", description: "Corporate announcements and disclosures" },
  { title: "Governance", href: "/investor-relations", description: "Board information and corporate policies" },
];
