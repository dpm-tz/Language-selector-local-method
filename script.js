const translations = {
    en: {
        home: "Home",
        about: "About",
        contact: "Contact",
        title: "Welcome to the website",
        description: "This is a simple webpage with language selection functionality."
    },
    sw: {
        home: "Nyumbani",
        about: "Kuhusu",
        contact: "Wasiliana",
        title: "Karibu kwenye tovuti",
        description: "Hii ni tovuti rahisi yenye chaguo la lugha."
    },
    fr: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        title: "Bienvenue sur le site",
        description: "Ceci est une page web simple avec une fonctionnalité de sélection de langue."
    },
    es: {
        home: "Inicio",
        about: "Acerca de",
        contact: "Contacto",
        title: "Bienvenido al sitio web",
        description: "Esta es una página web simple con funcionalidad de selección de idioma."
    },
    zh: {
        home: "首页",
        about: "关于我们",
        contact: "联系",
        title: "欢迎来到网站",
        description: "这是一个带有语言选择功能的简单网页。"
    },
    ar: {
        home: "الصفحة الرئيسية",
        about: "معلومات عنا",
        contact: "اتصل",
        title: "مرحبًا بك في الموقع",
        description: "هذه صفحة ويب بسيطة مع وظيفة اختيار اللغة."
    },
    hi: {
        home: "मुख्य पृष्ठ",
        about: "हमारे बारे में",
        contact: "संपर्क",
        title: "वेबसाइट पर आपका स्वागत है",
        description: "यह एक सरल वेबपेज है जिसमें भाषा चयन की सुविधा है।"
    },
    ru: {
        home: "Главная",
        about: "О нас",
        contact: "Контакты",
        title: "Добро пожаловать на сайт",
        description: "Это простой веб-сайт с функцией выбора языка."
    },
    pt: {
        home: "Início",
        about: "Sobre",
        contact: "Contato",
        title: "Bem-vindo ao site",
        description: "Esta é uma página da web simples com funcionalidade de seleção de idioma."
    },
    de: {
        home: "Startseite",
        about: "Über uns",
        contact: "Kontakt",
        title: "Willkommen auf der Website",
        description: "Dies ist eine einfache Webseite mit Sprachwahlfunktion."
    },
    ja: {
        home: "ホーム",
        about: "私たちについて",
        contact: "連絡先",
        title: "ウェブサイトへようこそ",
        description: "これは言語選択機能を持つシンプルなウェブページです。"
    }
};

const languageSelector = document.getElementById('language-selector');
const homeLink = document.getElementById('home');
const aboutLink = document.getElementById('about');
const contactLink = document.getElementById('contact');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');

languageSelector.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    const translation = translations[selectedLanguage];

    homeLink.textContent = translation.home;
    aboutLink.textContent = translation.about;
    contactLink.textContent = translation.contact;
    titleElement.textContent = translation.title;
    descriptionElement.textContent = translation.description;
});

// Toggle navigation for small screens
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
