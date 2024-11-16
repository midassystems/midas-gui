// -- APIs -- 
// Midas mock api responses
export const loginResponse = {status : 200, data: {token :"49fd8000683ebd5a767cd85e90da619acf26ae92"}};

export const backtestListResponse = {status : 200, data:  [
    {
      id: 10,
      strategy_name: 'cointegrationzscore',
      tickers: [ 'AAPL' ],
      benchmark: [ '^GSPC' ],
      data_type: 'BAR',
      train_start: 1526601600000000000,
      train_end: 1674086400000000000,
      test_start: 1674086400000000000,
      test_end: 1705622400000000000,
      capital: 100000,
      created_at: '2024-04-25T12:45:47.043444Z'
    },
    {
      id: 11,
      strategy_name: 'cointegrationzscore',
      tickers: [ 'AAPL' ],
      benchmark: [ '^GSPC' ],
      data_type: 'BAR',
      train_start: 1526601600000000000,
      train_end: 1674086400000000000,
      test_start: 1674086400000000000,
      test_end: 1705622400000000000,
      capital: 100000,
      created_at: '2024-04-25T12:47:28.555050Z'
    },
    {
      id: 12,
      strategy_name: 'cointegrationzscore',
      tickers: [ 'AAPL' ],
      benchmark: [ '^GSPC' ],
      data_type: 'BAR',
      train_start: 1526601600000000000,
      train_end: 1674086400000000000,
      test_start: 1674086400000000000,
      test_end: 1705622400000000000,
      capital: 100000,
      created_at: '2024-04-25T12:47:28.598213Z'
    },
    {
      id: 13,
      strategy_name: 'cointegrationzscore',
      tickers: [ 'AAPL' ],
      benchmark: [ '^GSPC' ],
      data_type: 'BAR',
      train_start: 1526601600000000000,
      train_end: 1674086400000000000,
      test_start: 1674086400000000000,
      test_end: 1705622400000000000,
      capital: 100000,
      created_at: '2024-04-25T12:49:22.705642Z'
    },
    {
      id: 14,
      strategy_name: 'cointegrationzscore',
      tickers: [ 'AAPL' ],
      benchmark: [ '^GSPC' ],
      data_type: 'BAR',
      train_start: 1526601600000000000,
      train_end: 1674086400000000000,
      test_start: 1674086400000000000,
      test_end: 1705622400000000000,
      capital: 100000,
      created_at: '2024-04-25T12:49:22.748178Z'
    },
    {
      id: 15,
      strategy_name: 'trending',
      tickers: [ 'HE.n.0', 'ZC.n.0' ],
      benchmark: [ '^GSPC' ],
      data_type: 'BAR',
      train_start: 1704085200000000000,
      train_end: 1705726800000000000,
      test_start: 1705813200000000000,
      test_end: 1710046800000000000,
      capital: 100000,
      created_at: '2024-04-26T12:28:06.649781Z'
    },
    {
      id: 16,
      strategy_name: 'trending',
      tickers: [ 'AAPL' ],
      benchmark: [ '^GSPC' ],
      data_type: 'BAR',
      train_start: 1526601600000000000,
      train_end: 1674086400000000000,
      test_start: 1674086400000000000,
      test_end: 1705622400000000000,
      capital: 100000,
      created_at: '2024-04-26T12:30:32.208211Z'
    },
    {
      id: 17,
      strategy_name: 'trending',
      tickers: [ 'AAPL' ],
      benchmark: [ '^GSPC' ],
      data_type: 'BAR',
      train_start: 1526601600000000000,
      train_end: 1674086400000000000,
      test_start: 1674086400000000000,
      test_end: 1705622400000000000,
      capital: 100000,
      created_at: '2024-04-26T12:30:32.246791Z'
    }
]};

