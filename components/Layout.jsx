import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <Navbar />
      
      {/* Contenu principal */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default Layout;
