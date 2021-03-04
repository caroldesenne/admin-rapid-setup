import React, { FC, useState } from 'react'
import { Dropdown } from 'vtex.styleguide'


const regionOptions = [
  { value: 'europe', label: 'Europe' },
  { value: 'northAmerica', label: 'North America' },
  { value: 'southAmerica', label: 'South America' },
  { value: 'asia', label: 'Asia' },
  { value: 'Africa', label: 'Africa' }
]

const languageOptions = [
  { value: 'french', label: 'France (fr-FR)' },
  { value: 'english', label: 'United States (en-US)' },
  { value: 'portuguese', label: 'Portuguese (pt-BR)' },
  { value: 'spanish', label: 'Spain (es-ES)' }
]

const currencyOptions = [
  {value: "AED",label: "United Arab Emirates Dirham"},
  {value: "AFN",label: "Afghan Afghani"},
  {value: "ALL",label: "Albanian Lek"},
  {value: "AMD",label: "Armenian Dram"},
  {value: "ANG",label: "Netherlands Antillean Guilder"},
  {value: "AOA",label: "Angolan Kwanza"},
  {value: "ARS",label: "Argentine Peso"},
  {value: "AUD",label: "Australian Dollar"},
  {value: "AWG",label: "Aruban Florin"},
  {value: "AZN",label: "Azerbaijani Manat"},
  {value: "BAM",label: "Bosnia-Herzegovina Convertible Mark"},
  {value: "BBD",label: "Barbadian Dollar"},
  {value: "BDT",label: "Bangladeshi Taka"},
  {value: "BGN",label: "Bulgarian Lev"},
  {value: "BHD",label: "Bahraini Dinar"},
  {value: "BIF",label: "Burundian Franc"},
  {value: "BMD",label: "Bermudan Dollar"},
  {value: "BND",label: "Brunei Dollar"},
  {value: "BOB",label: "Bolivian Boliviano"},
  {value: "BRL",label: "Brazilian Real"},
  {value: "BSD",label: "Bahamian Dollar"},
  {value: "BTC",label: "Bitcoin"},
  {value: "BTN",label: "Bhutanese Ngultrum"},
  {value: "BWP",label: "Botswanan Pula"},
  {value: "BYN",label: "Belarusian Ruble"},
  {value: "BZD",label: "Belize Dollar"},
  {value: "CAD",label: "Canadian Dollar"},
  {value: "CDF",label: "Congolese Franc"},
  {value: "CHF",label: "Swiss Franc"},
  {value: "CLF",label: "Chilean Unit of Account (UF)"},
  {value: "CLP",label: "Chilean Peso"},
  {value: "CNH",label: "Chinese Yuan (Offshore)"},
  {value: "CNY",label: "Chinese Yuan"},
  {value: "COP",label: "Colombian Peso"},
  {value: "CRC",label: "Costa Rican Colón"},
  {value: "CUC",label: "Cuban Convertible Peso"},
  {value: "CUP",label: "Cuban Peso"},
  {value: "CVE",label: "Cape Verdean Escudo"},
  {value: "CZK",label: "Czech Republic Koruna"},
  {value: "DJF",label: "Djiboutian Franc"},
  {value: "DKK",label: "Danish Krone"},
  {value: "DOP",label: "Dominican Peso"},
  {value: "DZD",label: "Algerian Dinar"},
  {value: "EGP",label: "Egyptian Pound"},
  {value: "ERN",label: "Eritrean Nakfa"},
  {value: "ETB",label: "Ethiopian Birr"},
  {value: "EUR",label: "Euro"},
  {value: "FJD",label: "Fijian Dollar"},
  {value: "FKP",label: "Falkland Islands Pound"},
  {value: "GBP",label: "British Pound Sterling"},
  {value: "GEL",label: "Georgian Lari"},
  {value: "GGP",label: "Guernsey Pound"},
  {value: "GHS",label: "Ghanaian Cedi"},
  {value: "GIP",label: "Gibraltar Pound"},
  {value: "GMD",label: "Gambian Dalasi"},
  {value: "GNF",label: "Guinean Franc"},
  {value: "GTQ",label: "Guatemalan Quetzal"},
  {value: "GYD",label: "Guyanaese Dollar"},
  {value: "HKD",label: "Hong Kong Dollar"},
  {value: "HNL",label: "Honduran Lempira"},
  {value: "HRK",label: "Croatian Kuna"},
  {value: "HTG",label: "Haitian Gourde"},
  {value: "HUF",label: "Hungarian Forint"},
  {value: "IDR",label: "Indonesian Rupiah"},
  {value: "ILS",label: "Israeli New Sheqel"},
  {value: "IMP",label: "Manx pound"},
  {value: "INR",label: "Indian Rupee"},
  {value: "IQD",label: "Iraqi Dinar"},
  {value: "IRR",label: "Iranian Rial"},
  {value: "ISK",label: "Icelandic Króna"},
  {value: "JEP",label: "Jersey Pound"},
  {value: "JMD",label: "Jamaican Dollar"},
  {value: "JOD",label: "Jordanian Dinar"},
  {value: "JPY",label: "Japanese Yen"},
  {value: "KES",label: "Kenyan Shilling"},
  {value: "KGS",label: "Kyrgystani Som"},
  {value: "KHR",label: "Cambodian Riel"},
  {value: "KMF",label: "Comorian Franc"},
  {value: "KPW",label: "North Korean Won"},
  {value: "KRW",label: "South Korean Won"},
  {value: "KWD",label: "Kuwaiti Dinar"},
  {value: "KYD",label: "Cayman Islands Dollar"},
  {value: "KZT",label: "Kazakhstani Tenge"},
  {value: "LAK",label: "Laotian Kip"},
  {value: "LBP",label: "Lebanese Pound"},
  {value: "LKR",label: "Sri Lankan Rupee"},
  {value: "LRD",label: "Liberian Dollar"},
  {value: "LSL",label: "Lesotho Loti"},
  {value: "LYD",label: "Libyan Dinar"},
  {value: "MAD",label: "Moroccan Dirham"},
  {value: "MDL",label: "Moldovan Leu"},
  {value: "MGA",label: "Malagasy Ariary"},
  {value: "MKD",label: "Macedonian Denar"},
  {value: "MMK",label: "Myanma Kyat"},
  {value: "MNT",label: "Mongolian Tugrik"},
  {value: "MOP",label: "Macanese Pataca"},
  {value: "MRO",label: "Mauritanian Ouguiya (pre-2018)"},
  {value: "MRU",label: "Mauritanian Ouguiya"},
  {value: "MUR",label: "Mauritian Rupee"},
  {value: "MVR",label: "Maldivian Rufiyaa"},
  {value: "MWK",label: "Malawian Kwacha"},
  {value: "MXN",label: "Mexican Peso"},
  {value: "MYR",label: "Malaysian Ringgit"},
  {value: "MZN",label: "Mozambican Metical"},
  {value: "NAD",label: "Namibian Dollar"},
  {value: "NGN",label: "Nigerian Naira"},
  {value: "NIO",label: "Nicaraguan Córdoba"},
  {value: "NOK",label: "Norwegian Krone"},
  {value: "NPR",label: "Nepalese Rupee"},
  {value: "NZD",label: "New Zealand Dollar"},
  {value: "OMR",label: "Omani Rial"},
  {value: "PAB",label: "Panamanian Balboa"},
  {value: "PEN",label: "Peruvian Nuevo Sol"},
  {value: "PGK",label: "Papua New Guinean Kina"},
  {value: "PHP",label: "Philippine Peso"},
  {value: "PKR",label: "Pakistani Rupee"},
  {value: "PLN",label: "Polish Zloty"},
  {value: "PYG",label: "Paraguayan Guarani"},
  {value: "QAR",label: "Qatari Rial"},
  {value: "RON",label: "Romanian Leu"},
  {value: "RSD",label: "Serbian Dinar"},
  {value: "RUB",label: "Russian Ruble"},
  {value: "RWF",label: "Rwandan Franc"},
  {value: "SAR",label: "Saudi Riyal"},
  {value: "SBD",label: "Solomon Islands Dollar"},
  {value: "SCR",label: "Seychellois Rupee"},
  {value: "SDG",label: "Sudanese Pound"},
  {value: "SEK",label: "Swedish Krona"},
  {value: "SGD",label: "Singapore Dollar"},
  {value: "SHP",label: "Saint Helena Pound"},
  {value: "SLL",label: "Sierra Leonean Leone"},
  {value: "SOS",label: "Somali Shilling"},
  {value: "SRD",label: "Surinamese Dollar"},
  {value: "SSP",label: "South Sudanese Pound"},
  {value: "STD",label: "São Tomé and Príncipe Dobra (pre-2018)"},
  {value: "STN",label: "São Tomé and Príncipe Dobra"},
  {value: "SVC",label: "Salvadoran Colón"},
  {value: "SYP",label: "Syrian Pound"},
  {value: "SZL",label: "Swazi Lilangeni"},
  {value: "THB",label: "Thai Baht"},
  {value: "TJS",label: "Tajikistani Somoni"},
  {value: "TMT",label: "Turkmenistani Manat"},
  {value: "TND",label: "Tunisian Dinar"},
  {value: "TOP",label: "Tongan Pa'anga"},
  {value: "TRY",label: "Turkish Lira"},
  {value: "TTD",label: "Trinidad and Tobago Dollar"},
  {value: "TWD",label: "New Taiwan Dollar"},
  {value: "TZS",label: "Tanzanian Shilling"},
  {value: "UAH",label: "Ukrainian Hryvnia"},
  {value: "UGX",label: "Ugandan Shilling"},
  {value: "USD",label: "United States Dollar"},
  {value: "UYU",label: "Uruguayan Peso"},
  {value: "UZS",label: "Uzbekistan Som"},
  {value: "VEF",label: "Venezuelan Bolívar Fuerte (Old)"},
  {value: "VES",label: "Venezuelan Bolívar Soberano"},
  {value: "VND",label: "Vietnamese Dong"},
  {value: "VUV",label: "Vanuatu Vatu"},
  {value: "WST",label: "Samoan Tala"},
  {value: "XAF",label: "CFA Franc BEAC"},
  {value: "XAG",label: "Silver Ounce"},
  {value: "XAU",label: "Gold Ounce"},
  {value: "XCD",label: "East Caribbean Dollar"},
  {value: "XDR",label: "Special Drawing Rights"},
  {value: "XOF",label: "CFA Franc BCEAO"},
  {value: "XPD",label: "Palladium Ounce"},
  {value: "XPF",label: "CFP Franc"},
  {value: "XPT",label: "Platinum Ounce"},
  {value: "YER",label: "Yemeni Rial"},
  {value: "ZAR",label: "South African Rand"},
  {value: "ZMW",label: "Zambian Kwacha"},
  {value: "ZWL",label: "Zimbabwean Dollar"}
]