export const backtestResponse = {status : 200, data: {
"id":1,
"static_stats":[
    {
      "net_profit":-36223.7704,
      "total_return":-0.0803,
      "max_drawdown":-0.1216,
      "annual_standard_deviation_percentage":0.07,
      "ending_equity":91966.57,
      "total_fees":1.4404,
      "total_trades":1,
      "num_winning_trades":0,
      "num_lossing_trades":1,
      "avg_win_percent":0.0,
      "avg_loss_percent":-1.0,
      "percent_profitable":0.0,
      "profit_and_loss":0.0,
      "profit_factor":0.0,
      "avg_trade_profit":-36223.7704,
      "sortino_ratio":0.0
    }
],
"regression_stats":{
    "MAE": "0.0008490",
    "RMSE": "0.0009350",
    "adjusted_r_squared": "0.0038610",
    "alpha": "0.0005340",
    "backtest": 1,
    "beta": {"Beta (HE_futures)": 0.019835400379324686, "Beta (ZC_futures)": -0.08506025908271095},
    "condition_number": "101.0424000",
    "durbin_watson": "1.6102320",
    "f_statistic": "1.0833410",
    "f_statistic_p_value": "0.3479540",
    "idiosyncratic_contribution": "0.0004960",
    "idiosyncratic_volatility": "0.0044040",
    "jarque_bera": "1.5537740",
    "jarque_bera_p_value": "0.4598350",
    "p_value_alpha": "0.5273710",
    "p_value_beta" : {"Beta (HE_futures) p-value": 0.4615483447051957, "Beta (ZC_futures) p-value": 0.23125731983202844},
    "r_squared" : "0.0501930",
    "residuals" : [],
    "risk_free_rate" : "0.0200",
    "systematic_contribution" : "-0.0000260",
    "systematic_volatility" : "0.0010120",
    "timeseries_data" : [
      {"timestamp": 1706850000000000000, "daily_benchmark_return": '0.000000'},
      {"timestamp": 1707109200000000000, "daily_benchmark_return": '0.002400'},
      {"timestamp": 1707195600000000000, "daily_benchmark_return": '0.006300'},
      {"timestamp": 1707282000000000000, "daily_benchmark_return": '0.005600'},
      {"timestamp": 1707368400000000000, "daily_benchmark_return": '0.015200'},
      {"timestamp": 1707454800000000000, "daily_benchmark_return": '0.005200'}
    ],
    "total_contribution": "0.0004700", 
    "total_volatility": "0.0045190", 
    "vif" : {
      "VIF (const)" : 1.218538, 
      "VIF (HE_futures)": 1.01076, 
      "VIF (ZC_futures)": 1.01076
    }
},
"period_timeseries_stats":[
      {"timestamp":1705885200000000000,"equity_value":"100050.79","percent_drawdown":"0.000000","cumulative_return":"0.000000","period_return":"0.000000"},
      {"timestamp":1705888800000000000,"equity_value":"98389.68","percent_drawdown":"0.000000","cumulative_return":"-0.016600","period_return":"-0.016600"},
      {"timestamp":1705892400000000000,"equity_value":"96021.49","percent_drawdown":"0.000000","cumulative_return":"-0.040300","period_return":"-0.024100"},
],
"daily_timeseries_stats":[
    {"timestamp":1705885200000000000,"equity_value":"100050.79","percent_drawdown":"0.000000","cumulative_return":"0.000000","period_return":"0.000000"},
    {"timestamp":1705888800000000000,"equity_value":"98389.68","percent_drawdown":"0.000000","cumulative_return":"-0.016600","period_return":"-0.016600"},
    {"timestamp":1705892400000000000,"equity_value":"96021.49","percent_drawdown":"0.000000","cumulative_return":"-0.040300","period_return":"-0.024100"},
],
"trades":[
    {"trade_id":"1","leg_id":"1","timestamp":1705888800000000000,"ticker":"HE.n.0","quantity":"-1.3867","price":"77.7248","cost":"-43111.1100","action":"SHORT","fees":"1.1787"},
    {"trade_id":"1","leg_id":"2","timestamp":1705888800000000000,"ticker":"ZC.n.0","quantity":"0.3079","price":"447.5025","cost":"6888.7800","action":"LONG","fees":"0.2617"}
],
"signals":[
  {
    "timestamp":1705888800000000000,
    "trade_instructions":[
      {"ticker":"HE.n.0","action":"SHORT","trade_id":1,"leg_id":1,"weight":-0.8622},
      {"ticker":"ZC.n.0","action":"LONG","trade_id":1,"leg_id":2,"weight":0.1378}
    ]
  }
],
"parameters":{
              "strategy_name":"cointegrationzscore",
              "tickers":["HE.n.0","ZC.n.0"],
              "benchmark":["^GSPC"],
              "data_type":"BAR",
              "train_start":"1704085200000000000",
              "train_end":"1705726800000000000",
              "test_start":"1705813200000000000",
              "test_end":"1710046800000000000",
              "capital":100000.0,
              "created_at":"2024-04-24T21:26:18.811668Z"
},
"price_data":[
    {"id":226,"symbol":"ZC.n.0","timestamp":1705885200000000000,"open":"445.5000","close":"445.7500","high":"446.5000","low":"445.0000","volume":2427},
    {"id":227,"symbol":"HE.n.0","timestamp":1705885200000000000,"open":"78.325","close":"78.55","high":"77.275","low":"77.725","volume":2370},
    {"id":228,"symbol":"ZC.n.0","timestamp":1705888800000000000,"open":"447.25","close":"448.000","high":"444.00","low":"445.500","volume":12535},
    {"id":229,"symbol":"HE.n.0","timestamp":1705888800000000000,"open":"77.75","close":"77.75","high":"78.25","low":"77.225","volume":2118},
    {"id":230,"symbol":"ZC.n.0","timestamp":1705892400000000000,"open":"446.0000","close":"446.2500","high":"446.5000","low":"445.5000","volume":369},
    {"id":231,"symbol":"HE.n.0","timestamp":1705892400000000000,"open":"76.77","close":"75.7300","high":"77.77500","low":"75.5000","volume":575}
]
}};       

export const sessionsListResponse = {status : 200, data: [{session_id: 134}, {session_id: 1246}]}

