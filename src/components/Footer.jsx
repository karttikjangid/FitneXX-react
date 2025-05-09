function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-gray-300"><i className="bx bxl-facebook-circle"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="bx bxl-twitter"></i></a>
          </div>
          <p className="copyright">© FitneXX - All rights reserved</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;