/*DATASETS*/

//MPE PIB
let dataMpePib = [
    {
        titulo: "Serviços",
        id: "pib-servicos",
        cor: "lilas",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 450865324 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 460614570 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 450710328 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 460567018 }
        ]
    },
    {
        titulo: "Comércio",
        id: "pib-comercio",
        cor: "verdeClaro",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 195756515 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 196441210 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 195964365 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 195963871 }
        ]
    },
    {
        titulo: "Indústria", //Optional
        id: "pib-industria", //Required
        cor: "laranja", //Optional
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 480409724 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 486746948 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 480903792 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 480800732 }
        ]
    },
];

//MPE PIB
let dataMpeEmpregos = [
    {
        titulo: "Serviços",
        id: "empregos-servicos",
        cor: "lilas",
        dados: [
            { "date": "2012-01-01T00:00:00.000Z", "value": 7183348 },
            { "date": "2013-01-01T00:00:00.000Z", "value": 6518059 },
            { "date": "2014-01-01T00:00:00.000Z", "value": 7895947 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 6793328 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 6357781 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 7265499 },
            { "date": "2018-01-01T00:00:00.000Z", "value": 7865324 },
            { "date": "2019-01-01T00:00:00.000Z", "value": 7314570 },
            { "date": "2020-01-01T00:00:00.000Z", "value": 6910328 },
            { "date": "2021-01-01T00:00:00.000Z", "value": 7267018 }
        ]
    },
    {
        titulo: "Comércio",
        id: "empregos-comercio",
        cor: "verdeClaro",
        dados: [
            { "date": "2012-01-01T00:00:00.000Z", "value": 6775997 },
            { "date": "2013-01-01T00:00:00.000Z", "value": 6643029 },
            { "date": "2014-01-01T00:00:00.000Z", "value": 5733074 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 6015250 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 6010902 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 6959741 },
            { "date": "2018-01-01T00:00:00.000Z", "value": 5756515 },
            { "date": "2019-01-01T00:00:00.000Z", "value": 6441210 },
            { "date": "2020-01-01T00:00:00.000Z", "value": 5964365 },
            { "date": "2021-01-01T00:00:00.000Z", "value": 5963871 }
        ]
    },
    {
        titulo: "Indústria", //Optional
        id: "empregos-industria", //Required
        cor: "laranja", //Optional
        dados: [
            { "date": "2012-01-01T00:00:00.000Z", "value": 2408145 },
            { "date": "2013-01-01T00:00:00.000Z", "value": 2063211 },
            { "date": "2014-01-01T00:00:00.000Z", "value": 2472433 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 2459985 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 2586987 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 2155295 },
            { "date": "2018-01-01T00:00:00.000Z", "value": 2409724 },
            { "date": "2019-01-01T00:00:00.000Z", "value": 2746948 },
            { "date": "2020-01-01T00:00:00.000Z", "value": 2903792 },
            { "date": "2021-01-01T00:00:00.000Z", "value": 2800732 }
        ]
    },
];

//MPE MASSA SALARIAL
let dataMpeMassaSalarial = [
    {
        titulo: "Serviços",
        id: "massa-salarial-servicos",
        cor: "lilas",
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 1622183348 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 3565218059 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 6830895947 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 8655793328 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 12087357781 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 14987625499 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 16584865324 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 17656314570 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 16341510328 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 18341267018 }
        ]
    },
    {
        titulo: "Comércio",
        id: "massa-salarial-comercio",
        cor: "verdeClaro",
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 1671575997 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 2560643029 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 3575133074 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 6015054250 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 7651010902 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 9516959741 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 10515756515 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 12506441210 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 11195964365 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 14505963871 }
        ]
    },
    {
        titulo: "Indústria", //Optional
        id: "massa-salarial-industria", //Required
        cor: "laranja", //Optional
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 1806408145 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 2236063211 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 2585472433 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 2986459985 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 3105586987 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 3505155295 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 3725409724 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 4016746948 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 4519903792 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 4155800732 }
        ]
    },
];