export const sessionDataResponse =  {status : 200, data: {
  session_id: 12346,
  account : {
    id: 22,
    session: 12346,
    data: {
      BuyingPower: 777.89,
      Currency: "USD",
      ExcessLiquidity: 99333.99,
      FullAvailableFunds: 1000.99,
      FullInitMarginReq: 99980.99,
      FullMaintMarginReq: 86464.39,
      FuturesPNL: 564837.99,
      NetLiquidation: 99.98,
      Timestamp: "2024-01-01",
      TotalCashBalance: 999.99,
      UnrealizedPnL: 1000.9
    }
  },
  orders : {
    id: 22,
    session: 12346,
    data : {
      account: "DU12546",
      action: "BUY",
      auxPrice: 0,
      avgFillPrice: 100,
      cashQty: 109.99,
      clientId: 22,
      exchange: "NASDAQ",
      filled: "9",
      lastFillPrice: 100,
      lmtPrice: 0,
      mktCapPrice: 1000.99,
      orderId: 5,
      orderType: "MKT",
      parentId: 5,
      permId: 1,
      remaining: 10,
      secType: "STK",
      status: "Submitted",
      symbol: "AAPL",
      totalQty: 1009.9,
      whyHeld: ""
    }
  },
  positions : {
    id: 22,
    session: 12346,
    data : {
      action: "BUY",
      avg_cost: 150,
      initial_margin: 0,
      market_value: 160000.11,
      multiplier: 1,
      price: 160,
      quantity: 100,
      ticker: "AAPL",
      total_cost: 15000
    }
  },
  risk : {
    id: 22,
    session: 12346,
    data : {
      Timestamp: "2024-01-01",
      alpha: 1,
      annualized_return: 0.1,
      annualized_volatility: 2,
      beta: 1.5,
      idiosyncratic_contribution: 0.08,
      idiosyncratic_volatility: 0.2,
      market_contribution: 0.02,
      market_hedge_nmv: 1000,
      market_volatility: 1.8,
      portfolio_dollar_beta: 10000.32,
      sharpe_ratio: 3
    }
  },
  market_data : NaN
}}

