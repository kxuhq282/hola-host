// Mobile detection
let isMobile = false;

function checkMobile() {
    isMobile = window.innerWidth < 768;
    const ctaSection = document.getElementById('ctaSection');
    const mobileWarning = document.getElementById('mobileWarning');
    const finalCtaButtons = document.getElementById('finalCtaButtons');
    const finalMobileWarning = document.getElementById('finalMobileWarning');
    
    if (isMobile) {
        ctaSection.style.display = 'none';
        mobileWarning.style.display = 'block';
        finalCtaButtons.style.display = 'none';
        finalMobileWarning.style.display = 'block';
    } else {
        ctaSection.style.display = 'flex';
        mobileWarning.style.display = 'none';
        finalCtaButtons.style.display = 'flex';
        finalMobileWarning.style.display = 'none';
    }
}

// Initialize mobile check
checkMobile();
window.addEventListener('resize', checkMobile);

// Modal functions
function showModal(modalType) {
    let modalId;
    switch(modalType) {
        case 'emailForm':
            modalId = 'emailModal';
            break;
        case 'login':
            modalId = 'loginModal';
            break;
        case 'pricing':
            modalId = 'pricingModal';
            break;
        default:
            return;
    }
    
    document.getElementById(modalId).classList.add('show');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
    
    // Reset forms and errors
    if (modalId === 'loginModal') {
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        document.getElementById('loginError').style.display = 'none';
    }
}

function showSubscriptionEmail() {
    hideModal('pricingModal');
    document.getElementById('subscriptionEmailModal').classList.add('show');
}

// Form handlers
function handleEmailSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    if (email) {
        hideModal('emailModal');
        document.getElementById('tutorialModal').classList.add('show');
    }
}

function handleLoginSubmit(event) {
    event.preventDefault();
    document.getElementById('loginError').style.display = 'block';
}

function handleSubscriptionEmailSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('subscriptionEmailInput').value;
    if (email) {
        hideModal('subscriptionEmailModal');
        document.getElementById('paymentModal').classList.add('show');
    }
}

function handlePaymentComplete() {
    // Redirect to Telegram (decorative)
    window.open('https://t.me/axiomspeedsniper', '_blank');
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
});

// Prevent modal close when clicking inside modal content
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.modal-content').forEach(content => {
        content.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});
