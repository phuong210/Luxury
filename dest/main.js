// MENU MOBILE
const menuMobile = () => {
    let navBar = document.querySelector('.nav');
    let btnMenu = document.querySelector('.btnmenu');
    // let selectMenu = document.querySelectorAll('.nav a');

    btnMenu.addEventListener('click', () => {
        navBar.classList.toggle('active');
        btnMenu.classList.toggle('active');

    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            btnMenu.classList.remove('active');
            navBar.classList.remove('active');
        }
    })
}
menuMobile();


// ACTIVE BTN
const scchapTab = () => {
    let tabText = document.querySelectorAll('.scchap .scchap__rate .allmenu .option');
    let tabList = document.querySelectorAll('.scchap__rate-table');

    tabText.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabText.forEach((tab) => {
                tab.classList.remove('active');
            })
            tabList.forEach((tabs) => {
                tabs.classList.remove('active');
            })
            item.classList.add('active');
            tabList[index].classList.add('active');
        })
    })
}
scchapTab();

// FAQ
const faq = () => {
    let faqs = document.querySelectorAll('.scfaq__question-item');
    faqs.forEach((faq) => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
        })
    })
}
faq();

// FAQ FOOTER
const faqFooter = () => {
    let faqs = document.querySelectorAll('.footer .menu-footer .item2');
    faqs.forEach((faq) => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
        })
    })
}
faqFooter();

// ADD BG HEADER
const bgHeader = () => {

    let header = document.querySelector('header .header');
    let heightHeader = header.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= heightHeader) {
            header.classList.add('active');
        }
        else {
            header.classList.remove('active');
        }
    });
}
bgHeader();