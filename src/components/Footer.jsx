
function Footer() {
   return (
      <footer>
         <div className="container pt-5 text-white text-center">

            <h2 className="text-white">GET IN TOUCH</h2>

            <div className="content w-100">
               <div className="contactDetails row mt-5">

                  <div className="col-12 col-md-4 d-flex align-items-center flex-column mb-5">
                     <div className="iconCircle d-flex align-items-center justify-content-center  mb-5 mb-md-3">
                        <i class="fa-solid fa-location-dot fa-3x"></i>
                     </div>
                     <p>helwan cairo Egypt</p>
                  </div>

                  <div className="col-12 col-md-4 d-flex align-items-center flex-column mb-5">
                     <div className="iconCircle d-flex align-items-center justify-content-center  mb-5 mb-md-3">
                        <i class="fa-solid fa-phone fa-3x"></i>
                     </div>
                     <p>+201148183794</p>
                  </div>

                  <div className="col-12 col-md-4 d-flex align-items-center flex-column mb-5">
                     <div className="iconCircle d-flex align-items-center justify-content-center  mb-5 mb-md-3">
                        <i class="fa-solid fa-envelope fa-3x"></i>
                     </div>
                     <p className="text-center">hossamramadan6677<wbr></wbr>@gmail.com</p>
                  </div>

               </div>

               <h3>Follow Us</h3>

               <div className="social my-4 d-flex gap-4 justify-content-center  ">
                  <i class="fa-brands fa-instagram fa-2x" />
                  <i class="fa-brands fa-square-facebook fa-2x" />
                  <i class="fa-brands fa-x-twitter fa-2x"></i>
               </div>

               <h6 className="rights py-3 ">© 2024 All Rights Reserved By Free Html Templates</h6>

            </div>
         </div>
      </footer>
   );
}

export default Footer;