const timezoneOptions = [
  {
    "value": "-12",
    "label": "(GMT -12:00) Eniwetok, Kwajalein"
  },
  {
    "value": "-11",
    "label": "(GMT -11:00) Midway Island, Samoa"
  },
  {
    "value": "-10",
    "label": "(GMT -10:00) Hawaii"
  },
  {
    "value": "-9",
    "label": "(GMT -9:00) Alaska"
  },
  {
    "value": "-8",
    "label": "(GMT -8:00) Pacific Time (US & Canada)"
  },
]

const CountryAndLanguage: FC = () => {

  const [selectedRegion, setselectedRegion] = useState<string>('')

  const handleChangeRegion = (_: any, value: string) => {
    setselectedRegion(value)
  }

  const [selectedLanguage, setselectedLanguage] = useState<string>('')

  const handleChangeLanguage = (_: any, value: string) => {
    setselectedLanguage(value)
  }

  const [selectedTimezone, setselectedTimezone] = useState<string>('')

  const handleChangeTimezone = (_: any, value: any) => {
    setselectedTimezone(value)
  }

  const [selectedCurrency, setselectedCurrency] = useState<string>('')

  const handleChangeCurrency = (_: any, value: string) => {
    setselectedCurrency(value)
  }

  return (
      <div>
        <Dropdown
          options={regionOptions}
          value={selectedRegion}
          onChange={handleChangeRegion}
          placeholder="Select your region"
        />

        <Dropdown
          options={languageOptions}
          value={selectedLanguage}
          onChange={handleChangeLanguage}
          placeholder="Select your language"
        />

        <Dropdown
          options={timezoneOptions}
          value={selectedTimezone}
          onChange={handleChangeTimezone}
          placeholder="Select your Time Zone"
        />

        <Dropdown
          options={currencyOptions}
          value={selectedCurrency}
          onChange={handleChangeCurrency}
          placeholder="Select your Currency"
        />
      </div>
  )
}

export default CountryAndLanguage
