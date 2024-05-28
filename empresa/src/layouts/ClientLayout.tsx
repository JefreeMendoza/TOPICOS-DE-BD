import React, { ReactNode } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-xl mx-auto flex items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
