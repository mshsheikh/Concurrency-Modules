export interface StockDetails {
    stockName: string;
    stockPrice: string | number;
    marketCap: string | number;
  }
  
export interface Companies {
    companyName: string;
    foundingDate: string | number;
    founderName: string;
    wordWideEmp: string; // WorldwideEmployees
    netWorth: string | number;
    type: string;
    services: string;
    stockDetails: StockDetails;
  }
  