import React, { useState, useRef, useEffect } from "react";
import flightDetailsJson from "./Assets/flightDetails.json";
import useOutsideClick from "../useOutsideClick";
import CompleteYourTrip from "./CompleteYourTrip";
import warning from "./Assets/warning.png";
import ReturnFlightDetails from "./ReturnFlightDetails";
import loading from "../Assets/loading.gif";
import { useParams } from "react-router-dom";

const FlightDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flightDetails, setFlightDetails] = useState({
    itinerary: {
      id: "11182-2511260410--31963-0-12569-2511260810",
      legs: [
        {
          id: "11182-2511260410--31963-0-12569-2511260810",
          departure: {
            year: 2025,
            month: 11,
            day: 26,
            hour: 4,
            minute: 10,
          },
          arrival: {
            year: 2025,
            month: 11,
            day: 26,
            hour: 8,
            minute: 10,
          },
          durationMinutes: 180,
          stopCount: 0,
          origin: {
            airport: {
              id: "11182",
              altId: "DXB",
              name: "Dubai",
              displayCode: "DXB",
              entityId: "95673506",
            },
            city: {
              id: "2301",
              altId: "DXBA",
              name: "Dubai",
              displayCode: "DXB",
              entityId: "27540839",
            },
            country: {
              id: "110",
              altId: "AE",
              name: "United Arab Emirates",
              displayCode: "AE",
              entityId: "29475216",
            },
          },
          destination: {
            airport: {
              id: "12569",
              altId: "ISB",
              name: "Islamabad",
              displayCode: "ISB",
              entityId: "128667932",
            },
            city: {
              id: "3620",
              altId: "ISBA",
              name: "Islamabad",
              displayCode: "ISB",
              entityId: "27542896",
            },
            country: {
              id: "189",
              altId: "PK",
              name: "Pakistan",
              displayCode: "PK",
              entityId: "29475277",
            },
          },
          segments: [
            {
              id: "11182-12569-2511260410-2511260810--31963",
              departure: {
                year: 2025,
                month: 11,
                day: 26,
                hour: 4,
                minute: 10,
              },
              arrival: {
                year: 2025,
                month: 11,
                day: 26,
                hour: 8,
                minute: 10,
              },
              durationMinutes: 180,
              flightNumber: "234",
              origin: {
                airport: {
                  id: "11182",
                  altId: "DXB",
                  name: "Dubai",
                  displayCode: "DXB",
                  entityId: "95673506",
                },
                city: {
                  id: "2301",
                  altId: "DXBA",
                  name: "Dubai",
                  displayCode: "DXB",
                  entityId: "27540839",
                },
                country: {
                  id: "110",
                  altId: "AE",
                  name: "United Arab Emirates",
                  displayCode: "AE",
                  entityId: "29475216",
                },
              },
              destination: {
                airport: {
                  id: "12569",
                  altId: "ISB",
                  name: "Islamabad",
                  displayCode: "ISB",
                  entityId: "128667932",
                },
                city: {
                  id: "3620",
                  altId: "ISBA",
                  name: "Islamabad",
                  displayCode: "ISB",
                  entityId: "27542896",
                },
                country: {
                  id: "189",
                  altId: "PK",
                  name: "Pakistan",
                  displayCode: "PK",
                  entityId: "29475277",
                },
              },
              marketingCarrier: {
                id: -31963,
                altId: "PK",
                name: "PIA",
                displayCode: "PK",
              },
              operatingCarrier: {
                id: -31963,
                altId: "PK",
                name: "PIA",
                displayCode: "PK",
              },
              dayChange: 0,
              goodToKnowItems: [],
              amenityInfo: {
                transportType: "TRANSPORT_TYPE_PLANE",
                transportDescription: "A320 (narrowbody)",
                layout: "3-3 seat layout",
                seatPitch: '30" seat pitch',
                meals: {
                  assessment: "ASSESSMENT_INCLUDED",
                  description: "Meal provided",
                },
                wifi: {
                  assessment: "ASSESSMENT_UNAVAILABLE",
                  description: "No Wi-Fi",
                },
                entertainment: {
                  assessment: "ASSESSMENT_INCLUDED",
                  description: "Streaming entertainment",
                },
                power: {
                  assessment: "ASSESSMENT_UNAVAILABLE",
                  description: "No power outlet",
                },
              },
            },
          ],
          layovers: [],
          dayChange: 0,
          goodToKnowItems: [],
        },
      ],
      pricingOptions: [
        {
          id: "QQIQHcRtwQ_Q",
          price: {
            currencyCode: "USD",
            amount: "11889",
            unit: "UNIT_CENTI",
          },
          fare: {
            cabinBaggage: null,
            checkedBaggage: null,
            legBaggage: [],
            brandNames: "Economy class",
            addedAttributeLabels: [],
            advanceChange: null,
            cancellation: null,
            seatPreReservation: null,
            upgradeEligibility: null,
          },
          pricingItems: [
            {
              agent: {
                id: "jtus",
                name: "Jetabroad",
                carrier: false,
                rating: {
                  value: 4.36,
                  count: 231,
                },
                partnerMessages: [
                  {
                    text: "24/7 customer support",
                    messageType: "PARTNER_MESSAGE_SUPPORT_24H",
                  },
                ],
              },
              uri: "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/jtus/1/11182.12569.2025-11-26/air/trava/flights?itinerary=flight|-31963|234|11182|2025-11-26T04:10|12569|2025-11-26T08:10|180|-|-|JALITE&carriers=-31963&operators=-31963&passengers=1&channel=android&cabin_class=economy&fps_session_id=32fd7e83-cca7-4be3-af88-815d5ecd9f1b&ticket_price=118.89&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=4d8be18f-0262-4e18-a098-4ac4cc125043&q_ids=H4sIAAAAAAAA_-OS4mLJKiktFmLm-CsoxcwxM0mhoW3mSTYjJgVGAHS5THAcAAAA|-4796408974793146360|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2025-11-22T11:04:25&pqid=true&fare_type=base_fare",
              price: {
                currencyCode: "USD",
                amount: "11889",
                unit: "UNIT_CENTI",
              },
              updateStatus: "UPDATE_STATUS_PENDING",
              segments: [
                {
                  id: "11182-12569-2511260410-2511260810--31963",
                  departure: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 4,
                    minute: 10,
                  },
                  arrival: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 8,
                    minute: 10,
                  },
                  durationMinutes: 180,
                  flightNumber: "234",
                  origin: {
                    airport: {
                      id: "11182",
                      altId: "DXB",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "95673506",
                    },
                    city: {
                      id: "2301",
                      altId: "DXBA",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "27540839",
                    },
                    country: {
                      id: "110",
                      altId: "AE",
                      name: "United Arab Emirates",
                      displayCode: "AE",
                      entityId: "29475216",
                    },
                  },
                  destination: {
                    airport: {
                      id: "12569",
                      altId: "ISB",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "128667932",
                    },
                    city: {
                      id: "3620",
                      altId: "ISBA",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "27542896",
                    },
                    country: {
                      id: "189",
                      altId: "PK",
                      name: "Pakistan",
                      displayCode: "PK",
                      entityId: "29475277",
                    },
                  },
                  marketingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  operatingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  dayChange: 0,
                  goodToKnowItems: [],
                  amenityInfo: {
                    transportType: "TRANSPORT_TYPE_PLANE",
                    transportDescription: "A320 (narrowbody)",
                    layout: "3-3 seat layout",
                    seatPitch: '30" seat pitch',
                    meals: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Meal provided",
                    },
                    wifi: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No Wi-Fi",
                    },
                    entertainment: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Streaming entertainment",
                    },
                    power: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No power outlet",
                    },
                  },
                },
              ],
              transferProtection: "TRANSFER_PROTECTION_UNSPECIFIED",
              dealMessageKey: "",
              fareFamily: "JALITE",
              segmentIds: ["11182-12569-2511260410-2511260810--31963"],
            },
          ],
          updateStatus: "UPDATE_STATUS_PENDING",
          unpricedType: "UNPRICED_TYPE_UNSPECIFIED",
          mashup: false,
          upgradeOption: false,
          fareType: "FARE_TYPE_BASE_FARE",
        },
        {
          id: "IaNKkEQ38KeB",
          price: {
            currencyCode: "USD",
            amount: "13200",
            unit: "UNIT_CENTI",
          },
          fare: {
            cabinBaggage: null,
            checkedBaggage: null,
            legBaggage: [],
            brandNames: "Economy class",
            addedAttributeLabels: [],
            advanceChange: null,
            cancellation: null,
            seatPreReservation: null,
            upgradeEligibility: null,
          },
          pricingItems: [
            {
              agent: {
                id: "cust",
                name: "Trip.com",
                carrier: false,
                rating: {
                  value: 4.79,
                  count: 5823,
                },
                partnerMessages: [
                  {
                    text: "24/7 live chat and telephone support",
                    messageType:
                      "PARTNER_MESSAGE_SUPPORT_24H_TELEPHONE_LIVE_CHAT",
                  },
                ],
              },
              uri: "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/cust/1/11182.12569.2025-11-26/air/trava/flights?itinerary=flight|-31963|234|11182|2025-11-26T04:10|12569|2025-11-26T08:10|180|-|-|-&carriers=-31963&operators=-31963&passengers=1&channel=android&cabin_class=economy&fps_session_id=32fd7e83-cca7-4be3-af88-815d5ecd9f1b&ticket_price=132.00&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=4d8be18f-0262-4e18-a098-4ac4cc125043&q_ids=H4sIAAAAAAAA_-NS42JJLi0uEWLm-CsoxcwxM0mhoW3mSTYjJgXGItbUPN3Q4Crm0GAXAHMt-3koAAAA|1230209193435502358|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2025-11-22T11:04:25&pqid=true&fare_type=base_fare",
              price: {
                currencyCode: "USD",
                amount: "13200",
                unit: "UNIT_CENTI",
              },
              updateStatus: "UPDATE_STATUS_PENDING",
              segments: [
                {
                  id: "11182-12569-2511260410-2511260810--31963",
                  departure: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 4,
                    minute: 10,
                  },
                  arrival: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 8,
                    minute: 10,
                  },
                  durationMinutes: 180,
                  flightNumber: "234",
                  origin: {
                    airport: {
                      id: "11182",
                      altId: "DXB",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "95673506",
                    },
                    city: {
                      id: "2301",
                      altId: "DXBA",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "27540839",
                    },
                    country: {
                      id: "110",
                      altId: "AE",
                      name: "United Arab Emirates",
                      displayCode: "AE",
                      entityId: "29475216",
                    },
                  },
                  destination: {
                    airport: {
                      id: "12569",
                      altId: "ISB",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "128667932",
                    },
                    city: {
                      id: "3620",
                      altId: "ISBA",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "27542896",
                    },
                    country: {
                      id: "189",
                      altId: "PK",
                      name: "Pakistan",
                      displayCode: "PK",
                      entityId: "29475277",
                    },
                  },
                  marketingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  operatingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  dayChange: 0,
                  goodToKnowItems: [],
                  amenityInfo: {
                    transportType: "TRANSPORT_TYPE_PLANE",
                    transportDescription: "A320 (narrowbody)",
                    layout: "3-3 seat layout",
                    seatPitch: '30" seat pitch',
                    meals: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Meal provided",
                    },
                    wifi: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No Wi-Fi",
                    },
                    entertainment: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Streaming entertainment",
                    },
                    power: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No power outlet",
                    },
                  },
                },
              ],
              transferProtection: "TRANSFER_PROTECTION_UNSPECIFIED",
              dealMessageKey: "",
              fareFamily: "",
              segmentIds: ["11182-12569-2511260410-2511260810--31963"],
            },
          ],
          updateStatus: "UPDATE_STATUS_PENDING",
          unpricedType: "UNPRICED_TYPE_UNSPECIFIED",
          mashup: false,
          upgradeOption: false,
          fareType: "FARE_TYPE_BASE_FARE",
        },
        {
          id: "maCYfNDUCl8x",
          price: {
            currencyCode: "USD",
            amount: "13140",
            unit: "UNIT_CENTI",
          },
          fare: {
            cabinBaggage: null,
            checkedBaggage: null,
            legBaggage: [],
            brandNames: "Economy class",
            addedAttributeLabels: [],
            advanceChange: null,
            cancellation: null,
            seatPreReservation: null,
            upgradeEligibility: null,
          },
          pricingItems: [
            {
              agent: {
                id: "vaya",
                name: "BudgetAir",
                carrier: false,
                rating: {
                  value: 3.07,
                  count: 2427,
                },
                partnerMessages: [
                  {
                    text: "24/7 live chat and telephone support",
                    messageType:
                      "PARTNER_MESSAGE_SUPPORT_24H_TELEPHONE_LIVE_CHAT",
                  },
                ],
              },
              uri: "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/vaya/1/11182.12569.2025-11-26/air/trava/flights?itinerary=flight|-31963|234|11182|2025-11-26T04:10|12569|2025-11-26T08:10|180|-|-|-&carriers=-31963&operators=-31963&passengers=1&channel=android&cabin_class=economy&fps_session_id=32fd7e83-cca7-4be3-af88-815d5ecd9f1b&ticket_price=131.40&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=4d8be18f-0262-4e18-a098-4ac4cc125043&q_ids=H4sIAAAAAAAA_-OS52IpS6xMFGLm-CsoxcwxM0mhoW3mSTYjJgXGKubQYBcAAs3-KCEAAAA|7445351096281644816|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2025-11-22T11:04:30&pqid=true&fare_type=base_fare",
              price: {
                currencyCode: "USD",
                amount: "13140",
                unit: "UNIT_CENTI",
              },
              updateStatus: "UPDATE_STATUS_PENDING",
              segments: [
                {
                  id: "11182-12569-2511260410-2511260810--31963",
                  departure: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 4,
                    minute: 10,
                  },
                  arrival: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 8,
                    minute: 10,
                  },
                  durationMinutes: 180,
                  flightNumber: "234",
                  origin: {
                    airport: {
                      id: "11182",
                      altId: "DXB",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "95673506",
                    },
                    city: {
                      id: "2301",
                      altId: "DXBA",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "27540839",
                    },
                    country: {
                      id: "110",
                      altId: "AE",
                      name: "United Arab Emirates",
                      displayCode: "AE",
                      entityId: "29475216",
                    },
                  },
                  destination: {
                    airport: {
                      id: "12569",
                      altId: "ISB",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "128667932",
                    },
                    city: {
                      id: "3620",
                      altId: "ISBA",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "27542896",
                    },
                    country: {
                      id: "189",
                      altId: "PK",
                      name: "Pakistan",
                      displayCode: "PK",
                      entityId: "29475277",
                    },
                  },
                  marketingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  operatingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  dayChange: 0,
                  goodToKnowItems: [],
                  amenityInfo: {
                    transportType: "TRANSPORT_TYPE_PLANE",
                    transportDescription: "A320 (narrowbody)",
                    layout: "3-3 seat layout",
                    seatPitch: '30" seat pitch',
                    meals: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Meal provided",
                    },
                    wifi: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No Wi-Fi",
                    },
                    entertainment: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Streaming entertainment",
                    },
                    power: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No power outlet",
                    },
                  },
                },
              ],
              transferProtection: "TRANSFER_PROTECTION_UNSPECIFIED",
              dealMessageKey: "",
              fareFamily: "",
              segmentIds: ["11182-12569-2511260410-2511260810--31963"],
            },
          ],
          updateStatus: "UPDATE_STATUS_PENDING",
          unpricedType: "UNPRICED_TYPE_UNSPECIFIED",
          mashup: false,
          upgradeOption: false,
          fareType: "FARE_TYPE_BASE_FARE",
        },
        {
          id: "KZB7AUUkqxcC",
          price: {
            currencyCode: "USD",
            amount: "13300",
            unit: "UNIT_CENTI",
          },
          fare: {
            cabinBaggage: null,
            checkedBaggage: null,
            legBaggage: [],
            brandNames: "Economy class",
            addedAttributeLabels: [],
            advanceChange: null,
            cancellation: null,
            seatPreReservation: null,
            upgradeEligibility: null,
          },
          pricingItems: [
            {
              agent: {
                id: "fnus",
                name: "Flightnetwork",
                carrier: false,
                rating: {
                  value: 4.44,
                  count: 2343,
                },
                partnerMessages: [
                  {
                    text: "24/7 customer support",
                    messageType: "PARTNER_MESSAGE_SUPPORT_24H",
                  },
                ],
              },
              uri: "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/fnus/1/11182.12569.2025-11-26/air/trava/flights?itinerary=flight|-31963|234|11182|2025-11-26T04:10|12569|2025-11-26T08:10|180|-|-|-&carriers=-31963&operators=-31963&passengers=1&channel=android&cabin_class=economy&fps_session_id=32fd7e83-cca7-4be3-af88-815d5ecd9f1b&ticket_price=133.00&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=4d8be18f-0262-4e18-a098-4ac4cc125043&q_ids=H4sIAAAAAAAA_-OS52JJyystFmLm-CsoxcwxM0mhoW3mSTYjJgXGKubQYBcAZPZLuyEAAAA|-6356756004693145533|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2025-11-23T09:32:18&pqid=true&fare_type=base_fare",
              price: {
                currencyCode: "USD",
                amount: "13300",
                unit: "UNIT_CENTI",
              },
              updateStatus: "UPDATE_STATUS_CURRENT",
              segments: [
                {
                  id: "11182-12569-2511260410-2511260810--31963",
                  departure: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 4,
                    minute: 10,
                  },
                  arrival: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 8,
                    minute: 10,
                  },
                  durationMinutes: 180,
                  flightNumber: "234",
                  origin: {
                    airport: {
                      id: "11182",
                      altId: "DXB",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "95673506",
                    },
                    city: {
                      id: "2301",
                      altId: "DXBA",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "27540839",
                    },
                    country: {
                      id: "110",
                      altId: "AE",
                      name: "United Arab Emirates",
                      displayCode: "AE",
                      entityId: "29475216",
                    },
                  },
                  destination: {
                    airport: {
                      id: "12569",
                      altId: "ISB",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "128667932",
                    },
                    city: {
                      id: "3620",
                      altId: "ISBA",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "27542896",
                    },
                    country: {
                      id: "189",
                      altId: "PK",
                      name: "Pakistan",
                      displayCode: "PK",
                      entityId: "29475277",
                    },
                  },
                  marketingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  operatingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  dayChange: 0,
                  goodToKnowItems: [],
                  amenityInfo: {
                    transportType: "TRANSPORT_TYPE_PLANE",
                    transportDescription: "A320 (narrowbody)",
                    layout: "3-3 seat layout",
                    seatPitch: '30" seat pitch',
                    meals: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Meal provided",
                    },
                    wifi: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No Wi-Fi",
                    },
                    entertainment: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Streaming entertainment",
                    },
                    power: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No power outlet",
                    },
                  },
                },
              ],
              transferProtection: "TRANSFER_PROTECTION_UNSPECIFIED",
              dealMessageKey: "",
              fareFamily: "",
              segmentIds: ["11182-12569-2511260410-2511260810--31963"],
            },
          ],
          updateStatus: "UPDATE_STATUS_CURRENT",
          unpricedType: "UNPRICED_TYPE_UNSPECIFIED",
          mashup: false,
          upgradeOption: false,
          fareType: "FARE_TYPE_BASE_FARE",
        },
        {
          id: "j3QStLDhYliM",
          price: {
            currencyCode: "USD",
            amount: "13700",
            unit: "UNIT_CENTI",
          },
          fare: {
            cabinBaggage: null,
            checkedBaggage: null,
            legBaggage: [],
            brandNames: "Economy class",
            addedAttributeLabels: [],
            advanceChange: null,
            cancellation: null,
            seatPreReservation: null,
            upgradeEligibility: null,
          },
          pricingItems: [
            {
              agent: {
                id: "stbf",
                name: "Sky-tours",
                carrier: false,
                rating: {
                  value: 1.59,
                  count: 1069,
                },
                partnerMessages: [],
              },
              uri: "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/stbf/1/11182.12569.2025-11-26/air/trava/flights?itinerary=flight|-31963|234|11182|2025-11-26T04:10|12569|2025-11-26T08:10|180|-|V|-&carriers=-31963&operators=-31963&passengers=1&channel=android&cabin_class=economy&fps_session_id=32fd7e83-cca7-4be3-af88-815d5ecd9f1b&ticket_price=137.00&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=4d8be18f-0262-4e18-a098-4ac4cc125043&q_ids=H4sIAAAAAAAA_-OS4mIpLklKE2Lm-CsoxcwxM0mhoW3mSTYjJgVGABh-5lYcAAAA|693103973095335685|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2025-11-23T09:32:14&pqid=false&fare_type=base_fare",
              price: {
                currencyCode: "USD",
                amount: "13700",
                unit: "UNIT_CENTI",
              },
              updateStatus: "UPDATE_STATUS_PENDING",
              segments: [
                {
                  id: "11182-12569-2511260410-2511260810--31963",
                  departure: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 4,
                    minute: 10,
                  },
                  arrival: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 8,
                    minute: 10,
                  },
                  durationMinutes: 180,
                  flightNumber: "234",
                  origin: {
                    airport: {
                      id: "11182",
                      altId: "DXB",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "95673506",
                    },
                    city: {
                      id: "2301",
                      altId: "DXBA",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "27540839",
                    },
                    country: {
                      id: "110",
                      altId: "AE",
                      name: "United Arab Emirates",
                      displayCode: "AE",
                      entityId: "29475216",
                    },
                  },
                  destination: {
                    airport: {
                      id: "12569",
                      altId: "ISB",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "128667932",
                    },
                    city: {
                      id: "3620",
                      altId: "ISBA",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "27542896",
                    },
                    country: {
                      id: "189",
                      altId: "PK",
                      name: "Pakistan",
                      displayCode: "PK",
                      entityId: "29475277",
                    },
                  },
                  marketingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  operatingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  dayChange: 0,
                  goodToKnowItems: [],
                  amenityInfo: {
                    transportType: "TRANSPORT_TYPE_PLANE",
                    transportDescription: "A320 (narrowbody)",
                    layout: "3-3 seat layout",
                    seatPitch: '30" seat pitch',
                    meals: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Meal provided",
                    },
                    wifi: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No Wi-Fi",
                    },
                    entertainment: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Streaming entertainment",
                    },
                    power: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No power outlet",
                    },
                  },
                },
              ],
              transferProtection: "TRANSFER_PROTECTION_UNSPECIFIED",
              dealMessageKey: "",
              fareFamily: "",
              segmentIds: ["11182-12569-2511260410-2511260810--31963"],
            },
          ],
          updateStatus: "UPDATE_STATUS_PENDING",
          unpricedType: "UNPRICED_TYPE_UNSPECIFIED",
          mashup: false,
          upgradeOption: false,
          fareType: "FARE_TYPE_BASE_FARE",
        },
        {
          id: "UBUASviTPJNU",
          price: {
            currencyCode: "USD",
            amount: "13969",
            unit: "UNIT_CENTI",
          },
          fare: {
            cabinBaggage: null,
            checkedBaggage: null,
            legBaggage: [],
            brandNames: "Economy class",
            addedAttributeLabels: [],
            advanceChange: null,
            cancellation: null,
            seatPreReservation: null,
            upgradeEligibility: null,
          },
          pricingItems: [
            {
              agent: {
                id: "skyp",
                name: "Kiwi.com",
                carrier: false,
                rating: {
                  value: 4.34,
                  count: 4437,
                },
                partnerMessages: [
                  {
                    text: "24/7 customer support",
                    messageType: "PARTNER_MESSAGE_SUPPORT_24H",
                  },
                ],
              },
              uri: "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/skyp/1/11182.12569.2025-11-26/air/trava/flights?itinerary=flight|-31963|234|11182|2025-11-26T04:10|12569|2025-11-26T08:10|180|VLOWAE|V|-&carriers=-31963&operators=-31963&passengers=1&channel=android&cabin_class=economy&fps_session_id=32fd7e83-cca7-4be3-af88-815d5ecd9f1b&ticket_price=139.69&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=4d8be18f-0262-4e18-a098-4ac4cc125043&q_ids=H4sIAAAAAAAA_-OS4mIpzq4sEGLm-CsoxcwxM0mhoW3mSTYjJgVGAPf1gbUcAAAA|5430568065201169273|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2025-11-23T08:23:50&pqid=true&fare_type=base_fare",
              price: {
                currencyCode: "USD",
                amount: "13969",
                unit: "UNIT_CENTI",
              },
              updateStatus: "UPDATE_STATUS_CURRENT",
              segments: [
                {
                  id: "11182-12569-2511260410-2511260810--31963",
                  departure: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 4,
                    minute: 10,
                  },
                  arrival: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 8,
                    minute: 10,
                  },
                  durationMinutes: 180,
                  flightNumber: "234",
                  origin: {
                    airport: {
                      id: "11182",
                      altId: "DXB",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "95673506",
                    },
                    city: {
                      id: "2301",
                      altId: "DXBA",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "27540839",
                    },
                    country: {
                      id: "110",
                      altId: "AE",
                      name: "United Arab Emirates",
                      displayCode: "AE",
                      entityId: "29475216",
                    },
                  },
                  destination: {
                    airport: {
                      id: "12569",
                      altId: "ISB",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "128667932",
                    },
                    city: {
                      id: "3620",
                      altId: "ISBA",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "27542896",
                    },
                    country: {
                      id: "189",
                      altId: "PK",
                      name: "Pakistan",
                      displayCode: "PK",
                      entityId: "29475277",
                    },
                  },
                  marketingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  operatingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  dayChange: 0,
                  goodToKnowItems: [],
                  amenityInfo: {
                    transportType: "TRANSPORT_TYPE_PLANE",
                    transportDescription: "A320 (narrowbody)",
                    layout: "3-3 seat layout",
                    seatPitch: '30" seat pitch',
                    meals: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Meal provided",
                    },
                    wifi: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No Wi-Fi",
                    },
                    entertainment: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Streaming entertainment",
                    },
                    power: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No power outlet",
                    },
                  },
                },
              ],
              transferProtection: "TRANSFER_PROTECTION_UNSPECIFIED",
              dealMessageKey: "",
              fareFamily: "",
              segmentIds: ["11182-12569-2511260410-2511260810--31963"],
            },
          ],
          updateStatus: "UPDATE_STATUS_CURRENT",
          unpricedType: "UNPRICED_TYPE_UNSPECIFIED",
          mashup: false,
          upgradeOption: false,
          fareType: "FARE_TYPE_BASE_FARE",
        },
        {
          id: "hJ95F4pkl_qt",
          price: {
            currencyCode: "USD",
            amount: "14995",
            unit: "UNIT_CENTI",
          },
          fare: {
            cabinBaggage: null,
            checkedBaggage: null,
            legBaggage: [],
            brandNames: "Economy class",
            addedAttributeLabels: [],
            advanceChange: null,
            cancellation: null,
            seatPreReservation: null,
            upgradeEligibility: null,
          },
          pricingItems: [
            {
              agent: {
                id: "jfus",
                name: "Justfly.com",
                carrier: false,
                rating: {
                  value: 4.9,
                  count: 2035,
                },
                partnerMessages: [
                  {
                    text: "24/7 live chat and telephone support",
                    messageType:
                      "PARTNER_MESSAGE_SUPPORT_24H_TELEPHONE_LIVE_CHAT",
                  },
                ],
              },
              uri: "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/jfus/1/11182.12569.2025-11-26/air/trava/flights?itinerary=flight|-31963|234|11182|2025-11-26T04:10|12569|2025-11-26T08:10|180|-|V|-&carriers=-31963&operators=-31963&passengers=1&channel=android&cabin_class=economy&fps_session_id=32fd7e83-cca7-4be3-af88-815d5ecd9f1b&ticket_price=149.95&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=4d8be18f-0262-4e18-a098-4ac4cc125043&q_ids=H4sIAAAAAAAA_-OS4mLJSistFmLm-CsoxcwxM0mhoW3mSTYjJgVGANHsqJwcAAAA|-1705627942495221634|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2025-11-23T09:32:13&pqid=false&fare_type=base_fare",
              price: {
                currencyCode: "USD",
                amount: "14995",
                unit: "UNIT_CENTI",
              },
              updateStatus: "UPDATE_STATUS_CURRENT",
              segments: [
                {
                  id: "11182-12569-2511260410-2511260810--31963",
                  departure: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 4,
                    minute: 10,
                  },
                  arrival: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 8,
                    minute: 10,
                  },
                  durationMinutes: 180,
                  flightNumber: "234",
                  origin: {
                    airport: {
                      id: "11182",
                      altId: "DXB",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "95673506",
                    },
                    city: {
                      id: "2301",
                      altId: "DXBA",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "27540839",
                    },
                    country: {
                      id: "110",
                      altId: "AE",
                      name: "United Arab Emirates",
                      displayCode: "AE",
                      entityId: "29475216",
                    },
                  },
                  destination: {
                    airport: {
                      id: "12569",
                      altId: "ISB",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "128667932",
                    },
                    city: {
                      id: "3620",
                      altId: "ISBA",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "27542896",
                    },
                    country: {
                      id: "189",
                      altId: "PK",
                      name: "Pakistan",
                      displayCode: "PK",
                      entityId: "29475277",
                    },
                  },
                  marketingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  operatingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  dayChange: 0,
                  goodToKnowItems: [],
                  amenityInfo: {
                    transportType: "TRANSPORT_TYPE_PLANE",
                    transportDescription: "A320 (narrowbody)",
                    layout: "3-3 seat layout",
                    seatPitch: '30" seat pitch',
                    meals: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Meal provided",
                    },
                    wifi: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No Wi-Fi",
                    },
                    entertainment: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Streaming entertainment",
                    },
                    power: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No power outlet",
                    },
                  },
                },
              ],
              transferProtection: "TRANSFER_PROTECTION_UNSPECIFIED",
              dealMessageKey: "",
              fareFamily: "",
              segmentIds: ["11182-12569-2511260410-2511260810--31963"],
            },
          ],
          updateStatus: "UPDATE_STATUS_CURRENT",
          unpricedType: "UNPRICED_TYPE_UNSPECIFIED",
          mashup: false,
          upgradeOption: false,
          fareType: "FARE_TYPE_BASE_FARE",
        },
        {
          id: "-WjrJ3UIMz1P",
          price: {
            currencyCode: "USD",
            amount: "19897",
            unit: "UNIT_CENTI",
          },
          fare: {
            cabinBaggage: null,
            checkedBaggage: null,
            legBaggage: [],
            brandNames: "Economy class",
            addedAttributeLabels: [],
            advanceChange: null,
            cancellation: null,
            seatPreReservation: null,
            upgradeEligibility: null,
          },
          pricingItems: [
            {
              agent: {
                id: "edus",
                name: "eDreams",
                carrier: false,
                rating: {
                  value: 3.41,
                  count: 2497,
                },
                partnerMessages: [
                  {
                    text: "24/7 customer support",
                    messageType: "PARTNER_MESSAGE_SUPPORT_24H",
                  },
                ],
              },
              uri: "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/edus/1/11182.12569.2025-11-26/air/trava/flights?itinerary=flight|-31963|234|11182|2025-11-26T04:10|12569|2025-11-26T08:10|180|-|-|-&carriers=-31963&operators=-31963&passengers=1&channel=android&cabin_class=economy&fps_session_id=32fd7e83-cca7-4be3-af88-815d5ecd9f1b&ticket_price=198.97&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=4d8be18f-0262-4e18-a098-4ac4cc125043&q_ids=H4sIAAAAAAAA_-OS4mJJTSktFmLm-CsoxcwxM0mhoW3mSTYjJgVGAPE0K5IcAAAA|-5099571656061349498|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2025-11-23T09:32:13&pqid=true&fare_type=base_fare",
              price: {
                currencyCode: "USD",
                amount: "19897",
                unit: "UNIT_CENTI",
              },
              updateStatus: "UPDATE_STATUS_CURRENT",
              segments: [
                {
                  id: "11182-12569-2511260410-2511260810--31963",
                  departure: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 4,
                    minute: 10,
                  },
                  arrival: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 8,
                    minute: 10,
                  },
                  durationMinutes: 180,
                  flightNumber: "234",
                  origin: {
                    airport: {
                      id: "11182",
                      altId: "DXB",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "95673506",
                    },
                    city: {
                      id: "2301",
                      altId: "DXBA",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "27540839",
                    },
                    country: {
                      id: "110",
                      altId: "AE",
                      name: "United Arab Emirates",
                      displayCode: "AE",
                      entityId: "29475216",
                    },
                  },
                  destination: {
                    airport: {
                      id: "12569",
                      altId: "ISB",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "128667932",
                    },
                    city: {
                      id: "3620",
                      altId: "ISBA",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "27542896",
                    },
                    country: {
                      id: "189",
                      altId: "PK",
                      name: "Pakistan",
                      displayCode: "PK",
                      entityId: "29475277",
                    },
                  },
                  marketingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  operatingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  dayChange: 0,
                  goodToKnowItems: [],
                  amenityInfo: {
                    transportType: "TRANSPORT_TYPE_PLANE",
                    transportDescription: "A320 (narrowbody)",
                    layout: "3-3 seat layout",
                    seatPitch: '30" seat pitch',
                    meals: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Meal provided",
                    },
                    wifi: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No Wi-Fi",
                    },
                    entertainment: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Streaming entertainment",
                    },
                    power: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No power outlet",
                    },
                  },
                },
              ],
              transferProtection: "TRANSFER_PROTECTION_UNSPECIFIED",
              dealMessageKey: "",
              fareFamily: "",
              segmentIds: ["11182-12569-2511260410-2511260810--31963"],
            },
          ],
          updateStatus: "UPDATE_STATUS_CURRENT",
          unpricedType: "UNPRICED_TYPE_UNSPECIFIED",
          mashup: false,
          upgradeOption: false,
          fareType: "FARE_TYPE_BASE_FARE",
        },
        {
          id: "hb-PutU-iE5h",
          price: null,
          fare: {
            cabinBaggage: null,
            checkedBaggage: null,
            legBaggage: [],
            brandNames: "Economy class",
            addedAttributeLabels: [],
            advanceChange: null,
            cancellation: null,
            seatPreReservation: null,
            upgradeEligibility: null,
          },
          pricingItems: [
            {
              agent: {
                id: "paki",
                name: "PIA",
                carrier: true,
                rating: {
                  value: 3.23,
                  count: 25,
                },
                partnerMessages: [],
              },
              uri: "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/paki/1/11182.12569.2025-11-26/air/airli/flights_np?itinerary=flight|-31963|234|11182|2025-11-26T04:10|12569|2025-11-26T08:10|180|-|-|-&carriers=-31963&operators=-31963&passengers=1&channel=android&cabin_class=economy&fps_session_id=32fd7e83-cca7-4be3-af88-815d5ecd9f1b&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=4d8be18f-0262-4e18-a098-4ac4cc125043&pqid=false&fare_type=base_fare",
              price: null,
              updateStatus: "UPDATE_STATUS_CURRENT",
              segments: [
                {
                  id: "11182-12569-2511260410-2511260810--31963",
                  departure: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 4,
                    minute: 10,
                  },
                  arrival: {
                    year: 2025,
                    month: 11,
                    day: 26,
                    hour: 8,
                    minute: 10,
                  },
                  durationMinutes: 180,
                  flightNumber: "234",
                  origin: {
                    airport: {
                      id: "11182",
                      altId: "DXB",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "95673506",
                    },
                    city: {
                      id: "2301",
                      altId: "DXBA",
                      name: "Dubai",
                      displayCode: "DXB",
                      entityId: "27540839",
                    },
                    country: {
                      id: "110",
                      altId: "AE",
                      name: "United Arab Emirates",
                      displayCode: "AE",
                      entityId: "29475216",
                    },
                  },
                  destination: {
                    airport: {
                      id: "12569",
                      altId: "ISB",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "128667932",
                    },
                    city: {
                      id: "3620",
                      altId: "ISBA",
                      name: "Islamabad",
                      displayCode: "ISB",
                      entityId: "27542896",
                    },
                    country: {
                      id: "189",
                      altId: "PK",
                      name: "Pakistan",
                      displayCode: "PK",
                      entityId: "29475277",
                    },
                  },
                  marketingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  operatingCarrier: {
                    id: -31963,
                    altId: "PK",
                    name: "PIA",
                    displayCode: "PK",
                  },
                  dayChange: 0,
                  goodToKnowItems: [],
                  amenityInfo: {
                    transportType: "TRANSPORT_TYPE_PLANE",
                    transportDescription: "A320 (narrowbody)",
                    layout: "3-3 seat layout",
                    seatPitch: '30" seat pitch',
                    meals: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Meal provided",
                    },
                    wifi: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No Wi-Fi",
                    },
                    entertainment: {
                      assessment: "ASSESSMENT_INCLUDED",
                      description: "Streaming entertainment",
                    },
                    power: {
                      assessment: "ASSESSMENT_UNAVAILABLE",
                      description: "No power outlet",
                    },
                  },
                },
              ],
              transferProtection: "TRANSFER_PROTECTION_UNSPECIFIED",
              dealMessageKey: "",
              fareFamily: "",
              segmentIds: ["11182-12569-2511260410-2511260810--31963"],
            },
          ],
          updateStatus: "UPDATE_STATUS_CURRENT",
          unpricedType: "UNPRICED_TYPE_PARTNER_NOT_SELECTED",
          mashup: false,
          upgradeOption: false,
          fareType: "FARE_TYPE_BASE_FARE",
        },
      ],
      pricingOptionIdsByAttribute: [],
      token:
        "H4sIAAAAAAAA_-MK4PLj4uLisDQ1Mzc2NTAT4ubiNDSyMDMztzQ2kuLmeMkvwC0hpcCiwaUE53BocGmx6RobWpoZG0FpK2YjYxMHRi8mDkYAfz5AbFIAAAA=",
      sponsoredPricingOptions: [],
    },
    pollingCompleted: false,
    bookingSessionId: "32fd7e83-cca7-4be3-af88-815d5ecd9f1b",
    frenchMarketData: null,
    itineraryLegacyInfo: {
      itineraryId: "11182-2511260410--31963-0-12569-2511260810",
      transferRequired: false,
      transferProtectionDetails: null,
      destinationImage: "",
      carrierLogos: {
        "-31963":
          "https://content.skyscnr.com/90094684365e61f5c05f1417bbcf6c67/ai-template-pia-thumb-1-xxxhdpi.png",
      },
      agentBaggagePolicy: {},
    },
    legacyPlaces: [],
  });
  const [error, setError] = useState(null);
  const { sessionId, id, selected, fromId, toId, departdate, returndate } =
    useParams();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    console.log("test");
    setIsModalOpen(false);
  });
