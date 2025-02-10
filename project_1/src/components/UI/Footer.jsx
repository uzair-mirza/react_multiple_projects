import React from 'react'

function Footer() {
  return (
    <footer class="bg-dark text-light pt-4">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h5>About Us</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error.</p>
            </div>

            <div class="col-md-4">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-light text-decoration-none">Home</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Services</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
                    <li><a href="#" class="text-light text-decoration-none">About</a></li>
                </ul>
            </div>

            <div class="col-md-4">
                <h5>Follow Us</h5>
                <a href="#" class="text-light me-3"><i class="bi bi-facebook"></i></a>
                <a href="#" class="text-light me-3"><i class="bi bi-twitter"></i></a>
                <a href="#" class="text-light me-3"><i class="bi bi-instagram"></i></a>
            </div>
        </div>
        
        <div class="text-center py-3 mt-3 border-top">
            &copy; 2025 Your Company. All Rights Reserved.
        </div>
    </div>
</footer>
  )
}

export default Footer