// Benzinga mock api responses
export const newsResponse = {status : 200, data : [
  {
    id: 38544752,
    author: 'Akanksha Bakshi',
    created: 'Wed, 01 May 2024 06:44:37 -0400',
    updated: 'Wed, 01 May 2024 06:44:38 -0400',
    title: 'Major Asia And Europe Markets Closed For Labor Day; Dollar gains, Gold Drops To $2,300 - Global Markets Today While US Slept',
    teaser: 'US stock markets close lower on economic reports and Fed meeting. Asian markets decline, Europe closed for Labor Day. Commodities and US futures down.',
    body: '',
    url: 'https://www.benzinga.com/markets/asia/24/05/38544752/major-asia-and-europe-markets-closed-for-labor-day-dollar-gains-gold-drops-to-2-300-global-markets-t',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      }
    ],
    channels: [
      { name: 'Asia' },
      { name: 'News' },
      { name: 'Emerging Markets' },
      { name: 'Eurozone' },
      { name: 'Futures' },
      { name: 'Commodities' },
      { name: 'Forex' },
      { name: 'Top Stories' },
      { name: 'Markets' }
    ],
    stocks: [
      { name: 'ADIV' }, { name: 'AGOV' },
      { name: 'ASHR' }, { name: 'BBEU' },
      { name: 'BOIL' }, { name: 'CQQQ' },
      { name: 'DBC' },  { name: 'EEM' },
      { name: 'EEMA' }, { name: 'EWU' },
      { name: 'EZU' },  { name: 'FLAX' },
      { name: 'FXA' },  { name: 'FXB' },
      { name: 'FXC' },  { name: 'FXE' },
      { name: 'FXI' },  { name: 'GLD' },
      { name: 'GSG' },  { name: 'GXC' },
      { name: 'IEMG' }, { name: 'IEUR' },
      { name: 'IEV' },  { name: 'KDIV' },
      { name: 'SPEM' }, { name: 'SPY' },
      { name: 'UNG' },  { name: 'USDU' },
      { name: 'USO' },  { name: 'UUP' },
      { name: 'VGK' },  { name: 'VWO' }
    ],
    tags: [ { name: 'Briefs' }, { name: 'Stories That Matter' } ]
  },
  {
    id: 38545262,
    author: 'Benzinga Neuro',
    created: 'Wed, 01 May 2024 06:58:36 -0400',
    updated: 'Wed, 01 May 2024 06:58:37 -0400',
    title: "Trump's Media Company Hands Ex-President 36M DJT Shares Worth $1.8B, Pushing His Stake Beyond $5.7B",
    teaser: 'The agreement, which had three benchmarks set over 36 months, allowed the shares to be awarded in 9 million share increments.',
    body: "<p><strong>Apple Inc.&nbsp;</strong>(NASDAQ:<a class=\"ticker\" href=\"https://www.benzinga.com/stock/AAPL#NASDAQ\">AAPL</a>) shares",
    url: 'https://www.benzinga.com/markets/equities/24/05/38545262/trumps-media-company-hands-ex-president-36m-djt-shares-worth-1-8b-pushing-his-stake-beyond-5-7b',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Truth-Social.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Truth-Social.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Truth-Social.jpeg'
      }
    ],
    channels: [
      { name: 'Equities' },
      { name: 'News' },
      { name: 'Politics' },
      { name: 'Markets' },
      { name: 'General' }
    ],
    stocks: [ { name: 'DJT' } ],
    tags: [
      { name: 'Donald Trump' },
      { name: 'Pooja Rajkumari' },
      { name: 'stock bonus' },
      { name: 'Stories That Matter' },
      // { name: 'Trump Media and Technology Group' }
    ]
  },
  {
    id: 38545003,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  {
    id: 38545971,
    author: 'Benzinga Neuro',
    created: 'Wed, 01 May 2024 07:11:58 -0400',
    updated: 'Wed, 01 May 2024 07:11:59 -0400',
    title: "McDonald's Tries Out Bigger Burger To Boost Sluggish Sales",
    teaser: 'In an effort to boost sales, McDonald&#39;s set to test a larger burger, the company announced on Tuesday.',
    body: '',
    url: 'https://www.benzinga.com/markets/equities/24/05/38545971/mcdonalds-tries-out-bigger-burger-to-boost-sluggish-sales',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Photo-via-Shutterstock.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Photo-via-Shutterstock.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Photo-via-Shutterstock.jpeg'
      }
    ],
    channels: [
      { name: 'Equities' },
      { name: 'News' },
      { name: 'Restaurants' },
      { name: 'Global' },
      { name: 'Markets' }
    ],
    stocks: [ { name: 'MCD' } ],
    tags: [
      { name: 'burger' },
      { name: 'Inflation' },
      { name: 'Kaustubh Bagalkote' },
      { name: "McDonald's" }
    ]
  },
  {
    id: 38545693,
    author: 'Benzinga Neuro',
    created: 'Wed, 01 May 2024 07:06:22 -0400',
    updated: 'Wed, 01 May 2024 07:06:22 -0400',
    title: "Microsoft, OpenAI Sued By Newspaper Publishers For Copyright Infringement Over Allegedly Generating 'Near-Verbatim Copies'",
    teaser: 'Eight U.S. newspaper publishers have filed a lawsuit against Microsoft and OpenAI in a New York federal court. ',
    body: '',
    url: 'https://www.benzinga.com/24/05/38545693/microsoft-openai-sued-by-newspaper-publishers-for-copyright-infringement-over-allegedly-generating-n',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Microsoft-and-OpenAI.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Microsoft-and-OpenAI.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Microsoft-and-OpenAI.jpeg'
      }
    ],
    channels: [],
    stocks: [ { name: 'MSFT' } ],
    tags: [
      { name: 'ChatGPT' },
      { name: 'Kaustubh Bagalkote' },
      { name: 'OpenAi' },
      { name: 'Sam Altman' }
    ]
  },
  {
    id: 38545004,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  {
    id: 38545005,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  {
    id: 38544752,
    author: 'Akanksha Bakshi',
    created: 'Wed, 01 May 2024 06:44:37 -0400',
    updated: 'Wed, 01 May 2024 06:44:38 -0400',
    title: 'Major Asia And Europe Markets Closed For Labor Day; Dollar gains, Gold Drops To $2,300 - Global Markets Today While US Slept',
    teaser: 'US stock markets close lower on economic reports and Fed meeting. Asian markets decline, Europe closed for Labor Day. Commodities and US futures down.',
    body: '',
    url: 'https://www.benzinga.com/markets/asia/24/05/38544752/major-asia-and-europe-markets-closed-for-labor-day-dollar-gains-gold-drops-to-2-300-global-markets-t',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      }
    ],
    channels: [
      { name: 'Asia' },
      { name: 'News' },
      { name: 'Emerging Markets' },
      { name: 'Eurozone' },
      { name: 'Futures' },
      { name: 'Commodities' },
      { name: 'Forex' },
      { name: 'Top Stories' },
      { name: 'Markets' }
    ],
    stocks: [
      { name: 'ADIV' }, { name: 'AGOV' },
      { name: 'ASHR' }, { name: 'BBEU' },
      { name: 'BOIL' }, { name: 'CQQQ' },
      { name: 'DBC' },  { name: 'EEM' },
      { name: 'EEMA' }, { name: 'EWU' },
      { name: 'EZU' },  { name: 'FLAX' },
      { name: 'FXA' },  { name: 'FXB' },
      { name: 'FXC' },  { name: 'FXE' },
      { name: 'FXI' },  { name: 'GLD' },
      { name: 'GSG' },  { name: 'GXC' },
      { name: 'IEMG' }, { name: 'IEUR' },
      { name: 'IEV' },  { name: 'KDIV' },
      { name: 'SPEM' }, { name: 'SPY' },
      { name: 'UNG' },  { name: 'USDU' },
      { name: 'USO' },  { name: 'UUP' },
      { name: 'VGK' },  { name: 'VWO' }
    ],
    tags: [ { name: 'Briefs' }, { name: 'Stories That Matter' } ]
  }
]}

// -- Contexts -- 
// Mock token
export const mockToken = "49fd8000683ebd5a767cd85e90da619acf26ae92";