//MPE RENDA
let dataMpeRenda = [
    {
        titulo: "Serviços",
        id: "renda-servicos",
        cor: "lilas",
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 2255.92 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 2273.55 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 2301.38 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 2268.94 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 2654.11 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 2484.18 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 2464.48 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 2448.32 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 2928.42 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 2998.46 }
        ]
    },
    {
        titulo: "Comércio",
        id: "renda-comercio",
        cor: "verdeClaro",
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 1216.16 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 1202.03 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 1345.61 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 1246.37 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 1665.46 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 1990.82 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 1960.78 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 1905.78 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 1957.65 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 1956.87 }
        ]
    },
    {
        titulo: "Indústria", //Optional
        id: "renda-industria", //Required
        cor: "laranja", //Optional
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 1561.16 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 1432.03 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 1489.61 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 1489.37 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 1534.46 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 1489.82 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 1043.78 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 1190.78 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 1408.65 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 1635.87 }
        ]
    },
];

//MPE ECONOMIA
let dataMpeEconomia = [
    {
        titulo: "Geral",
        id: "situacao-economia-geral",
        cor: "rosa",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 40 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 119 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 86 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 72 }
        ]
    },
    {
        titulo: "MPE",
        id: "situacao-economia-mpe",
        cor: "azulSebrae",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 102 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 77 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 52 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 65 }
        ]
    },
    {
        titulo: "Indústria", //Optional
        id: "situacao-economia-industria", //Required
        cor: "laranja", //Optional
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 114 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 41 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 84 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 138 }
        ]
    },
    {
        titulo: "Comércio",
        id: "situacao-economia-comercio",
        cor: "verdeClaro",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 56 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 48 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 26 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 60 }
        ]
    },
    {
        titulo: "Serviços",
        id: "situacao-economia-servicos",
        cor: "lilas",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 114 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 103 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 78 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 75 }
        ]
    },
];

//MPE NEGOCCIO
let dataMpeNegocio = [
    {
        titulo: "Geral",
        id: "situacao-negocio-geral",
        cor: "rosa",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 40 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 119 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 86 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 72 }
        ]
    },
    {
        titulo: "Geral Expectativa",
        id: "expectativa-negocio-geral",
        ref: "situacao-negocio-geral",
        cor: "rosa",
        dasharray: "4 4",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 45 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 129 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 94 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 49 }
        ]
    },
    {
        titulo: "MPE",
        id: "situacao-negocio-mpe",
        cor: "azulSebrae",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 102 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 77 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 52 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 65 }
        ]
    },
    {
        titulo: "MPE Expectativa",
        id: "expectativa-negocio-mpe",
        ref: "situacao-negocio-mpe",
        cor: "azulSebrae",
        dasharray: "4 4",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 81 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 95 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 118 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 77 }
        ]
    },
    {
        titulo: "Indústria", //Optional
        id: "situacao-negocio-industria", //Required
        cor: "laranja", //Optional
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 114 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 41 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 84 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 138 }
        ]
    },
    {
        titulo: "Indústria Expectativa",
        id: "expectativa-negocio-industria",
        ref: "situacao-negocio-industria",
        cor: "laranja",
        dasharray: "4 4",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 120 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 132 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 105 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 96 }
        ]
    },
    {
        titulo: "Comércio",
        id: "situacao-negocio-comercio",
        cor: "verdeClaro",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 56 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 48 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 26 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 60 }
        ]
    },
    {
        titulo: "Comércio Expectativa",
        id: "expectativa-negocio-comercio",
        ref: "situacao-negocio-comercio",
        cor: "verdeClaro",
        dasharray: "4 4",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 68 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 71 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 42 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 36 }
        ]
    },
    {
        titulo: "Serviços",
        id: "situacao-negocio-servicos",
        cor: "lilas",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 114 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 103 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 78 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 75 }
        ]
    },
    {
        titulo: "Serviços Expectativa",
        id: "expectativa-negocio-servicos",
        ref: "situacao-negocio-servicos",
        cor: "lilas",
        dasharray: "4 4",
        dados: [
            { "date": "2014-01-01T00:00:00.000Z", "value": 119 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 86 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 67 },
            { "date": "2017-01-01T00:00:00.000Z", "value": 115 }
        ]
    },
];