const convertToDateString = (dateObj) => {
  if (!dateObj) return new Date().toISOString();
  return new Date(
    dateObj.year,
    dateObj.month - 1,
    dateObj.day,
    dateObj.hour || 0,
    dateObj.minute || 0
  ).toISOString();
};
  const FetchFlightDetails = async () => {
    // Validate parameters
    if (!id || !sessionId) {
      console.error("Missing required parameters:", { id, sessionId });
      setError("Missing flight information");
      return;
    }

    console.log("Fetching flight details with:", {
      itineraryId: id,
      sessionId: sessionId,
      fromId,
      toId,
      departdate,
      returndate,
      selected,
    });

    // Build flights array based on trip type
    const flights = [];

    if (
      selected === "round-trip" &&
      fromId &&
      toId &&
      departdate &&
      returndate
    ) {
      flights.push({
        originIata: fromId,
        destinationIata: toId,
        departDate: departdate,
      });
      flights.push({
        originIata: toId,
        destinationIata: fromId,
        departDate: returndate,
      });
    } else if (selected === "one-way" && fromId && toId && departdate) {
      flights.push({
        originIata: fromId,
        destinationIata: toId,
        departDate: departdate,
      });
    } else {
      console.error("Missing flight route parameters");
      setError("Missing flight route information");
      return;
    }

    const url = "https://blue-scraper.p.rapidapi.com/flights/search-detail";
    const requestBody = {
      itineraryId: id,
      sessionId: sessionId,
      market: "US",
      locale: "en-US",
      currency: "USD",
      adults: 1,
      cabinClass: "economy",
      flights: flights,
    };

    console.log("Request body:", requestBody);

    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_X_RapidAPI_Key2,
        "x-rapidapi-host": "blue-scraper.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("Flight details response status:", response.status);
      console.log("Flight details result:", result);

      if (response.status === 500) {
        console.error("Server error:", result);
        setError(
          "The flight details service is currently unavailable. Please try again later."
        );
        return;
      }

      if (result.status && result.data) {
        setFlightDetails(result.data);
        console.log("Flight details set successfully", flightDetails);
        setError(null);
      } else {
        console.error("Invalid flight details response:", result);
        setError(
          result.message ||
            "Unable to load flight details. The session may have expired."
        );
      }
    } catch (error) {
      console.error("Error fetching flight details:", error);
      setError("Network error. Please check your connection and try again.");
    }
  };

  useEffect(() => {
    console.log("Parameters:", {
      id,
      sessionId,
      selected,
      fromId,
      toId,
      departdate,
      returndate,
    });
    if (id && sessionId) {
      FetchFlightDetails();
    }
  }, [id, sessionId]);

  function formatDuration(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h${minutes}m`;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Array of day names
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Array of month names
    const monthsOfYear = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${dayOfWeek}, ${month} ${day}, ${year}`;
  };

  // Show error state
  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-red-500 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Unable to Load Flight Details
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Go Back
          </button>
          <button
            onClick={() => {
              setError(null);
              FetchFlightDetails();
            }}
            className="ml-3 bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

