
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Peace Bridge";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">404</h1>
        <p className="text-2xl font-medium mb-8 text-foreground/90">Page not found</p>
        <p className="text-foreground/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors hover-lift"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
