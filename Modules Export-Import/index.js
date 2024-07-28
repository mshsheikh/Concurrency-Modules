"use strict";
// Creaing a baisc dataset about Big Tech Companies:
Object.defineProperty(exports, "__esModule", { value: true });
exports.companies = void 0;
exports.companies = [
    {
        companyName: "Google",
        foundingDate: "September 4, " + 1998,
        founderName: "Larry Page, Sergey Brin",
        wordWideEmp: "Approximately 190,000+ (as of 2023)",
        netWorth: "Goolge's Networth: $" + 1.5 + " trillion (as of 2024)",
        type: "Public (subsidiary of Alphabet Inc.)",
        services: "Search engine, online advertising technologies, cloud computing, software, and hardware",
        stockDetails: {
            stockName: "GOOGL (Class A shares), GOOG (Class C shares)",
            stockPrice: "Around $" + 125 + " (as of July 2024)",
            marketCap: "Google's MarketCap: Approximately $" + 1.67 + " trillion (as of 2024)",
        },
    },
    {
        companyName: "Microsoft",
        foundingDate: "April 4, " + 1975,
        founderName: "Bill Gates, Paul Allen",
        wordWideEmp: "Approximately 221,000+ (as of 2024)",
        netWorth: "Microsoft's Nerworth: $" + 3.3 + " trillion (enterprise value as of 2024)",
        type: "Public",
        services: "Software, cloud computing, personal computing, AI, gaming, enterprise services",
        stockDetails: {
            stockName: "MSFT",
            stockPrice: "Around $" + 430.8 + " (as of July 2024)",
            marketCap: "Microsoft's MarketCap: Approximately $" + 2.5 + " trillion (as of 2024)",
        },
    },
    {
        companyName: "Amazon",
        foundingDate: "July 5, " + 1994,
        founderName: "Jeff Bezos",
        wordWideEmp: "Approximately 1.54 million (as of 2023)",
        netWorth: "Amazon's Nerworth: $" + 1.35 + " trillion (as of 2024)",
        type: "Public",
        services: "E-commerce, cloud computing, digital streaming, artificial intelligenc",
        stockDetails: {
            stockName: "AMZN",
            stockPrice: "Around $" + 133.34 + " (as of July 2024)",
            marketCap: "Amazon's MarketCap: Approximately $" + 1.4 + " trillion (as of 2024)",
        },
    },
    {
        companyName: "NVIDIA",
        foundingDate: "April 5, " + 1993,
        founderName: "Jensen Huang, Chris Malachowsky, Curtis Priem",
        wordWideEmp: "Approximately 26,000 (as of 2023)",
        netWorth: "NVIDIA's Nerworth: $" + 1 + " trillion (as of 2024)",
        type: "Public",
        services: "Graphics processing units (GPUs), AI technology, computing",
        stockDetails: {
            stockName: "NVDA",
            stockPrice: "Around $" + 453.92 + " (as of July 2024)",
            marketCap: "NVIDIA's MarketCap: Approximately $" + 1 + " trillion (as of 2024)",
        },
    },
    {
        companyName: "Meta (Facebook)",
        foundingDate: "February 4, " + 2004,
        founderName: "Mark Zuckerberg",
        wordWideEmp: "Approximately 86,400+ (as of 2023)",
        netWorth: "Meta's Nerworth: $" + 742 + " billion (as of 2024)",
        type: "Public",
        services: "Social networking, advertising, virtual reality, messaging services",
        stockDetails: {
            stockName: "META",
            stockPrice: "Around $" + 297.32 + " (as of July 2024)",
            marketCap: "Meta's MarketCap: Approximately $" + 740 + " billion (as of 2024)",
        },
    },
    {
        companyName: "Netflix",
        foundingDate: "August 29, " + 1997,
        founderName: "Reed Hastings, Marc Randolph",
        wordWideEmp: "Approximately 12,800+ (as of 2023)",
        netWorth: "Netflix's Nerworth: $" + 166 + " billion (as of 2024)",
        type: "Public",
        services: "Streaming media, video-on-demand, film production, television production",
        stockDetails: {
            stockName: "NFLX",
            stockPrice: "Around $" + 430.52 + " (as of July 2024)",
            marketCap: "Netflix's MarketCap: Approximately $" + 170 + " billion (as of 2024)",
        },
    },
    {
        companyName: "Tesla",
        foundingDate: "July 1, " + 2003,
        founderName: "Elon Musk (among others including: JB Straubel, Martin Eberhard, Marc Tarpenning, Ian Wright)",
        wordWideEmp: "Approximately 127,800+ (as of 2023)",
        netWorth: "Tesla's Nerworth: $" + 835 + " billion (as of 2024)",
        type: "Public",
        services: "Electric vehicles, battery energy storage, solar energy solutions",
        stockDetails: {
            stockName: "TSLA",
            stockPrice: "Around $" + 260.02 + " (as of July 2024)",
            marketCap: "Tesla's MarketCap: Approximately $" + 835 + " billion (as of 2024)",
        },
    },
];
console.log(exports.companies.filter(company => company.stockDetails.stockPrice).map(company => company.stockDetails.stockPrice));