if (flightDetails) {
  return (
    <div className="bg-gray-100 text-gray-700">
      <header className="bg-gray-900 text-white p-4">
        <div className=" mx-auto flex justify-center items-center h-[180px]">
          <div className="text-center">
            <h1 className="text-2xl">
              {flightDetails?.itinerary?.legs?.[0]?.destination?.city?.name ||
                flightDetails?.itinerary?.legs?.[0]?.destination?.airport
                  ?.name ||
                "Destination"}
            </h1>
            <p>
              1 adult • {selected === "round-trip" ? "Round trip" : "One way"} •
              Economy class
            </p>
          </div>
        </div>
      </header>

      <div className="flex flex-col 1md:flex-row justify-center items-center 1md:items-start lg:mr-20 1md:divide-x-[1px] divide-gray-300 ">
        <div className="p-4 w-full 1md:w-[600px] ">
          <h2 className="mb-2 text-lg font-semibold">Book your ticket</h2>
          <ul className="">
            {flightDetails?.itinerary?.pricingOptions &&
            flightDetails.itinerary.pricingOptions.length > 0 ? (
              flightDetails.itinerary.pricingOptions
                .slice(0, 6)
                .map((option, index) => (
                  <li
                    key={option?.id || index}
                    className="flex justify-between items-center mb-4 p-2 border"
                  >
                    <div className="space-y-2">
                      <p className="font-semibold">
                        {option?.pricingItems?.[0]?.agent?.name ||
                          "Booking Agent"}
                      </p>

                      <div className="flex space-x-2">
                        <p className="flex">
                          {Array(
                            Math.round(
                              option?.pricingItems?.[0]?.agent?.rating?.value ||
                                0
                            )
                          )
                            .fill(0)
                            .map((_, idx) => (
                              <svg
                                key={idx}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                height="20"
                                width="20"
                              >
                                <path
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  fill="orange"
                                ></path>
                              </svg>
                            ))}
                        </p>
                        <p className="text-gray-500 text-[14px] ">
                          {option?.pricingItems?.[0]?.agent?.rating?.count || 0}{" "}
                          reviews
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-5">
                      <p className="font-bold text-lg mt-1">
                        $
                        {(parseInt(option?.price?.amount || 0) / 100).toFixed(
                          2
                        )}
                      </p>
                      <button
                        className="bg-gray-900 text-white p-2 px-4 rounded-md font-semibold"
                        onClick={() => {
                          setIsModalOpen(true);
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </li>
                ))
            ) : (
              <li className="text-gray-500 p-4 border">
                No pricing options available
              </li>
            )}
          </ul>
        </div>
        <div className="lg:ml-8 w-full lg:w-fit">
          <h2 className="mb-2 font-bold text-lg ml-8 mt-2">Flight details</h2>
          <div className="p-4 border-l bg-white rounded-lg 1md:ml-8  w-full 1md:w-[400px] lg:w-[463px]">
            <div>
              <p className="font-bold">
                Departure:
                <span className="font-normal pl-1">
                  {formatDate(
                    convertToDateString(
                      flightDetails?.itinerary?.legs?.[0]?.departure
                    )
                  )}
                </span>
              </p>
              <div className="flex flex-row bg-white py-3">
                <div className="flex flex-row  ">
                  <img
                    className="h-[30px] w-[60px] "
                    src={
                      flightDetails?.itinerary?.legs?.[0]?.segments?.[0]
                        ?.operatingCarrier?.logo ||
                      flightDetails?.itinerary?.legs?.[0]?.segments?.[0]
                        ?.marketingCarrier?.logo ||
                      `https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg`
                    }
                    alt="Airline logo"
                    onError={(e) => {
                      e.target.src =
                        "https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg";
                    }}
                  />
                </div>
                <div className="pl-6 pr-2">
                  <div className="text-lg font-semibold">
                    {new Date(
                      convertToDateString(
                        flightDetails?.itinerary?.legs?.[0]?.departure
                      )
                    ).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>
                  <div>
                    {flightDetails?.itinerary?.legs?.[0]?.origin?.airport
                      ?.displayCode ||
                      flightDetails?.itinerary?.legs?.[0]?.origin
                        ?.displayCode ||
                      ""}
                  </div>
                </div>

                <div className="flex flex-row ">
                  <div className="flex flex-col">
                    <div className="flex flex-row text-[12px] justify-center ">
                      {formatDuration(
                        flightDetails?.itinerary?.legs?.[0]?.durationMinutes ||
                          0
                      )}
                    </div>
                    <div className="flex flex-row">
                      <div className="w-2 h-2 mt-[9px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                            fill="gray"
                          />
                        </svg>
                      </div>
                      -----
                      <div className="text-red-400 text-sm bg-gray-200 rounded px-1">
                        {flightDetails?.itinerary?.legs?.[0]?.stopCount || 0}{" "}
                        {flightDetails?.itinerary?.legs?.[0]?.stopCount === 1
                          ? "stop"
                          : "stops"}
                      </div>
                      -----
                      <div className="w-2 h-2 mt-[9px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                            fill="gray"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    viewBox="0 0 12 12"
                    className="h-5 w-5 mt-[20px]"
                  >
                    <path
                      fill="#898294"
                      d="M3.922 12h.499a.52.52 0 0 0 .444-.247L7.949 6.8l3.233-.019A.8.8 0 0 0 12 6a.8.8 0 0 0-.818-.781L7.949 5.2 4.866.246A.525.525 0 0 0 4.421 0h-.499a.523.523 0 0 0-.489.71L5.149 5.2H2.296l-.664-1.33a.523.523 0 0 0-.436-.288L0 3.509 1.097 6 0 8.491l1.196-.073a.523.523 0 0 0 .436-.288l.664-1.33h2.853l-1.716 4.49a.523.523 0 0 0 .489.71"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col pl-3">
                  <div className=" text-lg font-semibold">
                    {new Date(
                      convertToDateString(
                        flightDetails?.itinerary?.legs?.[0]?.arrival
                      )
                    ).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>
                  <div>
                    {flightDetails?.itinerary?.legs?.[0]?.destination?.airport
                      ?.displayCode ||
                      flightDetails?.itinerary?.legs?.[0]?.destination
                        ?.displayCode ||
                      ""}
                  </div>
                </div>
              </div>
              <div className="border p-2 mb-2 flex flex-col space-y-6">
                {flightDetails?.itinerary?.legs?.[0]?.segments?.map(
                  (segment, index) => {
                    return (
                      <React.Fragment key={segment?.id || index}>
                        <div className="flex flex-row items-start ">
                          <p className="text-gray-500 pt-14 text-sm ml-5">
                            {formatDuration(segment?.durationMinutes || 0)}
                          </p>
                          <div className="flex flex-col items-center mt-0.5">
                            <img
                              src={
                                segment?.operatingCarrier?.logo ||
                                segment?.marketingCarrier?.logo ||
                                "https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg"
                              }
                              alt=""
                              className="h-6 w-6"
                              onError={(e) => {
                                e.target.src =
                                  "https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg";
                              }}
                            />

                            <div className="relative ">
                              <div className="w-2 h-2 mt-[20px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                                    fill="gray"
                                  ></path>
                                </svg>
                              </div>
                              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-7 bg-gray-300"></div>
                              <div className="w-2 h-2 mt-7">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                                    fill="gray"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-3 ">
                            <p className="font-bold pl-3">
                              {segment?.operatingCarrier?.name ||
                                segment?.marketingCarrier?.name}{" "}
                              {segment?.flightNumber || ""}
                            </p>
                            <p className="pl-3">
                              {new Date(
                                convertToDateString(segment?.departure)
                              ).toLocaleTimeString([], {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                              })}{" "}
                              {segment?.origin?.airport?.displayCode ||
                                segment?.origin?.displayCode}{" "}
                              {segment?.origin?.city?.name ||
                                segment?.origin?.name}
                            </p>
                            <p className="pl-3">
                              {new Date(
                                convertToDateString(segment?.arrival)
                              ).toLocaleTimeString([], {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                              })}{" "}
                              {segment?.destination?.airport?.displayCode ||
                                segment?.destination?.displayCode}{" "}
                              {segment?.destination?.city?.name ||
                                segment?.destination?.name}
                            </p>
                          </div>
                        </div>
                        {index <
                          (flightDetails?.itinerary?.legs?.[0]?.segments
                            ?.length || 0) -
                            1 && (
                          <div className=" bg-red-100 px-5 py-2 rounded-md text-[#e70866] font-semibold text-center">
                            Layover
                            <span className="pl-7 ">Connect in airport</span>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  }
                ) || (
                  <p className="text-gray-500">No segment details available</p>
                )}
                <div className="flex text-[13px]">
                  <p>
                    <span className="font-bold text-gray-800 pr-1">
                      Arrival Time:
                    </span>
                    {formatDate(
                      convertToDateString(
                        flightDetails?.itinerary?.legs?.[0]?.arrival
                      )
                    )}
                  </p>
                  <p>
                    <span className="font-bold text-gray-800 pl-3 pr-1">
                      Journey duration:
                    </span>
                    {formatDuration(
                      flightDetails?.itinerary?.legs?.[0]?.durationMinutes || 0
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {flightDetails?.itinerary?.legs?.[1] ? (
            <ReturnFlightDetails flightDetails={flightDetails} />
          ) : (
            ""
          )}
          <CompleteYourTrip
            destination={
              flightDetails?.itinerary?.legs?.[0]?.destination?.city?.name ||
              flightDetails?.itinerary?.legs?.[0]?.destination?.airport?.name ||
              "your destination"
            }
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-2">
          <div
            className="bg-white p-6 pb-20 rounded-lg relative w-[700px]"
            ref={modalRef}
          >
            <button
              className="absolute top-3 right-3 text-gray-400"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex">
              <img src={warning} alt="" className="h-11 w-11" />
              <div className="pl-3 space-y-2">
                <p className="font-semibold text-xl">Feature Disabled Notice</p>
                <p className="text-wrap text-gray-700">
                  Normally, it would redirect you to the booking website.
                  However, as this project is for personal demonstration this
                  functionality is disabled.
                </p>
              </div>
            </div>
            <button
              className="mt-4 bg-gray-900 text-white p-2 px-4 rounded-md font-semibold absolute right-5"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} else {
  return (
    <div className="flex mt-12 justify-center h-[92vh]">
      <img src={loading} alt="" className="h-12" />
    </div>
  );
}
};

export default FlightDetails;
