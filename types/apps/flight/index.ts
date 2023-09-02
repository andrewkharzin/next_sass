// types.ts
export interface FlightType {
    id: number;
    actionCode: string;
    aircraftType: string;
    flightDate: string;
    flightNumber: string;
    flightRoute: string;
    flightTime: string;
    handStatus: string;
    iata: string;
    icao: string;
    registrationNumber: string;
    slotMsg: string;
    stateStatus: string;
    tripStatus: string;
    airline: {
      bannerImg: string;
      callsign: string;
      codeHub: string;
      codeIataAirline: string;
      codeIcaoAirline: string;
      codeIso2Country: string;
      iataPrefixAccounting: string;
      nameAirline: string;
      nameCountry: string;
      resolvedArlLogo: string;
      resolvedCntrLogo: string;
      type: string;
    };
  }
  