import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="footer-left">
          <h2 className="text-2xl font-bold">READY FOR YOUR <span className="text-yellow-300">VACATION?</span></h2>
        </div>
        <div className="footer-right flex space-x-6">
          <nav className="flex flex-col space-y-2">
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/contact" className="hover:underline">Contact Information</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/faqs" className="hover:underline">FAQs</a>
          </nav>
          <div className="social-icons flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center mt-6">
        <p>&copy; 2024 JourneyET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
