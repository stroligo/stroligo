/*DATASETS*/

//MEI TRABALHADORES
let dataMeiTrabalhadores = [
    {
        titulo: "Trabalhadores com CNPJ", //Optional
        id: "trabalhadores-com-cnpj", //Required
        cor: "laranja", //Optional
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 6408145 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 6063211 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 5472433 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 6459985 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 5586987 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 5155295 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 5409724 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 6746948 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 5903792 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 5800732 }
        ]
    },
    {
        titulo: "Trabalhadores sem CNPJ",
        id: "trabalhadores-sem-cnpj",
        cor: "verdeClaro",
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 16775997 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 16643029 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 15733074 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 16015250 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 16010902 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 16959741 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 15756515 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 16441210 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 15964365 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 15963871 }
        ]
    },
];

//MEI FORMALIZAÇÃO
let dataMeiForma = [
    {
        titulo: "Empregado(a) com carteira",
        id: "forma-com-carteira",
        cor: "azulSebrae",
        dados: [
            { "date": "2007-01-01T00:00:00.000Z", "value": 54 },
            { "date": "2008-01-01T00:00:00.000Z", "value": 36 },
            { "date": "2009-01-01T00:00:00.000Z", "value": 39 },
            { "date": "2010-01-01T00:00:00.000Z", "value": 34 },
            { "date": "2011-01-01T00:00:00.000Z", "value": 31 },
            { "date": "2012-01-01T00:00:00.000Z", "value": 35 },
            { "date": "2013-01-01T00:00:00.000Z", "value": 54 },
            { "date": "2014-01-01T00:00:00.000Z", "value": 49 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 55 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 54 }
        ]
    },
    {
        titulo: "Empregado(a) sem carteira", //Optional
        id: "forma-sem-carteira", //Required
        cor: "laranja", //Optional
        dados: [
            { "date": "2007-01-01T00:00:00.000Z", "value": 16 },
            { "date": "2008-01-01T00:00:00.000Z", "value": 18 },
            { "date": "2009-01-01T00:00:00.000Z", "value": 15 },
            { "date": "2010-01-01T00:00:00.000Z", "value": 17 },
            { "date": "2011-01-01T00:00:00.000Z", "value": 18 },
            { "date": "2012-01-01T00:00:00.000Z", "value": 21 },
            { "date": "2013-01-01T00:00:00.000Z", "value": 26 },
            { "date": "2014-01-01T00:00:00.000Z", "value": 27 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 25 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 26 }
        ]
    },
    {
        titulo: "Empreendedor informal (sem CNPJ)", //Optional
        id: "forma-informal", //Required
        cor: "rosa", //Optional
        dados: [
            { "date": "2007-01-01T00:00:00.000Z", "value": 30 },
            { "date": "2008-01-01T00:00:00.000Z", "value": 31 },
            { "date": "2009-01-01T00:00:00.000Z", "value": 33 },
            { "date": "2010-01-01T00:00:00.000Z", "value": 29 },
            { "date": "2011-01-01T00:00:00.000Z", "value": 30 },
            { "date": "2012-01-01T00:00:00.000Z", "value": 26 },
            { "date": "2013-01-01T00:00:00.000Z", "value": 12 },
            { "date": "2014-01-01T00:00:00.000Z", "value": 13 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 11 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 12 }
        ]
    },
    {
        titulo: "Outros", //Optional
        id: "forma-outros", //Required
        cor: "verdeClaro", //Optional
        dados: [
            { "date": "2007-01-01T00:00:00.000Z", "value": 10 },
            { "date": "2008-01-01T00:00:00.000Z", "value": 15 },
            { "date": "2009-01-01T00:00:00.000Z", "value": 13 },
            { "date": "2010-01-01T00:00:00.000Z", "value": 20 },
            { "date": "2011-01-01T00:00:00.000Z", "value": 21 },
            { "date": "2012-01-01T00:00:00.000Z", "value": 18 },
            { "date": "2013-01-01T00:00:00.000Z", "value": 16 },
            { "date": "2014-01-01T00:00:00.000Z", "value": 11 },
            { "date": "2015-01-01T00:00:00.000Z", "value": 9 },
            { "date": "2016-01-01T00:00:00.000Z", "value": 8 }
        ]
    },
];

//MEI HORAS TRABALHADAS
let dataMeiHorasTrabalhadas = [
    {
        titulo: "Trabalhadores com CNPJ", //Optional
        id: "horas-com-cnpj", //Required
        cor: "laranja", //Optional
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 40.2 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 41.2 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 39.8 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 40.5 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 41.1 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 40.7 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 39.9 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 40.3 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 41.8 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 42.0 }
        ]
    },
    {
        titulo: "Trabalhadores sem CNPJ",
        id: "horas-sem-cnpj",
        cor: "verdeClaro",
        dados: [
            { "date": "2007-04-01T00:00:00.000Z", "value": 59.8 },
            { "date": "2007-05-24T00:00:00.000Z", "value": 58.8 },
            { "date": "2007-06-25T00:00:00.000Z", "value": 60.2 },
            { "date": "2007-07-26T00:00:00.000Z", "value": 59.5 },
            { "date": "2007-08-29T00:00:00.000Z", "value": 58.9 },
            { "date": "2007-10-02T00:00:00.000Z", "value": 59.3 },
            { "date": "2008-01-03T00:00:00.000Z", "value": 60.1 },
            { "date": "2008-02-04T00:00:00.000Z", "value": 59.7 },
            { "date": "2009-03-07T00:00:00.000Z", "value": 58.2 },
            { "date": "2010-04-08T00:00:00.000Z", "value": 58.0 }
        ]
    },
];

//MEI RENDA MÉDIA
let dataMeiRenda = [
    {
        titulo: "Trabalhadores com CNPJ", //Optional
        id: "renda-com-cnpj", //Required
        cor: "laranja", //Optional
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
        titulo: "Trabalhadores sem CNPJ",
        id: "renda-sem-cnpj",
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
];