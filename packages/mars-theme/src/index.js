import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const teamHandler = {
  pattern: "/about-us",
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
  pattern: "/antlia-defi",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isStakeFlow: true,
    })
  }
}

const sitemapHandler = {
  pattern: "/sitemap",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isSitemap: true,
    })
  }
}


const blogHandler = {
  pattern: "/blog",
  func: async ({ route, state, libraries }) => {
    const { api, populate } = libraries.source
    const response = await api.get({
      endpoint: 'posts',
      params: {
        per_page: 100,
        _embed: true,
      },
    })
    const firstItems = await populate({
      response,
      state,
    })
    const newItems = await Promise.all(firstItems)
    const items = firstItems.concat(newItems)
    Object.assign(state.source.data[route], {
      type: "page",
      isBlog: true,
      items,
    })
  }
}

const eventsHandler = {
  pattern: "/events",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isEvents: true,
    })
  }
}

const privacyHandler = {
  pattern: "/privacy-policy",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isPrivacy: true,
    })
  }
}

const antliaFaucet = {
  pattern: "/antlia-faucet",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAntliaFaucet: true,
    })
  }
}

const antliaWallet = {
  pattern: "/antlia-wallet",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAntliaWallet: true,
    })
  }
}

const antliaExplorer = {
  pattern: "/antlia-explorer",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAntliaExplorer: true,
    })
  }
}

const antliaBlockchain = {
  pattern: "/antlia-blockchain",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAntliaBlockchain: true,
    })
  }
}

const antliaExchange = {
  pattern: "/antlia-exchange",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route], {
      type: "page",
      isAntliaExchange: true,
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
        showOnList: true,
        showOnPost: true,
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
        libraries.source.handlers.push(sitemapHandler);
        libraries.source.handlers.push(blogHandler);
        libraries.source.handlers.push(antliaFaucet);
        libraries.source.handlers.push(antliaWallet);
        libraries.source.handlers.push(antliaExplorer);
        libraries.source.handlers.push(eventsHandler);
        libraries.source.handlers.push(antliaBlockchain);
        libraries.source.handlers.push(antliaExchange);
        libraries.source.handlers.push(privacyHandler);
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