// Mock backtest context data
export const mockGroupedSummaries = {
  "cointegrationzscore" : [
  {
    id: 10,
    strategy_name: 'cointegrationzscore',
    tickers: [ 'AAPL' ],
    benchmark: [ '^GSPC' ],
    data_type: 'BAR',
    train_start: 1526601600000000000,
    train_end: 1674086400000000000,
    test_start: 1674086400000000000,
    test_end: 1705622400000000000,
    capital: 100000,
    created_at: '2024-04-25T12:45:47.043444Z'
  },
  {
    id: 11,
    strategy_name: 'cointegrationzscore',
    tickers: [ 'AAPL' ],
    benchmark: [ '^GSPC' ],
    data_type: 'BAR',
    train_start: 1526601600000000000,
    train_end: 1674086400000000000,
    test_start: 1674086400000000000,
    test_end: 1705622400000000000,
    capital: 100000,
    created_at: '2024-04-25T12:47:28.555050Z'
  },
  {
    id: 12,
    strategy_name: 'cointegrationzscore',
    tickers: [ 'AAPL' ],
    benchmark: [ '^GSPC' ],
    data_type: 'BAR',
    train_start: 1526601600000000000,
    train_end: 1674086400000000000,
    test_start: 1674086400000000000,
    test_end: 1705622400000000000,
    capital: 100000,
    created_at: '2024-04-25T12:47:28.598213Z'
  },
  {
    id: 13,
    strategy_name: 'cointegrationzscore',
    tickers: [ 'AAPL' ],
    benchmark: [ '^GSPC' ],
    data_type: 'BAR',
    train_start: 1526601600000000000,
    train_end: 1674086400000000000,
    test_start: 1674086400000000000,
    test_end: 1705622400000000000,
    capital: 100000,
    created_at: '2024-04-25T12:49:22.705642Z'
  },
  {
    id: 14,
    strategy_name: 'cointegrationzscore',
    tickers: [ 'AAPL' ],
    benchmark: [ '^GSPC' ],
    data_type: 'BAR',
    train_start: 1526601600000000000,
    train_end: 1674086400000000000,
    test_start: 1674086400000000000,
    test_end: 1705622400000000000,
    capital: 100000,
    created_at: '2024-04-25T12:49:22.748178Z'
  }], 
  "trending":[
  {
    id: 15,
    strategy_name: 'trending',
    tickers: [ 'HE.n.0', 'ZC.n.0' ],
    benchmark: [ '^GSPC' ],
    data_type: 'BAR',
    train_start: 1704085200000000000,
    train_end: 1705726800000000000,
    test_start: 1705813200000000000,
    test_end: 1710046800000000000,
    capital: 100000,
    created_at: '2024-04-26T12:28:06.649781Z'
  },
  {
    id: 16,
    strategy_name: 'trending',
    tickers: [ 'AAPL' ],
    benchmark: [ '^GSPC' ],
    data_type: 'BAR',
    train_start: 1526601600000000000,
    train_end: 1674086400000000000,
    test_start: 1674086400000000000,
    test_end: 1705622400000000000,
    capital: 100000,
    created_at: '2024-04-26T12:30:32.208211Z'
  },
  {
    id: 17,
    strategy_name: 'trending',
    tickers: [ 'AAPL' ],
    benchmark: [ '^GSPC' ],
    data_type: 'BAR',
    train_start: 1526601600000000000,
    train_end: 1674086400000000000,
    test_start: 1674086400000000000,
    test_end: 1705622400000000000,
    capital: 100000,
    created_at: '2024-04-26T12:30:32.246791Z'
  }
  ]
};

