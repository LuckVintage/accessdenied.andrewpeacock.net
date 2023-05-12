const cookieConsentBanner = document.querySelector("#cookie-consent-banner");
const acceptCookiesBtn = document.querySelector("#accept-cookies-btn");

acceptCookiesBtn.addEventListener("click", () => {
    // set a cookie to track user's acceptance
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    // add a CSS class to the banner element that triggers a transition animation
    cookieConsentBanner.classList.add("fadeOut");

    // remove the banner element from the DOM after the animation ends
    cookieConsentBanner.addEventListener("animationend", () => {
        cookieConsentBanner.remove();
    });
});

// check if user has already accepted cookies
if (document.cookie.indexOf("cookieConsent=true") > -1) {
    cookieConsentBanner.remove();
}