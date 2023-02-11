
import AuthLogo from './extensions/logo.jpeg';
import MenuLogo from './extensions/logo.jpeg';
export default {
  config: {
    // Override or extend the theme

    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    // head: {
    //   favicon: favicon,
    // },

    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    theme: {
      colors: {
        alternative100: "#f6ecfc",
        alternative200: "#e0c1f4",
        alternative500: "#ac73e6",
        alternative600: "#9736e8",
        alternative700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
    // // Extend the translations
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Exa Realestate",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.welcome.title": "Welcome to your admin dashboard",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    // notifications: { release: false },
  },

  bootstrap() {},
};
