import { gtmId, wordPressLink } from './packages/mars-theme/src/store/config';

const settings = {
  "name": "antlia-web-frontity",
  "state": {
    "frontity": {
      "url": wordPressLink,
      "title": "ANTLIA - Beyond Interchange & Oracles",
      "description": "We Antlia blockchain work on interchain and oracles, smart contracts, Rollover Proof of Stake (rPoS) and are interoperable."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/google-tag-manager-analytics",
      "state": {
        "googleTagManagerAnalytics": {
          "containerId": gtmId,
        },
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": wordPressLink
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
