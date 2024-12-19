document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if(welcomeScreen) {
        welcomeScreen.addEventListener('click', function() {
            window.location.href = 'pages/login.html';
        });
    }

    const loginBtn = document.querySelector('.login-btn');
    if(loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'Menu/MenuBurger.html';
        });
    }

    const registerNewBtn = document.querySelector('.register-btn');
    if(registerNewBtn) {
        registerNewBtn.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    }

    const signUpBtn = document.querySelector('.register-form .register-btn');
    if(signUpBtn) {
        signUpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'Menu/MenuBurger.html';
        });
    }

    const signInLinks = document.querySelectorAll('a');
    signInLinks.forEach(link => {
        if (link.textContent.includes('Sign in')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'login.html';
            });
        }
    });

    const loginLink = document.querySelector('.login-link');
    if(loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }

    const loginForm = document.querySelector('.login-form');
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'Menu/MenuBurger.html';
        });
    }

    const registerForm = document.querySelector('.register-form');
    if(registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'Menu/MenuBurger.html';
        });
    }

    const resetLink = document.querySelector('.reset-link');
    if(resetLink) {
        resetLink.addEventListener('click', function() {
            alert('Reset password functionality will be implemented soon');
        });
    }

    const categoryBtns = document.querySelectorAll('.category-btn');
    if(categoryBtns) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const currentPath = window.location.pathname;
                const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);

                switch(this.textContent.toLowerCase().trim()) {
                    case 'burger':
                        window.location.href = basePath + 'MenuBurger.html';
                        break;
                    case 'snacks':
                        window.location.href = basePath + 'MenuSnack.html';
                        break;
                    case 'combos':
                        window.location.href = basePath + 'MenuCombo.html';
                        break;
                }
            });
        });
    }

    const productCards = document.querySelectorAll('.product-card');
    if(productCards) {
        productCards.forEach((card, index) => {
            card.addEventListener('click', function() {
                const currentPath = window.location.pathname;
                const basePath = currentPath.substring(0, currentPath.lastIndexOf('/Menu/') + 1);
                const productNumber = index + 1;
                window.location.href = `${basePath}product/product${productNumber}.html`;
            });

            card.style.cursor = 'pointer';
        });
    }

    const addToCartBtn = document.querySelector('.add-to-cart');
    const notification = document.getElementById('addToCartNotification');

    if(addToCartBtn && notification) {
        addToCartBtn.addEventListener('click', function() {
            addToCartBtn.classList.add('clicked');

            notification.classList.add('show');

            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);

            setTimeout(() => {
                addToCartBtn.classList.remove('clicked');
            }, 200);
        });
    }

    const addressInput = document.getElementById('addressInput');
    const suggestions = document.getElementById('suggestions');

    if(addressInput && suggestions) {
        addressInput.addEventListener('focus', function() {
            suggestions.classList.add('active');
        });

        document.addEventListener('click', function(e) {
            if (!addressInput.contains(e.target) && !suggestions.contains(e.target)) {
                suggestions.classList.remove('active');
            }
        });

        const suggestionItem = document.querySelector('.suggestion-item');
        if(suggestionItem) {
            suggestionItem.addEventListener('click', function() {
                const address = this.querySelector('h3').textContent;
                addressInput.value = address;
                suggestions.classList.remove('active');
            });
        }
    }

    const reviewItems = document.querySelectorAll('.review-item');
    if(reviewItems) {
        reviewItems.forEach(item => {
            const stars = item.querySelectorAll('.stars img');
            const ratingText = item.querySelector('.rating');
            
            stars.forEach((star, index) => {
                star.addEventListener('click', () => {
                    stars.forEach((s, i) => {
                        if (i <= index) {
                            s.src = '../assets/images/star.png';
                        } else {
                            s.src = '../assets/images/star-outline.png';
                        }
                    });
                    
                    const rating = index + 1;
                    switch(rating) {
                        case 1:
                            ratingText.textContent = 'Poor';
                            break;
                        case 2:
                            ratingText.textContent = 'Okay';
                            break;
                        case 3:
                            ratingText.textContent = 'Good';
                            break;
                        case 4:
                            ratingText.textContent = 'Very Good';
                            break;
                        case 5:
                            ratingText.textContent = 'Excellent';
                            break;
                    }
                });
            });
        });
    }

    const backBtn = document.querySelector('.back-btn');
    if(backBtn) {
        backBtn.addEventListener('click', function() {
            window.history.back();
        });
    }

    const sendBtn = document.querySelector('.send-btn');
    if(sendBtn) {
        sendBtn.addEventListener('click', function() {
            alert('Review submitted successfully!');
            window.history.back();
        });
    }
});

function goToLogin() {
    window.location.href = 'login.html';
}

function goToRegister() {
    window.location.href = 'register.html';
}

function goToMenu() {
    window.location.href = 'Menu/MenuBurger.html';
}

window.addEventListener('error', function(e) {
    console.error('Navigation error:', e);
});