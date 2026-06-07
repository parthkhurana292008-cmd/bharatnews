window.onload = function () {}
window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.innerHTML = `
        <header>
            <div class="header-top">
                <a href="index.html" class="logo">BHARAT<span>NEWS</span></a>

                <a href="#" class="live-tv-btn">
                    <span style="height:10px;width:10px;background:white;border-radius:50%;display:inline-block;"></span>
                    लाइव टीवी
                </a>
            </div>

            <nav>
                <div class="nav-container">
                    <a href="index.html" class="active">होम</a>
                    <a href="#">राष्ट्रीय</a>
                    <a href="#">राजनीति</a>
                    <a href="#">मनोरंजन</a>
                    <a href="#">खेल</a>
                    <a href="#">अंतरराष्ट्रीय</a>
                    <a href="#">धर्म</a>
                    <a href="lifestyle.html">लाइफ Style</a>
                    <a href="children.html">बच्चों का कोना</a>
                    <a href="child.html">परवरिश (Parenting)</a>
                    <a href="#">स्वास्थ्य</a>
                    <a href="weather.html">मौसम</a>
                    <a href="contact.html">Contact Us</a>
                    
                </div>
            </nav>
        </header>
        `;
    }
});