export const mockProcessedBacktest =   {
    id: 1,
    static_stats : [{
      net_profit: -36223.7704,
      total_return: -0.0803,
      max_drawdown: -0.1216,
      annual_standard_deviation: 0.07,
      ending_equity: 91966.57,
      total_fees: 1.4404,
      total_trades: 1,
      num_winning_trades: 0,
      num_lossing_trades: 1,
      avg_win_percent: 0,
      avg_loss_percent: -1,
      percent_profitable: 0,
      profit_and_loss: 0,
      profit_factor: 0,
      avg_trade_profit: -36223.7704,
      sortino_ratio: 0,
    }],
    parameters: {
      strategy_name : "cointegrationzscore",
      tickers : ['HE.n.0', 'ZC.n.0'],
      benchmark : ['^GSPC'],
      data_type : "BAR",
      capital : 100000,
      train_start : "1704085200000000000",
      train_end : "1705726800000000000",
      test_start : "1705813200000000000",
      test_end : "1710046800000000000",
      created_at : "2024-04-24T21:26:18.811668Z",
    }, 
    priceData : [
      {
        symbol:"ZC.n.0",
        time:1705885200,
        open:445.500,
        close: 445.7500,
        high:446.5000,
        low:445.0000,
        volume:2427
      },
      {
        symbol:"HE.n.0",
        time:1705885200,
        open:78.325,
        close:78.55,
        high:77.275,
        low:77.725,
        volume:2370
      },
      {
        symbol:"ZC.n.0",
        time:1705888800,
        open:447.25,
        close:448.000,
        high:444.00,
        low:445.500,
        volume: 12535
      },
      {
        symbol:"HE.n.0",
        time:1705888800,
        open:77.75,
        close:77.75,
        high:78.25,
        low:77.225,
        volume:2118
      },
      {
        symbol:"ZC.n.0",
        time:1705892400,
        open:446.0000,
        close:446.2500,
        high:446.5000,
        low:445.5000,
        volume:369
      },
      {
        symbol:"HE.n.0",
        time:1705892400,
        open:76.77,
        close:75.7300,
        high:77.77500,
        low:75.5000,
        volume:575
      }
    ],
    regression_stats : {
      MAE: "0.0008490",
      RMSE:"0.0009350",
      adjusted_r_squared: "0.0038610",
      alpha: "0.0005340",
      condition_number: "101.0424000",
      durbin_watson: "1.6102320",
      f_statistic: "1.0833410",
      f_statistic_p_value: "0.3479540",
      idiosyncratic_contribution: "0.0004960",
      idiosyncratic_volatility: "0.0044040",
      jarque_bera: "1.5537740",
      jarque_bera_p_value: "0.4598350",
      p_value_alpha: "0.5273710",
      r_squared: "0.0501930",
      risk_free_rate: "0.0200",
      systematic_contribution: "-0.0000260",
      systematic_volatility: "0.0010120",
      total_contribution: "0.0004700",
      total_volatility: "0.0045190",
      "Beta (HE_futures)": 0.019835400379324686,
      "Beta (HE_futures) p-value": 0.4615483447051957,
      "Beta (ZC_futures)": -0.08506025908271095,
      "Beta (ZC_futures) p-value": 0.23125731983202844,
      "VIF (HE_futures)": 1.01076,
      "VIF (ZC_futures)": 1.01076,
      "VIF (const)": 1.218538
    },
    signalData : [{
      iso_timestamp: "2024-01-22T02:00:00.000Z",
      time: 1705888800, 
      trade_instructions : [
        {
          action: "SHORT",
          leg_id: 1,
          ticker: "HE.n.0",
          trade_id: 1, 
          weight: -0.8622},
        {
            action: "LONG",
            leg_id: 2,
            ticker: "ZC.n.0",
            trade_id: 1,
            weight: 0.1378
        }
      ]
    }],
    dailyTimeseriesData: [
      {
        timestamp: 1705885200,
        equity_value: 100050.79,
        period_return: 0,
        cumulative_return: 0,
        percent_drawdown: 0,
      },
      {
        timestamp: 1705888800,
        equity_value: 98389.68,
        period_return: -1.66,
        cumulative_return: -1.66,
        percent_drawdown: 0,
      },
      {
        timestamp: 1705892400,
        equity_value: 96021.49,
        period_return: -2.41,
        cumulative_return: -4.03,
        percent_drawdown: 0,
      }
    ],
    periodTimeseriesData: [
      {
        timestamp: 1705885200,
        equity_value: 100050.79,
        period_return: 0,
        cumulative_return: 0,
        percent_drawdown: 0,
      },
      {
        timestamp: 1705888800,
        equity_value: 98389.68,
        period_return: -1.66,
        cumulative_return: -1.66,
        percent_drawdown: 0,
      },
      {
        timestamp: 1705892400,
        equity_value: 96021.49,
        period_return: -2.41,
        cumulative_return: -4.03,
        percent_drawdown: 0,
      }
    ],
    regressionTimeseriesData: [
        {timestamp: 1706850000, daily_benchmark_return: 0},
        {timestamp: 1707109200, daily_benchmark_return: 0.24},
        {timestamp: 1707195600, daily_benchmark_return: 0.63},
        {timestamp: 1707282000, daily_benchmark_return: 0.5599999999999999},
        {timestamp: 1707368400, daily_benchmark_return: 1.52},
        {timestamp: 1707454800, daily_benchmark_return: 0.52}
    ],
    tradeData : [
      {
        action: "SHORT",
        cost: -43111.1100,
        fees: 1.1787,
        leg_id: 1,
        price: 77.7248,
        quantity: -1.3867,
        ticker: "HE.n.0",
        timestamp: 1705888800,
        iso_timestamp: "2024-01-22T02:00:00.000Z",
        trade_id: 1
      },
      {
        action: "LONG",
        cost: 6888.7800,
        fees: 0.2617,
        leg_id: 2,
        price: 447.5025,
        quantity: 0.3079,
        ticker: "ZC.n.0",
        timestamp: 1705888800,
        iso_timestamp: "2024-01-22T02:00:00.000Z",
        trade_id: 1
      }
    ]
}

// Mock live context data
export const sessionsIds = [134, 1246];

