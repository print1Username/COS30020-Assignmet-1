const navbar = `
<nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container">
        <!-- Brand -->
        <!-- TODO: 修改网站 Logo / Brand hyperlink -->
        <a
            class="navbar-brand fw-bold"
            href="index.php"
        >
            COS30020
        </a>

        <!-- Mobile Menu Button -->
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation -->
        <div
            class="collapse navbar-collapse"
            id="mainNavbar"
        >

            <!-- Left Navigation -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                    <a
                        class="nav-link"
                        aria-current="page"
                        href="main_menu.php"
                        
                    >
                        Main menu
                    </a>
                </li>

                <li class="nav-item">
                    <!-- TODO: 修改 Catalogue hyperlink -->
                    <a
                        class="nav-link"
                        href="#"
                    >
                        Catalogue
                    </a>
                </li>

                <li class="nav-item">
                    <!-- TODO: 修改 Activity hyperlink -->
                    <a
                        class="nav-link"
                        href="#"
                    >
                        Activity
                    </a>
                </li>

            </ul>

            <!-- Authentication Buttons -->
            <div class="d-flex gap-2">

                <!-- TODO: 修改 Login hyperlink -->
                <a
                    href="#"
                    class="btn btn-dark custom-login-button"
                >
                    Login
                </a>

                <!-- TODO: 修改 Sign Up hyperlink -->
                <a
                    href="#"
                    class="btn btn-light"
                >
                    Sign Up
                </a>

            </div>

        </div>
    </div>
</nav>
`;


document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar-container");

    if (!navbarContainer) {
        console.error( "Navbar container #navbar-container was not found." );
        return;
    }

    /* * Insert Navbar */
    navbarContainer.innerHTML = navbar;

    /* * ========================================== * Automatically detect current page * ========================================== */
    const currentPage = window.location.pathname.split("/").pop() || "index.php";

    /* * Find all navigation links */
    const navLinks = navbarContainer.querySelectorAll(".nav-link");

    /* * Compare href with current page */
    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) {
            return;
        }

        /* * Get filename from href * * Example: * catalogue.php → catalogue.php * activity.php → activity.php */
        const linkPage = href.split("/").pop().split("?")[0].split("#")[0];

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });
});