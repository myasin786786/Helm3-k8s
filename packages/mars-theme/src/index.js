import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const teamHandler = {
  pattern: "/aboutus",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAbout: true,
    })
  }
}

const investHandler = {
  pattern: "/investment",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isInvestment: true,
    })
  }
}

const stakeFlowHandler = {
  pattern: "/stakeflow",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isStakeFlow: true,
    })
  }
}

const walletHandler = {
  pattern: "/wallet",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isWallet: true,
    })
  }
}

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(teamHandler);
        libraries.source.handlers.push(investHandler);
        libraries.source.handlers.push(stakeFlowHandler);
        libraries.source.handlers.push(walletHandler);
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