// Mock news context data
export const mockNews = {
  "38544752" : {
    id: 38544752,
    author: 'Akanksha Bakshi',
    created: 'Wed, 01 May 2024 06:44:37 -0400',
    updated: 'Wed, 01 May 2024 06:44:38 -0400',
    title: 'Major Asia And Europe Markets Closed For Labor Day; Dollar gains, Gold Drops To $2,300 - Global Markets Today While US Slept',
    teaser: 'US stock markets close lower on economic reports and Fed meeting. Asian markets decline, Europe closed for Labor Day. Commodities and US futures down.',
    body: '',
    url: 'https://www.benzinga.com/markets/asia/24/05/38544752/major-asia-and-europe-markets-closed-for-labor-day-dollar-gains-gold-drops-to-2-300-global-markets-t',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      }
    ],
    channels: [
      { name: 'Asia' },
      { name: 'News' },
      { name: 'Emerging Markets' },
      { name: 'Eurozone' },
      { name: 'Futures' },
      { name: 'Commodities' },
      { name: 'Forex' },
      { name: 'Top Stories' },
      { name: 'Markets' }
    ],
    stocks: [
      { name: 'ADIV' }, { name: 'AGOV' },
      { name: 'ASHR' }, { name: 'BBEU' },
      { name: 'BOIL' }, { name: 'CQQQ' },
      { name: 'DBC' },  { name: 'EEM' },
      { name: 'EEMA' }, { name: 'EWU' },
      { name: 'EZU' },  { name: 'FLAX' },
      { name: 'FXA' },  { name: 'FXB' },
      { name: 'FXC' },  { name: 'FXE' },
      { name: 'FXI' },  { name: 'GLD' },
      { name: 'GSG' },  { name: 'GXC' },
      { name: 'IEMG' }, { name: 'IEUR' },
      { name: 'IEV' },  { name: 'KDIV' },
      { name: 'SPEM' }, { name: 'SPY' },
      { name: 'UNG' },  { name: 'USDU' },
      { name: 'USO' },  { name: 'UUP' },
      { name: 'VGK' },  { name: 'VWO' }
    ],
    tags: [ { name: 'Briefs' }, { name: 'Stories That Matter' } ]
  },
  "38545003" : {
    id: 38545003,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  "38545004" : {
    id: 38545004,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  "38545005" : {
    id: 38545005,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  "38545262": {
    id: 38545262,
    author: 'Benzinga Neuro',
    created: 'Wed, 01 May 2024 06:58:36 -0400',
    updated: 'Wed, 01 May 2024 06:58:37 -0400',
    title: "Trump's Media Company Hands Ex-President 36M DJT Shares Worth $1.8B, Pushing His Stake Beyond $5.7B",
    teaser: 'The agreement, which had three benchmarks set over 36 months, allowed the shares to be awarded in 9 million share increments.',
    body: "<p><strong>Apple Inc.&nbsp;</strong>(NASDAQ:<a class=\"ticker\" href=\"https://www.benzinga.com/stock/AAPL#NASDAQ\">AAPL</a>) shares",
    url: 'https://www.benzinga.com/markets/equities/24/05/38545262/trumps-media-company-hands-ex-president-36m-djt-shares-worth-1-8b-pushing-his-stake-beyond-5-7b',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Truth-Social.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Truth-Social.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Truth-Social.jpeg'
      }
    ],
    channels: [
      { name: 'Equities' },
      { name: 'News' },
      { name: 'Politics' },
      { name: 'Markets' },
      { name: 'General' }
    ],
    stocks: [ { name: 'DJT' } ],
    tags: [
      { name: 'Donald Trump' },
      { name: 'Pooja Rajkumari' },
      { name: 'stock bonus' },
      { name: 'Stories That Matter' },
      // { name: 'Trump Media and Technology Group' }
    ]
  },
  "38545693" : {
    id: 38545693,
    author: 'Benzinga Neuro',
    created: 'Wed, 01 May 2024 07:06:22 -0400',
    updated: 'Wed, 01 May 2024 07:06:22 -0400',
    title: "Microsoft, OpenAI Sued By Newspaper Publishers For Copyright Infringement Over Allegedly Generating 'Near-Verbatim Copies'",
    teaser: 'Eight U.S. newspaper publishers have filed a lawsuit against Microsoft and OpenAI in a New York federal court. ',
    body: '',
    url: 'https://www.benzinga.com/24/05/38545693/microsoft-openai-sued-by-newspaper-publishers-for-copyright-infringement-over-allegedly-generating-n',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Microsoft-and-OpenAI.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Microsoft-and-OpenAI.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Microsoft-and-OpenAI.jpeg'
      }
    ],
    channels: [],
    stocks: [ { name: 'MSFT' } ],
    tags: [
      { name: 'ChatGPT' },
      { name: 'Kaustubh Bagalkote' },
      { name: 'OpenAi' },
      { name: 'Sam Altman' }
    ]
  },
  "38545971" : {
    id: 38545971,
    author: 'Benzinga Neuro',
    created: 'Wed, 01 May 2024 07:11:58 -0400',
    updated: 'Wed, 01 May 2024 07:11:59 -0400',
    title: "McDonald's Tries Out Bigger Burger To Boost Sluggish Sales",
    teaser: 'In an effort to boost sales, McDonald&#39;s set to test a larger burger, the company announced on Tuesday.',
    body: '',
    url: 'https://www.benzinga.com/markets/equities/24/05/38545971/mcdonalds-tries-out-bigger-burger-to-boost-sluggish-sales',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Photo-via-Shutterstock.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Photo-via-Shutterstock.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Photo-via-Shutterstock.jpeg'
      }
    ],
    channels: [
      { name: 'Equities' },
      { name: 'News' },
      { name: 'Restaurants' },
      { name: 'Global' },
      { name: 'Markets' }
    ],
    stocks: [ { name: 'MCD' } ],
    tags: [
      { name: 'burger' },
      { name: 'Inflation' },
      { name: 'Kaustubh Bagalkote' },
      { name: "McDonald's" }
    ]
  }
}

