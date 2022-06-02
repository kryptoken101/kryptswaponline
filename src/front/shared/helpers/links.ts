const linksManager = {
  home: '/',
  hashHome: '#/',

  exchange: '/exchange',
  quickSwap: '/exchange/quick',

  // Market maker page - for run parallel swaps in background
  marketmaker: '/marketmaker',
  marketmaker_short: '/mm',

  history: '/history',
  createWallet: '/createWallet',
  restoreWallet: '/restoreWallet',
  connectWallet: '/connectWallet',
  invoices: '/invoices',
  invoice: '/invoice',
  farm: 'https://pearlium.online/farm-factory/',
  localStorage: '/localStorage',

  wallets: '/wallets',
  send: '/withdraw',
  savePrivateSeed: '/savePrivateSeed',
  savePrivateKeys: '/savePrivateKeys',
  currencyWallet: '/wallet',
  atomicSwap: '/atomic-swaps',
  turboSwap: '/turbo-swaps',
  feed: '/feed',
  test: 'https://testnet.coinpearls.tk',
  main: 'https://coinpearls.tk/',
  wallet: '/wallet',
  notFound: '/NotFound',
  multisign: '/multisign',
  createInvoice: '/createinvoice',

  // social networks
  medium: 'https://medium.com/@pearliumph',
  twitter: 'https://twitter.com/PearliumPH',
  facebook: 'https://www.facebook.com/pearliumcrypto',
  github: 'https://github.com/pearliumph/CoinPearls',
  telegram: 'https://t.me/pearlium',
  bitcointalk: '#',
  discord: 'discord.me/pearlium',
  reddit: 'https://www.reddit.com/user/Pearlium-PH-2021',
  youtube: 'https://www.youtube.com/channel/UC9oCAIeJSSwPOPeTNEvi1_g',

  transak: 'https://global.transak.com/',
  transakDev: 'https://staging-global.transak.com/',
  transactionRate: 'https://en.bitcoin.it/wiki/Maximum_transaction_rate#:~:text=Each%20transaction%20input%20requires%20at,the%20minimum-sized%20Bitcoin%20transaction',
  impermanentLoss: 'https://academy.binance.com/en/articles/impermanent-loss-explained',
  swapAudit: 'https://medium.com/swaponline/technical-audit-of-swap-core-is-finished-successfully-65a67bc5f58a',
  currencyCourses: 'https://noxon.wpmix.net/cursAll.php',

  // footer links
  etherdelta: 'https://etherdelta.com',
  button: 'https://coinpearls.tk',
  about: 'https:pearlium.online/',
  extension: 'https://drive.google.com/file/d/1u_TG09OgfJDLvBUewYCViBqJIo1Km7gS/view?usp=sharing',
  career: '#',
  contacts: 'https://pearlium.online/contact-us',
  concept: '#',
  description: '#',
  research: '#',
  wiki: 'https://pearlium.online/wiki',
  bitcointalkSendTx: '#',
  privacyPolicy: https://pearlium.online/wpautoterms/privacy-policy/',
  privacyPolicyDoc: '#',
  terms: 'https://pearlium.online/wpautoterms/terms-and-conditions/',
  legalOpinion: '#',
  licence: '#',
  faq: [
    {
      question: 'What is a Pearl token?',
      link: 'https://pearlium.online/faq/#pearl-faq-1',
    },
    {
      question: 'I don\'t see the Order, although the others can see it (or it can be seen from a different browser)',
      link: 'https://pearlium.online/faq/#pearl-faq-2',
    },
    {
      question: 'Where are my private keys stored?',
      link: 'https://pearlium.online/faq/#pearl-faq-3',
    },
    {
      question: 'Is KYC required?',
      link: 'https://pearlium.online/faq/#pearl-faq-4',
    },
    {
      question: 'What pearl pairs are available?',
      link: 'https://pearlium.online/faq/#pearl-faq-5',
    },
    {
      question: 'Is there a fee to trade?',
      link: 'https://pearlium.online/faq/#pearl-faq-6',
    },
    {
      question: 'How much is the gas fee?',
      link: 'https://pearlium.online/faq/#pearl-faq-7',
    },
    {
      question: 'Minimum amount or sum to execute a trade?',
      link: 'https://pearlium.online/faq/#pearl-faq-8',
    },
    {
      question: 'The swap transaction got stuck but my crypto has already been sent. What should I do?',
      link: 'https://pearlium.online/faq/#pearl-faq-9',
    },
    {
      question: 'In what language is this written, and where I can find source code?',
      link: 'https://pearlium.online/faq/#pearl-faq-10',
    },
    {
      question: 'Pearlium Side-Projects',
      link: 'https://pearlium.online/faq/#pearl-faq-11',
    },
    {
      question: 'What is CoinPearls.Button?',
      link: 'https://pearlium.online/faq/#pearl-faq-12',
    },
    {
      question: 'Advantages of using the exchanger based on Pearlium.Online DEP',
      link: 'https://pearlium.online/faq/#pearl-faq-13',
    },
    {
      question: 'Request is declined. Why?',
      link: 'https://pearlium.online/faq/#pearl-faq-14',
      id: 'requestDeclined',
    },
  ],
  // footer new links
  footer: {
    exchange: 'https://coinpearls.tk/exchange',
    wallet: 'https://coinpearls.tk/',
    widget: 'https://widget.coinpearls.tk/',
    chromeextension: 'https://drive.google.com/file/d/1u_TG09OgfJDLvBUewYCViBqJIo1Km7gS/view?usp=sharing',
    forstablecoin: '#',
    fordexses: '#',
    forblockchains: 'https://wiki.swaponline.io/for_blockchains/',
    whitepaper: 'https://pearlium.online/whitepaper',
    wiki: 'https://pearlium.online/wiki',
    github: 'https://github.com/pearliumph',
    about: 'https://pearlium.online/about-coinpearls/',
    agreements: '#',
    privacypolicy: '#',
    legal: '#',
    contacts: 'https://pearlium.online/contact-us',
    comparsion: '#',
    bankdashboard: '#',
    lnresearch: '#',
  },

  getFaqLink(faqID) {
    for (let i = 0; i < this.faq.length; i++) {
      if (this.faq[i].id
        && (this.faq[i].id === faqID)
      ) {
        return this.faq[i].link
      }
    }
    return false
  },
}

export const getFullOrigin = () => `${location.origin}${location.pathname}#`


export default linksManager
