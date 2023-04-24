import React from "react";
import Image from "next/image";

export default function NavBar(){

  return(
  <div className="nav-wrapper">
  <div class="nav-container">
    <div class="nav-wrapper-left">
      <a aria-label="homepage" href="/" aria-current="page" class="nav-logo-wrapper w-inline-block w--current">
        <div class="logo w-embed"><svg width="100%" height="100%" viewBox="0 0 123 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.0238 6.90527C22.3869 6.90527 20.0634 7.75376 18.9277 9.69875V7.25772H12.7925V18.6666C12.7925 21.4992 10.965 22.3869 9.15058 22.3869C7.33613 22.3869 6.16131 21.4601 6.16131 19.3976V7.25772H0V19.8675C0 25.0237 2.95012 27.8563 7.14033 27.8563C9.41166 27.8563 11.6569 26.9948 12.8056 25.2587V27.5822H18.9669V16.2517C18.9669 13.5365 20.5986 12.3747 22.648 12.3747C24.4755 12.3747 25.8723 13.2624 25.8723 15.4032V27.5822H32.0336V14.7374C32.0466 9.93371 29.7883 6.90527 25.0238 6.90527Z" fill="white"></path>
            <path d="M57.253 6.90536C54.6553 6.90536 52.3318 7.75385 51.1961 9.62051V0H45.0348V27.5823H51.1961V16.2518C51.1961 13.5366 52.8278 12.3748 54.8772 12.3748C56.7047 12.3748 58.1015 13.2625 58.1015 15.4033V27.5823H64.2628V14.7375C64.2758 9.9338 62.0306 6.90536 57.253 6.90536Z" fill="white"></path>
            <path d="M79.7967 18.6535C79.7967 21.4861 77.9692 22.3738 76.1547 22.3738C74.3403 22.3738 73.1655 21.447 73.1655 19.3845V7.24463H67.0042V19.8544C67.0042 25.0106 69.9543 27.8432 74.1445 27.8432C76.468 27.8432 78.7655 26.9556 79.8881 25.1281V27.5691H85.945V7.25768H79.8098V18.6535H79.7967Z" fill="white"></path>
            <path d="M116.53 0V10.1296C115.446 8.00187 113.149 6.90536 110.394 6.90536C105.512 6.90536 101.361 10.5082 101.361 17.4527C101.361 24.4755 105.63 28 110.668 28C114.089 28 116.295 26.3683 116.986 24.5147V27.5823H122.691V0H116.53ZM112.065 22.3478C109.624 22.3478 107.601 20.8727 107.601 17.5049C107.601 14.1632 109.585 12.7664 112.065 12.7664C114.545 12.7664 116.569 14.1632 116.569 17.4918C116.569 20.8727 114.506 22.3478 112.065 22.3478Z" fill="white"></path>
            <path d="M98.2808 7.25781C96.5838 7.25781 95.2001 8.6415 95.2001 10.3385V7.25781H89.0258V27.5823H95.1871V10.3385C95.1871 12.0354 96.5707 13.4191 98.2677 13.4191C99.9647 13.4191 101.348 12.0354 101.348 10.3385C101.348 8.6415 99.9777 7.25781 98.2808 7.25781Z" fill="white"></path>
            <path d="M38.4428 13.5758C40.1586 13.5758 41.5495 12.1849 41.5495 10.4691C41.5495 8.75325 40.1586 7.3623 38.4428 7.3623C36.7269 7.3623 35.336 8.75325 35.336 10.4691C35.336 12.1849 36.7269 13.5758 38.4428 13.5758Z" fill="white"></path>
            <path d="M38.4428 27.5824C40.1586 27.5824 41.5495 26.1915 41.5495 24.4757C41.5495 22.7598 40.1586 21.3689 38.4428 21.3689C36.7269 21.3689 35.336 22.7598 35.336 24.4757C35.336 26.1915 36.7269 27.5824 38.4428 27.5824Z" fill="white"></path>
            </svg>
            </div>
            </a>
            <div class="nav-left-divider"></div>
            <div class="nav-left-text">The #1 music marketing app</div>
            </div>
            <div class="nav-wrapper-right"><a href="https://apps.apple.com/gb/app/unhurd-music-marketing/id1576191466" target="_blank" class="badge-wrapper hide-mobile-landscape w-inline-block">
              <Image src="https://uploads-ssl.webflow.com/63e7f7e770738021a2190b76/63e8ac95be8e5cff82d5ff34_app%20store%20badge.webp" loading="eager" height="42" width="141" alt="app store badge" class="app-store-badge"/></a>
              <a href="/register-your-interest" class="badge-wrapper hide-mobile-landscape w-inline-block"><Image src="https://uploads-ssl.webflow.com/63e7f7e770738021a2190b76/63e8ac95cd3678892063a054_google-play-badge.webp" loading="eager" width="140" height="42" alt="google play store badge" class="google-play-badge"/></a><a href="/#services" class="button is-nav-button w-button">Marketing services</a>
              <div data-w-id="eac901b4-3156-0626-4e87-505323bb07c9" class="hamburger-menu-wrapper">
                </div>
                </div>
                </div>
              
</div>
)
}