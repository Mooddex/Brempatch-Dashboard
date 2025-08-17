const FooterComp = () => {
    return ( 
         <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
                  <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
                      <p>&copy; 2025  Dashboard. All rights reserved.</p>
                      <div className="flex gap-4 mt-2 sm:mt-0">
                        <a href="#" className="hover:text-foreground transition-colors">
                          Privacy
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                          Terms
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                          Support
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
     );
}
 
export default FooterComp;