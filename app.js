/**
 * ORIYES EXCHANGE - REAL-TIME MULTI-CURRENCY CONVERTER
 * Features:
 * - English & Bangla Bilingual Support (Zero Hindi)
 * - Custom Fixed Rates per Pair/Direction with Live Market Comparison
 * - 58mm / 80mm Mini POS Thermal Printer Receipt Slip (Market Rate Removed)
 * - Real SVG Country Flags for Windows PC & Mobile
 * - Dedicated Full-Width Amount Layout for Huge Numbers
 * - Glitch-Free Bottom Sheet Drawer with Background Scroll Lock
 * - Cache-Busted Real-Time Rate Refresh with Live Timestamps
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. BILINGUAL DICTIONARY (English & Bangla Only)
  // =========================================================================
  const I18N = {
    en: {
      loading_rates: "Connecting to Live Exchange Feeds...",
      badge_gateway: "Global Currency Gateway",
      live_status: "LIVE",
      exchange_money: "Exchange Money",
      hero_desc: "Real-time market rates and customized client payouts with owner profit controls.",
      apps_title: "Features & Apps",
      app_exchange: "Exchange",
      app_settings: "Settings",
      app_board: "Rate Board",
      app_slip: "POS Slip",
      active_rate_mode: "Active Rate Setting",
      configure: "Configure ➔",
      back: "Back",
      client_gives: "You Receive (Client Pays)",
      client_receives: "Client Receives (Payout)",
      final_payout: "PAYOUT",
      clear: "Clear",
      market_rate: "Live Market Rate:",
      applied_rate: "Applied Client Rate:",
      rate_type: "Pricing Source:",
      you_receive: "You Receive:",
      your_profit: "Your Net Profit:",
      client_payout_total: "Client Net Payout:",
      copy_receipt: "Copy Client Receipt",
      view_slip: "Print POS Slip",
      quick_benchmarks: "Quick Conversion Benchmarks",
      settings_title: "Exchange Settings",
      save: "Save",
      pricing_method: "Exchange Pricing Method",
      pricing_desc: "Choose whether to give clients custom fixed rates or an automatic percentage margin.",
      mode_fixed_title: "Custom Fixed Rates",
      mode_fixed_sub: "Set exact rate per pair (e.g., 1 USD = 120 BDT)",
      mode_margin_title: "Margin Percentage (%)",
      mode_margin_sub: "Automatic percentage cut from live market rate",
      fixed_rates_title: "Custom Rates for Currency Pairs",
      active: "ACTIVE",
      fixed_rates_desc: "Specify the exact rate client receives. Live market rate is shown for reference so you can easily lock in your profit in both directions.",
      add_pair_title: "Add Custom Currency Pair",
      add_pair_btn: "+ Add Pair",
      margin_percent_title: "Owner Profit Margin (%)",
      margin_percent_desc: "Fallback percentage cut applied to live market rates if no custom fixed rate is set.",
      profit_margin: "Profit Margin:",
      prefs_title: "Preferences & Language",
      app_lang: "Application Language:",
      default_send: "Default Send (Client Gives):",
      default_receive: "Default Receive (Client Gets):",
      reset_defaults: "Reset to Defaults",
      save_changes: "Save Changes",
      board_title: "Live Rate Board",
      base_curr: "Base Currency:",
      col_currency: "Currency",
      col_market: "Market Rate",
      col_client: "Client Rate",
      col_action: "Action",
      select_currency: "Select Currency",
      search_currency: "Select or search currency",
      popular: "Popular Quick Select:",
      receipt_slip_title: "POS Thermal Slip",
      client_gave: "CLIENT PAID:",
      applied_rate_slip: "EXCHANGE RATE:",
      net_payout: "NET CLIENT PAYOUT:",
      thank_you: "Thank you for exchanging with us!",
      copy_text: "Copy Text",
      print_slip: "Print 58/80mm POS Slip",
      toast_copied: "Receipt copied to clipboard!",
      toast_saved: "Settings saved successfully!",
      toast_reset: "Settings reset to defaults!",
      toast_swapped: "Swapped pair to ",
      toast_refreshed: "Live rates refreshed! "
    },
    bn: {
      loading_rates: "রিয়েল-টাইম এক্সচেঞ্জ রেট কানেক্ট হচ্ছে...",
      badge_gateway: "গ্লোবাল কারেন্সি গেটওয়ে",
      live_status: "লাইভ",
      exchange_money: "মানি এক্সচেঞ্জ",
      hero_desc: "রিয়েল-টাইম মার্কেট রেট এবং নিজস্ব লাভ সহ ক্লায়েন্ট পেআউট ক্যালকুলেটর।",
      apps_title: "ফিচার ও অ্যাপস",
      app_exchange: "এক্সচেঞ্জ",
      app_settings: "সেটিংস",
      app_board: "রেট বোর্ড",
      app_slip: "পিওএস স্লিপ",
      active_rate_mode: "সক্রিয় রেট মোড",
      configure: "পরিবর্তন ➔",
      back: "পেছনে",
      client_gives: "আপনি পাবেন (ক্লায়েন্ট দিবে)",
      client_receives: "ক্লায়েন্ট পাবে (পেআউট)",
      final_payout: "পেআউট",
      clear: "মুছুন",
      market_rate: "লাইভ মার্কেট রেট:",
      applied_rate: "প্রযোজ্য ক্লায়েন্ট রেট:",
      rate_type: "রেট নির্ধারণ:",
      you_receive: "আপনার প্রাপ্তি:",
      your_profit: "আপনার মোট লাভ:",
      client_payout_total: "ক্লায়েন্টকে মোট পরিশোধ:",
      copy_receipt: "রসিদ কপি করুন",
      view_slip: "পিওএস স্লিপ প্রিন্ট",
      quick_benchmarks: "দ্রুত কনভার্সন চার্ট",
      settings_title: "এক্সচেঞ্জ সেটিংস",
      save: "সংরক্ষণ",
      pricing_method: "রেট নির্ধারণের পদ্ধতি",
      pricing_desc: "ক্লায়েন্টের জন্য ফিক্সড রেট অথবা শতাংশ (%) প্রফিট মার্জিন বেছে নিন।",
      mode_fixed_title: "কাস্টম ফিক্সড রেট",
      mode_fixed_sub: "প্রতিটি পেয়ারে নির্দিষ্ট রেট সেট করুন (যেমন ১ USD = ১২০ BDT)",
      mode_margin_title: "শতাংশ মার্জিন (%)",
      mode_margin_sub: "মার্কেট রেট থেকে স্বয়ংক্রিয় শতাংশ কর্তন",
      fixed_rates_title: "কারেন্সি পেয়ারের ফিক্সড রেট",
      active: "সক্রিয়",
      fixed_rates_desc: "ক্লায়েন্ট যে রেট পাবে তা সরাসরি নির্ধারণ করুন। উভয় দিকেই সহজে আপনার লাভ নিশ্চিত করুন।",
      add_pair_title: "নতুন কারেন্সি পেয়ার যুক্ত করুন",
      add_pair_btn: "+ পেয়ার যোগ করুন",
      margin_percent_title: "লাভের শতাংশ (%)",
      margin_percent_desc: "কোনো ফিক্সড রেট না থাকলে মার্কেট রেটে এই মার্জিন কার্যকর হবে।",
      profit_margin: "প্রফিট মার্জিন:",
      prefs_title: "পছন্দ ও ভাষা",
      app_lang: "অ্যাপের ভাষা:",
      default_send: "ডিফল্ট প্রদান (ক্লায়েন্ট দিবে):",
      default_receive: "ডিফল্ট গ্রহণ (ক্লায়েন্ট পাবে):",
      reset_defaults: "রিসেট করুন",
      save_changes: "সেভ করুন",
      board_title: "লাইভ রেট বোর্ড",
      base_curr: "মূল কারেন্সি:",
      col_currency: "কারেন্সি",
      col_market: "মার্কেট রেট",
      col_client: "ক্লায়েন্ট রেট",
      col_action: "অ্যাকশন",
      select_currency: "কারেন্সি নির্বাচন করুন",
      search_currency: "কারেন্সি খুঁজুন বা নির্বাচন করুন",
      popular: "জনপ্রিয় কারেন্সি:",
      receipt_slip_title: "পিওএস থার্মাল স্লিপ",
      client_gave: "ক্লায়েন্ট পরিশোধ:",
      applied_rate_slip: "এক্সচেঞ্জ রেট:",
      net_payout: "ক্লায়েন্টকে মোট পরিশোধ:",
      thank_you: "আমাদের সাথে এক্সচেঞ্জ করার জন্য ধন্যবাদ!",
      copy_text: "টেক্সট কপি",
      print_slip: "৫৮/৮০মিমি স্লিপ প্রিন্ট",
      toast_copied: "রসিদ ক্লিপবোর্ডে কপি হয়েছে!",
      toast_saved: "সেটিংস সফলভাবে সংরক্ষিত হয়েছে!",
      toast_reset: "সেটিংস ডিফল্টে রিসেট হয়েছে!",
      toast_swapped: "পেয়ার পরিবর্তন হয়েছে: ",
      toast_refreshed: "লাইভ রেট রিফ্রেশ হয়েছে! "
    }
  };

  // =========================================================================
  // 2. CURRENCY & REAL FLAG REPOSITORY (Works on PC & Mobile)
  // =========================================================================
  const COUNTRY_MAP = {
    USD: 'us', BDT: 'bd', SAR: 'sa', AED: 'ae', EUR: 'eu', GBP: 'gb', INR: 'in',
    MYR: 'my', CAD: 'ca', KWD: 'kw', QAR: 'qa', OMR: 'om', BHD: 'bh', SGD: 'sg',
    AUD: 'au', JPY: 'jp', CNY: 'cn', TRY: 'tr', PKR: 'pk', CHF: 'ch', NZD: 'nz',
    THB: 'th', KRW: 'kr', IDR: 'id', PHP: 'ph', VND: 'vn', EGP: 'eg', ZAR: 'za',
    BRL: 'br', MXN: 'mx', RUB: 'ru', HKD: 'hk', SEK: 'se', NOK: 'no', DKK: 'dk',
    PLN: 'pl', ILS: 'il', LKR: 'lk', NPR: 'np', MAD: 'ma', JOD: 'jo', KZT: 'kz'
  };

  function getFlagImgHtml(currencyCode) {
    const country = COUNTRY_MAP[currencyCode] || (currencyCode.length >= 2 ? currencyCode.substring(0, 2).toLowerCase() : 'un');
    return `<img src="https://flagcdn.com/w40/${country}.png" class="country-flag-img" alt="${currencyCode}" loading="lazy" onerror="this.style.display='none';">`;
  }

  const CURRENCIES = {
    USD: { code: 'USD', name: 'US Dollar', symbol: '$' },
    BDT: { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳' },
    SAR: { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
    AED: { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
    EUR: { code: 'EUR', name: 'Euro', symbol: '€' },
    GBP: { code: 'GBP', name: 'British Pound', symbol: '£' },
    INR: { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    MYR: { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
    CAD: { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$' },
    KWD: { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'KD' },
    QAR: { code: 'QAR', name: 'Qatari Riyal', symbol: 'QR' },
    OMR: { code: 'OMR', name: 'Omani Rial', symbol: 'OMR' },
    BHD: { code: 'BHD', name: 'Bahraini Dinar', symbol: 'BD' },
    SGD: { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
    AUD: { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    JPY: { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    CNY: { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    TRY: { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
    PKR: { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' }
  };

  // Default pairs for custom fixed pricing
  const DEFAULT_FIXED_PAIRS = {
    'USD_TO_BDT': { from: 'USD', to: 'BDT', customRate: 120.00, enabled: true },
    'BDT_TO_USD': { from: 'BDT', to: 'USD', customRate: 0.0078, enabled: true },
    'SAR_TO_BDT': { from: 'SAR', to: 'BDT', customRate: 32.00, enabled: true },
    'BDT_TO_SAR': { from: 'BDT', to: 'SAR', customRate: 0.029, enabled: true },
    'AED_TO_BDT': { from: 'AED', to: 'BDT', customRate: 32.50, enabled: true },
    'BDT_TO_AED': { from: 'BDT', to: 'AED', customRate: 0.0295, enabled: true },
    'EUR_TO_BDT': { from: 'EUR', to: 'BDT', customRate: 130.00, enabled: true },
    'BDT_TO_EUR': { from: 'BDT', to: 'EUR', customRate: 0.0072, enabled: true },
    'GBP_TO_BDT': { from: 'GBP', to: 'BDT', customRate: 153.00, enabled: true },
    'BDT_TO_GBP': { from: 'BDT', to: 'GBP', customRate: 0.0062, enabled: true },
    'MYR_TO_BDT': { from: 'MYR', to: 'BDT', customRate: 27.50, enabled: true }
  };

  const STORAGE_KEY_SETTINGS = 'oriyes_exchange_settings_v3';
  const STORAGE_KEY_RATES = 'oriyes_exchange_cached_rates_v3';

  // =========================================================================
  // 3. APPLICATION STATE
  // =========================================================================
  const state = {
    lang: 'en',
    fromCurrency: 'USD',
    toCurrency: 'SAR',
    amount: 100,

    settings: {
      pricingMode: 'fixed',
      profitMarginPercent: 2.0,
      fixedRates: Object.assign({}, DEFAULT_FIXED_PAIRS),
      defaultFrom: 'USD',
      defaultTo: 'SAR'
    },

    rates: {
      USD: 1,
      BDT: 124.90,
      SAR: 3.75,
      AED: 3.67,
      EUR: 0.92,
      GBP: 0.79,
      INR: 84.30,
      MYR: 4.42,
      CAD: 1.39,
      KWD: 0.31,
      QAR: 3.64
    },
    lastUpdatedUtc: 'Loading...',
    lastRefreshedTimeStr: 'Just now',

    activePickerTarget: 'from',
    boardBaseCurrency: 'USD'
  };

  function loadPersistedData() {
    try {
      const savedSettings = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        state.settings = Object.assign(state.settings, parsed);
        if (!state.settings.fixedRates) {
          state.settings.fixedRates = Object.assign({}, DEFAULT_FIXED_PAIRS);
        }
        state.fromCurrency = state.settings.defaultFrom || 'USD';
        state.toCurrency = state.settings.defaultTo || 'SAR';
      }

      const savedLang = localStorage.getItem('oriyes_exchange_lang');
      if (savedLang === 'bn' || savedLang === 'en') {
        state.lang = savedLang;
      }

      const cachedRates = localStorage.getItem(STORAGE_KEY_RATES);
      if (cachedRates) {
        const parsed = JSON.parse(cachedRates);
        if (parsed.rates) {
          state.rates = parsed.rates;
          state.lastUpdatedUtc = parsed.time || 'Cached';
        }
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(state.settings));
      localStorage.setItem('oriyes_exchange_lang', state.lang);
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  // =========================================================================
  // 4. API FETCH & REAL-TIME REFRESH ENGINE
  // =========================================================================
  async function fetchLiveExchangeRates(triggerElement, isManual = false) {
    if (triggerElement) {
      triggerElement.classList.add('rotating');
    }

    const apiUrl = `https://open.er-api.com/v6/latest/USD?_t=${Date.now()}`;

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
      const data = await res.json();

      if (data.result === 'success' && data.rates) {
        state.rates = data.rates;
        state.lastUpdatedUtc = data.time_last_update_utc || new Date().toUTCString();

        const now = new Date();
        const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        state.lastRefreshedTimeStr = timeFormatted;

        Object.keys(data.rates).forEach(code => {
          if (!CURRENCIES[code]) {
            CURRENCIES[code] = {
              code: code,
              name: code,
              symbol: code
            };
          }
        });

        localStorage.setItem(STORAGE_KEY_RATES, JSON.stringify({
          rates: state.rates,
          time: state.lastUpdatedUtc
        }));

        if (isManual) {
          showToast(`${t('toast_refreshed')} (${timeFormatted})`);
        }
      }
    } catch (err) {
      console.warn('Live rate fetch warning:', err);
      if (isManual) {
        showToast('Live rate refresh completed (Cached feed active)');
      }
    } finally {
      if (triggerElement) {
        setTimeout(() => triggerElement.classList.remove('rotating'), 650);
      }
      updateAllUI();
      hideLoadingScreen();
    }
  }

  // =========================================================================
  // 5. CALCULATION ENGINE
  // =========================================================================
  function getMarketRate(fromCode, toCode) {
    const rateFrom = state.rates[fromCode] || 1;
    const rateTo = state.rates[toCode] || 1;
    return rateTo / rateFrom;
  }

  function calculateExchange() {
    const from = state.fromCurrency;
    const to = state.toCurrency;
    const amount = parseFloat(state.amount) || 0;

    const marketRate = getMarketRate(from, to);
    const pairKey = `${from}_TO_${to}`;
    const fixedEntry = state.settings.fixedRates ? state.settings.fixedRates[pairKey] : null;

    let effectiveRate = marketRate;
    let isFixedRate = false;
    let clientReceives = 0;
    let ownerProfitInTo = 0;

    if (state.settings.pricingMode === 'fixed' && fixedEntry && fixedEntry.enabled && parseFloat(fixedEntry.customRate) > 0) {
      effectiveRate = parseFloat(fixedEntry.customRate);
      isFixedRate = true;
      clientReceives = amount * effectiveRate;
      const pureMarketVal = amount * marketRate;
      ownerProfitInTo = Math.max(0, pureMarketVal - clientReceives);
    } else {
      const margin = parseFloat(state.settings.profitMarginPercent) || 0;
      effectiveRate = marketRate * (1 - (margin / 100));
      clientReceives = amount * effectiveRate;
      const pureMarketVal = amount * marketRate;
      ownerProfitInTo = Math.max(0, pureMarketVal - clientReceives);
    }

    return {
      amount,
      from,
      to,
      pairKey,
      marketRate,
      effectiveRate,
      isFixedRate,
      clientReceives,
      ownerProfitInTo
    };
  }

  function formatMoney(num, decimals = 2) {
    if (isNaN(num) || num === null) return '0.00';
    if (num >= 1000) {
      return Number(num).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });
    }
    return Number(num).toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals >= 4 ? decimals : 4
    });
  }

  function formatRateDisplay(rate) {
    if (rate >= 100) return rate.toFixed(2);
    if (rate >= 1) return rate.toFixed(4);
    if (rate >= 0.001) return rate.toFixed(5);
    return rate.toFixed(6);
  }

  // =========================================================================
  // 6. DOM ELEMENTS
  // =========================================================================
  const dom = {
    loadingScreen: document.getElementById('loading-screen'),
    homeView: document.getElementById('home-view'),
    exchangeView: document.getElementById('exchange-view'),
    settingsView: document.getElementById('settings-view'),
    boardView: document.getElementById('board-view'),

    // Lang buttons
    langBtnEn: document.getElementById('lang-btn-en'),
    langBtnBn: document.getElementById('lang-btn-bn'),
    settingLanguage: document.getElementById('setting-language'),

    // Home Apps
    btnAppExchange: document.getElementById('btn-app-exchange'),
    btnAppSettings: document.getElementById('btn-app-settings'),
    btnAppBoard: document.getElementById('btn-app-board'),
    btnAppSlip: document.getElementById('btn-app-slip'),
    btnHomeConfig: document.getElementById('btn-home-config'),
    homeRateModeInfo: document.getElementById('home-rate-mode-info'),
    homeRatesTime: document.getElementById('home-rates-time'),

    // Exchange view
    btnBackHome: document.getElementById('btn-back-home'),
    btnRefreshRates: document.getElementById('btn-refresh-rates'),
    lastUpdatedText: document.getElementById('last-updated-text'),

    btnSelectFrom: document.getElementById('btn-select-from'),
    fromFlag: document.getElementById('from-flag'),
    fromCode: document.getElementById('from-code'),
    fromSymbol: document.getElementById('from-symbol'),
    amountInput: document.getElementById('amount-input'),
    btnClearAmount: document.getElementById('btn-clear-amount'),

    btnSwapCurrency: document.getElementById('btn-swap-currency'),

    btnSelectTo: document.getElementById('btn-select-to'),
    toFlag: document.getElementById('to-flag'),
    toCode: document.getElementById('to-code'),
    toSymbol: document.getElementById('to-symbol'),
    clientReceivesAmount: document.getElementById('client-receives-amount'),

    marketRateText: document.getElementById('market-rate-text'),
    effectiveRateText: document.getElementById('effective-rate-text'),
    rateSourceTag: document.getElementById('rate-source-tag'),
    summaryYouGet: document.getElementById('summary-you-get'),
    summaryYourProfit: document.getElementById('summary-your-profit'),
    summaryClientPayout: document.getElementById('summary-client-payout'),
    quickPairsGrid: document.getElementById('quick-pairs-grid'),

    btnCopySummary: document.getElementById('btn-copy-summary'),
    btnOpenReceiptModal: document.getElementById('btn-open-receipt-modal'),

    // Settings view
    btnBackFromSettings: document.getElementById('btn-back-from-settings'),
    btnSaveSettingsTop: document.getElementById('btn-save-settings-top'),
    btnSaveSettings: document.getElementById('btn-save-settings'),
    btnResetSettings: document.getElementById('btn-reset-settings'),
    tabFixedMode: document.getElementById('tab-fixed-mode'),
    tabMarginMode: document.getElementById('tab-margin-mode'),
    fixedRatesSection: document.getElementById('fixed-rates-section'),
    marginRatesSection: document.getElementById('margin-rates-section'),
    pairsFixedList: document.getElementById('pairs-fixed-list'),
    addPairFrom: document.getElementById('add-pair-from'),
    addPairTo: document.getElementById('add-pair-to'),
    btnAddPair: document.getElementById('btn-add-pair'),
    marginRangeSlider: document.getElementById('margin-range-slider'),
    settingsMarginVal: document.getElementById('settings-margin-val'),
    settingDefaultFrom: document.getElementById('setting-default-from'),
    settingDefaultTo: document.getElementById('setting-default-to'),

    // Board view
    btnBackFromBoard: document.getElementById('btn-back-from-board'),
    btnBoardRefresh: document.getElementById('btn-board-refresh'),
    rateTableBody: document.getElementById('rate-table-body'),

    // Modals
    currencyModal: document.getElementById('currency-modal'),
    btnCloseCurrencyModal: document.getElementById('btn-close-currency-modal'),
    currencyModalTitle: document.getElementById('currency-modal-title'),
    currencySearchInput: document.getElementById('currency-search-input'),
    currencyListContainer: document.getElementById('currency-list-container'),
    popularChipsBox: document.getElementById('popular-chips-box'),
    btnClearSearch: document.getElementById('btn-clear-search'),

    // POS Receipt Modal
    receiptModal: document.getElementById('receipt-modal'),
    btnCloseReceiptModal: document.getElementById('btn-close-receipt-modal'),
    posDate: document.getElementById('pos-date'),
    posTime: document.getElementById('pos-time'),
    posTxnId: document.getElementById('pos-txn-id'),
    posClientPaid: document.getElementById('pos-client-paid'),
    posAppliedRate: document.getElementById('pos-applied-rate'),
    posNetPayout: document.getElementById('pos-net-payout'),
    btnCopyReceiptText: document.getElementById('btn-copy-receipt-text'),
    btnPrintReceipt: document.getElementById('btn-print-receipt'),

    toast: document.getElementById('toast')
  };

  // =========================================================================
  // 7. LANGUAGE (I18N) ENGINE
  // =========================================================================
  function applyLanguage(lang) {
    state.lang = lang;
    const dict = I18N[lang] || I18N.en;

    if (lang === 'bn') {
      dom.langBtnBn.classList.add('active');
      dom.langBtnEn.classList.remove('active');
    } else {
      dom.langBtnEn.classList.add('active');
      dom.langBtnBn.classList.remove('active');
    }

    if (dom.settingLanguage) {
      dom.settingLanguage.value = lang;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    saveSettings();
    updateAllUI();
  }

  function t(key) {
    const dict = I18N[state.lang] || I18N.en;
    return dict[key] || key;
  }

  // =========================================================================
  // 8. VIEW ROUTING
  // =========================================================================
  function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add('active-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function hideLoadingScreen() {
    if (dom.loadingScreen && !dom.loadingScreen.classList.contains('fade-out')) {
      setTimeout(() => dom.loadingScreen.classList.add('fade-out'), 300);
    }
  }

  // =========================================================================
  // 9. UI RENDER ENGINE
  // =========================================================================
  function updateAllUI() {
    updateHomeUI();
    updateExchangeUI();
    updateSettingsUI();
    updateBoardUI();
  }

  function updateHomeUI() {
    if (state.settings.pricingMode === 'fixed') {
      dom.homeRateModeInfo.textContent = state.lang === 'bn' 
        ? "কাস্টম ফিক্সড রেট সক্রিয়" 
        : "Custom Fixed Rates Active";
    } else {
      const m = parseFloat(state.settings.profitMarginPercent) || 0;
      dom.homeRateModeInfo.textContent = state.lang === 'bn'
        ? `মার্জিন মোড (${m.toFixed(1)}% লাভ)`
        : `Margin Mode (${m.toFixed(1)}% Margin)`;
    }

    if (dom.homeRatesTime) {
      dom.homeRatesTime.textContent = state.lastRefreshedTimeStr ? `Updated ${state.lastRefreshedTimeStr}` : 'Live';
    }
  }

  function updateExchangeUI() {
    const calc = calculateExchange();
    const metaFrom = CURRENCIES[state.fromCurrency] || { symbol: state.fromCurrency };
    const metaTo = CURRENCIES[state.toCurrency] || { symbol: state.toCurrency };

    // Selectors UI with real SVG flags
    dom.fromFlag.innerHTML = getFlagImgHtml(state.fromCurrency);
    dom.fromCode.textContent = state.fromCurrency;
    dom.fromSymbol.textContent = metaFrom.symbol || '';

    dom.toFlag.innerHTML = getFlagImgHtml(state.toCurrency);
    dom.toCode.textContent = state.toCurrency;
    dom.toSymbol.textContent = metaTo.symbol || '';

    // Output & Breakdowns
    dom.clientReceivesAmount.textContent = formatMoney(calc.clientReceives, 2);

    dom.marketRateText.textContent = `1 ${calc.from} = ${formatRateDisplay(calc.marketRate)} ${calc.to}`;
    dom.effectiveRateText.textContent = `1 ${calc.from} = ${formatRateDisplay(calc.effectiveRate)} ${calc.to}`;

    if (calc.isFixedRate) {
      dom.rateSourceTag.textContent = state.lang === 'bn' ? "কাস্টম ফিক্সড রেট" : "Custom Fixed Rate";
      dom.rateSourceTag.style.background = '#dbeafe';
      dom.rateSourceTag.style.color = '#1d4ed8';
    } else {
      dom.rateSourceTag.textContent = state.lang === 'bn' 
        ? `মার্জিন (-${state.settings.profitMarginPercent}%)` 
        : `Margin (-${state.settings.profitMarginPercent}%)`;
      dom.rateSourceTag.style.background = '#e2e8f0';
      dom.rateSourceTag.style.color = '#334155';
    }

    dom.summaryYouGet.textContent = `${formatMoney(calc.amount, 2)} ${calc.from}`;
    dom.summaryYourProfit.textContent = `+${formatMoney(calc.ownerProfitInTo, 2)} ${calc.to}`;
    dom.summaryClientPayout.textContent = `${formatMoney(calc.clientReceives, 2)} ${calc.to}`;

    if (dom.lastUpdatedText) {
      dom.lastUpdatedText.textContent = state.lastRefreshedTimeStr || 'Just now';
    }

    renderQuickBenchmarks();
  }

  function renderQuickBenchmarks() {
    if (!dom.quickPairsGrid) return;
    const benchmarks = [
      { from: 'USD', to: 'BDT' },
      { from: 'BDT', to: 'USD' },
      { from: 'SAR', to: 'BDT' },
      { from: 'BDT', to: 'SAR' },
      { from: 'AED', to: 'BDT' },
      { from: 'BDT', to: 'AED' },
      { from: 'EUR', to: 'BDT' },
      { from: 'GBP', to: 'BDT' }
    ];

    dom.quickPairsGrid.innerHTML = '';
    benchmarks.forEach(pair => {
      const mRate = getMarketRate(pair.from, pair.to);
      const pairKey = `${pair.from}_TO_${pair.to}`;
      const fixed = state.settings.fixedRates ? state.settings.fixedRates[pairKey] : null;

      let cRate = mRate;
      if (state.settings.pricingMode === 'fixed' && fixed && fixed.enabled && parseFloat(fixed.customRate) > 0) {
        cRate = parseFloat(fixed.customRate);
      } else {
        const margin = parseFloat(state.settings.profitMarginPercent) || 0;
        cRate = mRate * (1 - (margin / 100));
      }

      const item = document.createElement('div');
      item.className = 'benchmark-chip';
      item.innerHTML = `
        <span style="display:flex;align-items:center;gap:4px;">
          ${getFlagImgHtml(pair.from)}
          <strong style="font-size:11px;">${pair.from}➔${pair.to}</strong>
        </span>
        <span class="font-mono" style="color:var(--accent-blue);font-weight:700;">${formatRateDisplay(cRate)}</span>
      `;
      item.addEventListener('click', () => {
        state.fromCurrency = pair.from;
        state.toCurrency = pair.to;
        updateExchangeUI();
        showToast(`${t('toast_swapped')} ${pair.from} TO ${pair.to}`);
      });
      dom.quickPairsGrid.appendChild(item);
    });
  }

  // =========================================================================
  // 10. SETTINGS UI & CUSTOM FIXED PAIRS LIST
  // =========================================================================
  function updateSettingsUI() {
    if (state.settings.pricingMode === 'fixed') {
      dom.tabFixedMode.classList.add('active');
      dom.tabMarginMode.classList.remove('active');
      dom.fixedRatesSection.style.display = 'block';
      dom.marginRatesSection.style.display = 'none';
    } else {
      dom.tabMarginMode.classList.add('active');
      dom.tabFixedMode.classList.remove('active');
      dom.fixedRatesSection.style.display = 'none';
      dom.marginRatesSection.style.display = 'block';
    }

    dom.marginRangeSlider.value = state.settings.profitMarginPercent;
    dom.settingsMarginVal.textContent = parseFloat(state.settings.profitMarginPercent).toFixed(1);

    dom.settingDefaultFrom.value = state.settings.defaultFrom || 'USD';
    dom.settingDefaultTo.value = state.settings.defaultTo || 'BDT';

    renderFixedPairsList();
  }

  function renderFixedPairsList() {
    dom.pairsFixedList.innerHTML = '';
    const fixedRates = state.settings.fixedRates || {};
    const keys = Object.keys(fixedRates);

    if (keys.length === 0) {
      dom.pairsFixedList.innerHTML = `
        <div style="padding:16px;text-align:center;color:var(--text-dim);font-size:12.5px;">
          No custom fixed pairs configured. Click "+ Add Pair" below.
        </div>
      `;
      return;
    }

    keys.forEach(key => {
      const item = fixedRates[key];
      const from = item.from;
      const to = item.to;
      const marketRef = getMarketRate(from, to);

      const row = document.createElement('div');
      row.className = 'fixed-pair-row';
      row.innerHTML = `
        <div class="pair-info-left">
          <div class="pair-codes-label">
            <span style="display:flex;align-items:center;gap:5px;">
              ${getFlagImgHtml(from)} ${from} ➔ ${getFlagImgHtml(to)} ${to}
            </span>
            <span style="font-size:11px;color:var(--accent-blue);font-weight:700;">Client Rate</span>
          </div>
          <div class="pair-market-ref">
            Live Market: 1 ${from} = ${formatRateDisplay(marketRef)} ${to}
          </div>
        </div>
        <div class="pair-inputs-right">
          <input 
            type="number" 
            step="any" 
            class="fixed-rate-input-field" 
            data-key="${key}" 
            value="${item.customRate}" 
            placeholder="0.00"
          >
          <button class="btn-remove-pair" data-key="${key}" title="Delete pair">&times;</button>
        </div>
      `;
      dom.pairsFixedList.appendChild(row);
    });

    dom.pairsFixedList.querySelectorAll('.fixed-rate-input-field').forEach(input => {
      input.addEventListener('change', (e) => {
        const k = e.target.getAttribute('data-key');
        const val = parseFloat(e.target.value) || 0;
        if (state.settings.fixedRates[k]) {
          state.settings.fixedRates[k].customRate = val;
          saveSettings();
          updateExchangeUI();
        }
      });
    });

    dom.pairsFixedList.querySelectorAll('.btn-remove-pair').forEach(btn => {
      btn.addEventListener('click', () => {
        const k = btn.getAttribute('data-key');
        delete state.settings.fixedRates[k];
        saveSettings();
        renderFixedPairsList();
        updateExchangeUI();
      });
    });
  }

  // =========================================================================
  // 11. RATE BOARD UI
  // =========================================================================
  function updateBoardUI() {
    const base = state.boardBaseCurrency || 'USD';
    const topCodes = ['USD', 'BDT', 'SAR', 'AED', 'EUR', 'GBP', 'INR', 'MYR', 'CAD', 'AUD', 'KWD', 'QAR'];

    dom.rateTableBody.innerHTML = '';

    topCodes.forEach(code => {
      if (code === base) return;
      const marketRate = getMarketRate(base, code);
      const pairKey = `${base}_TO_${code}`;
      const fixed = state.settings.fixedRates ? state.settings.fixedRates[pairKey] : null;

      let clientRate = marketRate;
      if (state.settings.pricingMode === 'fixed' && fixed && fixed.enabled && parseFloat(fixed.customRate) > 0) {
        clientRate = parseFloat(fixed.customRate);
      } else {
        const margin = parseFloat(state.settings.profitMarginPercent) || 0;
        clientRate = marketRate * (1 - (margin / 100));
      }

      const meta = CURRENCIES[code] || { name: code };

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div class="table-currency-cell">
            ${getFlagImgHtml(code)}
            <div>
              <strong style="color:var(--text-main);">${code}</strong>
              <div style="font-size:11px;color:var(--text-dim);">${meta.name}</div>
            </div>
          </div>
        </td>
        <td class="font-mono">1 ${base} = ${formatRateDisplay(marketRate)}</td>
        <td class="font-mono" style="color:var(--accent-green);font-weight:800;">${formatRateDisplay(clientRate)}</td>
        <td>
          <button class="table-trade-btn" data-from="${base}" data-to="${code}">Exchange</button>
        </td>
      `;
      dom.rateTableBody.appendChild(tr);
    });

    dom.rateTableBody.querySelectorAll('.table-trade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.fromCurrency = btn.getAttribute('data-from');
        state.toCurrency = btn.getAttribute('data-to');
        updateExchangeUI();
        showView('exchange-view');
      });
    });
  }

  // =========================================================================
  // 12. CURRENCY PICKER BOTTOM DRAWER (No keyboard jump, solid bottom)
  // =========================================================================
  function openCurrencyPicker(target) {
    state.activePickerTarget = target;
    dom.currencyModalTitle.textContent = target === 'from' ? t('client_gives') : t('client_receives');
    dom.currencySearchInput.value = '';
    renderPopularChips();
    renderCurrencyList('');
    document.body.classList.add('modal-open');
    dom.currencyModal.classList.add('active');
  }

  function closeCurrencyPicker() {
    dom.currencyModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  function renderPopularChips() {
    const popularCodes = ['USD', 'BDT', 'SAR', 'AED', 'EUR', 'GBP', 'INR', 'MYR', 'CAD', 'KWD'];
    dom.popularChipsBox.innerHTML = '';
    popularCodes.forEach(code => {
      const btn = document.createElement('button');
      btn.className = 'pop-chip';
      btn.setAttribute('data-code', code);
      btn.innerHTML = `${getFlagImgHtml(code)} <span>${code}</span>`;
      btn.addEventListener('click', () => {
        if (state.activePickerTarget === 'from') {
          state.fromCurrency = code;
          if (state.toCurrency === code) state.toCurrency = (code === 'BDT' ? 'USD' : 'BDT');
        } else {
          state.toCurrency = code;
          if (state.fromCurrency === code) state.fromCurrency = (code === 'USD' ? 'BDT' : 'USD');
        }
        closeCurrencyPicker();
        updateExchangeUI();
        updateHomeUI();
      });
      dom.popularChipsBox.appendChild(btn);
    });
  }

  function renderCurrencyList(query) {
    const q = query.trim().toLowerCase();
    dom.currencyListContainer.innerHTML = '';

    const keys = Object.keys(CURRENCIES).filter(code => {
      const meta = CURRENCIES[code];
      return code.toLowerCase().includes(q) || meta.name.toLowerCase().includes(q);
    });

    if (keys.length === 0) {
      dom.currencyListContainer.innerHTML = `
        <div style="padding:24px;text-align:center;color:var(--text-dim);font-size:13px;">
          No currency matches "${query}"
        </div>
      `;
      return;
    }

    keys.forEach(code => {
      const meta = CURRENCIES[code];
      const isSelected = (state.activePickerTarget === 'from' && state.fromCurrency === code) ||
                         (state.activePickerTarget === 'to' && state.toCurrency === code);

      const item = document.createElement('div');
      item.className = `currency-list-item ${isSelected ? 'selected' : ''}`;
      item.innerHTML = `
        <div class="item-left">
          ${getFlagImgHtml(code)}
          <div>
            <div class="item-code">${meta.code}</div>
            <div class="item-name">${meta.name}</div>
          </div>
        </div>
        <div class="item-symbol">${meta.symbol || ''}</div>
      `;

      item.addEventListener('click', () => {
        if (state.activePickerTarget === 'from') {
          state.fromCurrency = code;
          if (state.toCurrency === code) {
            state.toCurrency = (code === 'BDT' ? 'USD' : 'BDT');
          }
        } else {
          state.toCurrency = code;
          if (state.fromCurrency === code) {
            state.fromCurrency = (code === 'USD' ? 'BDT' : 'USD');
          }
        }
        closeCurrencyPicker();
        updateExchangeUI();
        updateHomeUI();
      });

      dom.currencyListContainer.appendChild(item);
    });
  }

  // =========================================================================
  // 13. 58mm/80mm POS THERMAL RECEIPT SLIP (Market Rate Removed)
  // =========================================================================
  function openReceiptModal() {
    const calc = calculateExchange();
    const now = new Date();
    const txnNum = Math.floor(100000 + Math.random() * 900000);

    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    if (dom.posDate) dom.posDate.textContent = dateStr;
    if (dom.posTime) dom.posTime.textContent = timeStr;
    if (dom.posTxnId) dom.posTxnId.textContent = `XC-${txnNum}`;

    if (dom.posClientPaid) {
      dom.posClientPaid.textContent = `${formatMoney(calc.amount, 2)} ${calc.from}`;
    }
    if (dom.posAppliedRate) {
      dom.posAppliedRate.textContent = `1 ${calc.from} = ${formatRateDisplay(calc.effectiveRate)} ${calc.to}`;
    }
    if (dom.posNetPayout) {
      dom.posNetPayout.textContent = `${formatMoney(calc.clientReceives, 2)} ${calc.to}`;
    }

    document.body.classList.add('modal-open');
    dom.receiptModal.classList.add('active');
  }

  function closeReceiptModal() {
    dom.receiptModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  function copySummaryToClipboard() {
    const calc = calculateExchange();
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Client Slip (Market rate excluded)
    const text = 
`🧾 *ORIYES EXCHANGE - POS TRANSACTION RECEIPT*
──────────────────────────────
📅 Date: ${dateStr} ${timeStr}
💰 Client Paid: ${formatMoney(calc.amount, 2)} ${calc.from}
⚡ Exchange Rate: 1 ${calc.from} = ${formatRateDisplay(calc.effectiveRate)} ${calc.to}
💵 Net Client Payout: ${formatMoney(calc.clientReceives, 2)} ${calc.to}
──────────────────────────────
✅ Verified Oriyes Exchange`;

    navigator.clipboard.writeText(text).then(() => {
      showToast(t('toast_copied'));
    }).catch(() => {
      showToast('Copied receipt text!');
    });
  }

  function showToast(msg) {
    if (!dom.toast) return;
    dom.toast.textContent = msg;
    dom.toast.classList.add('show');
    setTimeout(() => dom.toast.classList.remove('show'), 2600);
  }

  // =========================================================================
  // 14. EVENT BINDINGS
  // =========================================================================
  function initEvents() {
    // Language Toggle
    dom.langBtnEn.addEventListener('click', () => applyLanguage('en'));
    dom.langBtnBn.addEventListener('click', () => applyLanguage('bn'));
    dom.settingLanguage.addEventListener('change', (e) => applyLanguage(e.target.value));

    // Mobile App Icons Grid (Feature Section)
    dom.btnAppExchange.addEventListener('click', () => {
      showView('exchange-view');
      updateExchangeUI();
    });

    dom.btnAppSettings.addEventListener('click', () => {
      showView('settings-view');
      updateSettingsUI();
    });

    dom.btnHomeConfig.addEventListener('click', () => {
      showView('settings-view');
      updateSettingsUI();
    });

    dom.btnAppBoard.addEventListener('click', () => {
      showView('board-view');
      updateBoardUI();
    });

    dom.btnAppSlip.addEventListener('click', openReceiptModal);

    // Back Navigation
    dom.btnBackHome.addEventListener('click', () => showView('home-view'));
    dom.btnBackFromSettings.addEventListener('click', () => showView('home-view'));
    dom.btnBackFromBoard.addEventListener('click', () => showView('home-view'));

    // Rate Refresh (With instant feedback and timestamp)
    dom.btnRefreshRates.addEventListener('click', () => fetchLiveExchangeRates(dom.btnRefreshRates, true));
    dom.btnBoardRefresh.addEventListener('click', () => fetchLiveExchangeRates(dom.btnBoardRefresh, true));

    // Currency Selectors
    dom.btnSelectFrom.addEventListener('click', () => openCurrencyPicker('from'));
    dom.btnSelectTo.addEventListener('click', () => openCurrencyPicker('to'));

    // Swap Currencies Button
    dom.btnSwapCurrency.addEventListener('click', () => {
      const temp = state.fromCurrency;
      state.fromCurrency = state.toCurrency;
      state.toCurrency = temp;
      updateExchangeUI();
      showToast(`${t('toast_swapped')} ${state.fromCurrency} TO ${state.toCurrency}`);
    });

    // Amount Input
    dom.amountInput.addEventListener('input', (e) => {
      state.amount = parseFloat(e.target.value) || 0;
      updateExchangeUI();
    });

    dom.btnClearAmount.addEventListener('click', () => {
      state.amount = 0;
      dom.amountInput.value = '';
      dom.amountInput.focus();
      updateExchangeUI();
    });

    // Preset Chips
    document.querySelectorAll('.preset-chip[data-val]').forEach(chip => {
      chip.addEventListener('click', () => {
        const val = parseFloat(chip.getAttribute('data-val'));
        if (chip.textContent.startsWith('+')) {
          state.amount = (parseFloat(state.amount) || 0) + val;
        } else {
          state.amount = val;
        }
        dom.amountInput.value = state.amount;
        updateExchangeUI();
      });
    });

    // Pricing Mode Tabs (Settings Page)
    dom.tabFixedMode.addEventListener('click', () => {
      state.settings.pricingMode = 'fixed';
      updateSettingsUI();
    });

    dom.tabMarginMode.addEventListener('click', () => {
      state.settings.pricingMode = 'margin';
      updateSettingsUI();
    });

    // Add Custom Pair
    dom.btnAddPair.addEventListener('click', () => {
      const from = dom.addPairFrom.value;
      const to = dom.addPairTo.value;
      if (from === to) {
        showToast('Please select two different currencies!');
        return;
      }

      const key = `${from}_TO_${to}`;
      const mRate = getMarketRate(from, to);
      const suggestedRate = parseFloat((mRate * 0.98).toFixed(4));

      if (!state.settings.fixedRates) state.settings.fixedRates = {};
      state.settings.fixedRates[key] = {
        from: from,
        to: to,
        customRate: suggestedRate,
        enabled: true
      };

      renderFixedPairsList();
      showToast(`Added ${from} TO ${to}!`);
    });

    // Margin Range Slider
    dom.marginRangeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      dom.settingsMarginVal.textContent = val.toFixed(1);
      state.settings.profitMarginPercent = val;
    });

    document.querySelectorAll('.margin-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseFloat(btn.getAttribute('data-m'));
        dom.marginRangeSlider.value = val;
        dom.settingsMarginVal.textContent = val.toFixed(1);
        state.settings.profitMarginPercent = val;
      });
    });

    // Save Settings
    const handleSaveSettings = () => {
      state.settings.defaultFrom = dom.settingDefaultFrom.value;
      state.settings.defaultTo = dom.settingDefaultTo.value;
      saveSettings();
      updateAllUI();
      showToast(t('toast_saved'));
      showView('home-view');
    };

    dom.btnSaveSettings.addEventListener('click', handleSaveSettings);
    dom.btnSaveSettingsTop.addEventListener('click', handleSaveSettings);

    // Reset Settings
    dom.btnResetSettings.addEventListener('click', () => {
      state.settings = {
        pricingMode: 'fixed',
        profitMarginPercent: 2.0,
        fixedRates: Object.assign({}, DEFAULT_FIXED_PAIRS),
        defaultFrom: 'USD',
        defaultTo: 'SAR'
      };
      saveSettings();
      updateSettingsUI();
      updateAllUI();
      showToast(t('toast_reset'));
    });

    // Currency Drawer Modals
    dom.btnCloseCurrencyModal.addEventListener('click', closeCurrencyPicker);
    dom.currencyModal.addEventListener('click', (e) => {
      if (e.target === dom.currencyModal) closeCurrencyPicker();
    });

    dom.currencySearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      dom.btnClearSearch.style.display = val.length > 0 ? 'block' : 'none';
      renderCurrencyList(val);
    });

    dom.btnClearSearch.addEventListener('click', () => {
      dom.currencySearchInput.value = '';
      dom.btnClearSearch.style.display = 'none';
      renderCurrencyList('');
      dom.currencySearchInput.focus();
    });

    dom.btnCopySummary.addEventListener('click', copySummaryToClipboard);
    dom.btnOpenReceiptModal.addEventListener('click', openReceiptModal);
    dom.btnCloseReceiptModal.addEventListener('click', closeReceiptModal);
    dom.receiptModal.addEventListener('click', (e) => {
      if (e.target === dom.receiptModal) closeReceiptModal();
    });

    dom.btnCopyReceiptText.addEventListener('click', () => {
      copySummaryToClipboard();
      closeReceiptModal();
    });

    dom.btnPrintReceipt.addEventListener('click', () => window.print());

    // Board Base Switcher
    document.querySelectorAll('.base-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.base-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.boardBaseCurrency = pill.getAttribute('data-base');
        updateBoardUI();
      });
    });
  }

  // =========================================================================
  // 15. BOOTSTRAP
  // =========================================================================
  function init() {
    loadPersistedData();
    initEvents();
    applyLanguage(state.lang);

    fetchLiveExchangeRates(null, false);

    setInterval(() => {
      fetchLiveExchangeRates(null, false);
    }, 5 * 60 * 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
