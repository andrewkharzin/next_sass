// queries.js
import { gql } from '@apollo/client';

export const GET_FLIGHTS = gql`
  query GetFlights {
    flights {
        actionCode
        aircraftType
        flightDate
        flightNumber
        flightRoute
        flightTime
        handStatus
        iata
        icao
        registrationNumber
        slotMsg
        stateStatus
        tripStatus
        airline {
          bannerImg
          callsign
          codeHub
          codeIataAirline
          codeIcaoAirline
          codeIso2Country
          iataPrefixAccounting
          nameAirline
          nameCountry
          resolvedArlLogo
          resolvedCntrLogo
          type
        }
      }
  }
`;