export const mockFilteredByNews = {
  "38544752" : {
    id: 38544752,
    author: 'Akanksha Bakshi',
    created: 'Wed, 01 May 2024 06:44:37 -0400',
    updated: 'Wed, 01 May 2024 06:44:38 -0400',
    title: 'Major Asia And Europe Markets Closed For Labor Day; Dollar gains, Gold Drops To $2,300 - Global Markets Today While US Slept',
    teaser: 'US stock markets close lower on economic reports and Fed meeting. Asian markets decline, Europe closed for Labor Day. Commodities and US futures down.',
    body: '',
    url: 'https://www.benzinga.com/markets/asia/24/05/38544752/major-asia-and-europe-markets-closed-for-labor-day-dollar-gains-gold-drops-to-2-300-global-markets-t',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Macro-Shot-Of-Computer-Monitor-With-Worl.jpeg'
      }
    ],
    channels: [
      { name: 'Asia' },
      { name: 'News' },
      { name: 'Emerging Markets' },
      { name: 'Eurozone' },
      { name: 'Futures' },
      { name: 'Commodities' },
      { name: 'Forex' },
      { name: 'Top Stories' },
      { name: 'Markets' }
    ],
    stocks: [
      { name: 'ADIV' }, { name: 'AGOV' },
      { name: 'ASHR' }, { name: 'BBEU' },
      { name: 'BOIL' }, { name: 'CQQQ' },
      { name: 'DBC' },  { name: 'EEM' },
      { name: 'EEMA' }, { name: 'EWU' },
      { name: 'EZU' },  { name: 'FLAX' },
      { name: 'FXA' },  { name: 'FXB' },
      { name: 'FXC' },  { name: 'FXE' },
      { name: 'FXI' },  { name: 'GLD' },
      { name: 'GSG' },  { name: 'GXC' },
      { name: 'IEMG' }, { name: 'IEUR' },
      { name: 'IEV' },  { name: 'KDIV' },
      { name: 'SPEM' }, { name: 'SPY' },
      { name: 'UNG' },  { name: 'USDU' },
      { name: 'USO' },  { name: 'UUP' },
      { name: 'VGK' },  { name: 'VWO' }
    ],
    tags: [ { name: 'Briefs' }, { name: 'Stories That Matter' } ]
  },
  "38545003" : {
    id: 38545003,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  "38545004" : {
    id: 38545004,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  "38545005" : {
    id: 38545005,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  "38545262": {
    id: 38545262,
    author: 'Benzinga Neuro',
    created: 'Wed, 01 May 2024 06:58:36 -0400',
    updated: 'Wed, 01 May 2024 06:58:37 -0400',
    title: "Trump's Media Company Hands Ex-President 36M DJT Shares Worth $1.8B, Pushing His Stake Beyond $5.7B",
    teaser: 'The agreement, which had three benchmarks set over 36 months, allowed the shares to be awarded in 9 million share increments.',
    body: "<p><strong>Apple Inc.&nbsp;</strong>(NASDAQ:<a class=\"ticker\" href=\"https://www.benzinga.com/stock/AAPL#NASDAQ\">AAPL</a>) shares",
    url: 'https://www.benzinga.com/markets/equities/24/05/38545262/trumps-media-company-hands-ex-president-36m-djt-shares-worth-1-8b-pushing-his-stake-beyond-5-7b',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Truth-Social.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Truth-Social.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Truth-Social.jpeg'
      }
    ],
    channels: [
      { name: 'Equities' },
      { name: 'News' },
      { name: 'Politics' },
      { name: 'Markets' },
      { name: 'General' }
    ],
    stocks: [ { name: 'DJT' } ],
    tags: [
      { name: 'Donald Trump' },
      { name: 'Pooja Rajkumari' },
      { name: 'stock bonus' },
      { name: 'Stories That Matter' },
      // { name: 'Trump Media and Technology Group' }
    ]
  },
  "38545971" : {
    id: 38545971,
    author: 'Benzinga Neuro',
    created: 'Wed, 01 May 2024 07:11:58 -0400',
    updated: 'Wed, 01 May 2024 07:11:59 -0400',
    title: "McDonald's Tries Out Bigger Burger To Boost Sluggish Sales",
    teaser: 'In an effort to boost sales, McDonald&#39;s set to test a larger burger, the company announced on Tuesday.',
    body: '',
    url: 'https://www.benzinga.com/markets/equities/24/05/38545971/mcdonalds-tries-out-bigger-burger-to-boost-sluggish-sales',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/Photo-via-Shutterstock.jpeg'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/Photo-via-Shutterstock.jpeg'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/Photo-via-Shutterstock.jpeg'
      }
    ],
    channels: [
      { name: 'Equities' },
      { name: 'News' },
      { name: 'Restaurants' },
      { name: 'Global' },
      { name: 'Markets' }
    ],
    stocks: [ { name: 'MCD' } ],
    tags: [
      { name: 'burger' },
      { name: 'Inflation' },
      { name: 'Kaustubh Bagalkote' },
      { name: "McDonald's" }
    ]
  }
}

export const mockFilteredByTech = {
  "38545003" : {
    id: 38545003,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  "38545004" : {
    id: 38545004,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  },
  "38545005" : {
    id: 38545005,
    author: 'Rounak Jain',
    created: 'Wed, 01 May 2024 06:50:26 -0400',
    updated: 'Wed, 01 May 2024 06:50:27 -0400',
    title: "Elon Musk Reacts As MIT Engineer Says We're At 'Fraction Of 1% In AI Investment. Imagine What's About To Come In Next Decade:' 'Exciting, But Also Worrying'",
    teaser: 'Tesla Inc. CEO and xAI founder Elon Musk is thrilled and concerned at the same about the extensive AI investment possibilities.',
    body: '',
    url: 'https://www.benzinga.com/news/24/05/38545003/elon-musk-reacts-as-mit-engineer-says-were-at-fraction-of-1-in-ai-investment-imagine-whats-about-to',
    image: [
      {
        size: 'thumb',
        url: 'https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'small',
        url: 'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      },
      {
        size: 'large',
        url: 'https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/01/musk-artificial-intelligence-AI.png'
      }
    ],
    channels: [ { name: 'News' }, { name: 'Tech' } ],
    stocks: [],
    tags: [
      { name: 'artificial intelligence' },
      { name: 'benzinga neuro' },
      { name: 'Consumer Tech' },
      { name: 'Elon Musk' },
      { name: 'People In Tech' },
      { name: 'Peter Diamandis' }
    ]
  }
}