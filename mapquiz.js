document;

function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown( "ten-countdown", 10, 0 );


const albaniaButton = document.getElementById("AL");

const austriaButton = document.getElementById("AT");

const belgiumButton = document.getElementById("BE");

const bulgariaButton = document.getElementById("BG");

const bosniaButton = document.getElementById("BA");

const belarusButton = document.getElementById("BY");

const switzerlandButton = document.getElementById("CH");

const czechiaButton = document.getElementById("CZ");

const germanyButton = document.getElementById("DE");

const denmarkButton = document.getElementById("DK");

const estoniaButton = document.getElementById("EE");

const finlandButton = document.getElementById("FI");

const ukButton = document.getElementById("GB");

const greeceButton = document.getElementById("GR");

const croatiaButton = document.getElementById("HR");

const irelandButton = document.getElementById("IE");

const icelandButton = document.getElementById("IS");

const italyButton = document.getElementById("IT");

const lithuaniaButton = document.getElementById("LT");

const luxembourgButton = document.getElementById("LU");

const latviaButton = document.getElementById("LV");

const moldovaButton = document.getElementById("MD");

const macedoniaButton = document.getElementById("MK");

const montenegroButton = document.getElementById("ME");

const netherlandsButton = document.getElementById("NL");

const norwayButton = document.getElementById("NO");

const polandButton = document.getElementById("PL");

const portugalButton = document.getElementById("PT");

const romaniaButton = document.getElementById("RO");

const serbiaButton = document.getElementById("RS");

const slovakiaButton = document.getElementById("SK");

const sloveniaButton = document.getElementById("SI");

const swedenButton = document.getElementById("SE");

const ukraineButton = document.getElementById("UA");

const franceButton = document.getElementById("FR");

const spainButton = document.getElementById("ES");

const turkeyButton = document.getElementById("TR");

const cyprusButton = document.getElementById("CY");

const hungaryButton = document.getElementById("HU");

const armeniaButton = document.getElementById("AM");

const kosovoButton = document.getElementById("XK");

const georgiaButton = document.getElementById("GE");

const userInput = document.getElementById("guessed-answer");
const userInputError = document.getElementById("guessed-answer-error");
const counterText = document.getElementById("counter");
let counterNumber = 0;
counterText.innerText = `Country Counter ${counterNumber}/43`;

userInput.addEventListener("keyup", (event) => {
  if (countryArray.includes(event.target.value)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    userInputError.innerText = "";

    const selectedCountryCode = countryCodeAndName[event.target.value];
    const countryButton = document.getElementById(selectedCountryCode);
    countryButton.classList.add("valid-country");
    countryButton.style.fill = countryCodeAndColour[selectedCountryCode];
    counterNumber++;
    counterText.innerText = `Country Counter ${counterNumber}/43`;
    userInput.value = "";
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    userInputError.innerText =
      "Countries are a proper Noun, did you capitalise the first letter?";
  }
});

const countryCodeAndName = {
  Albania: "AL",
  Austria: "AT",
  Belgium: "BE",
  Bulgaria: "BG",
  "Bosnia and Herz": "BA",
  Belarus: "BY",
  Switzerland: "CH",
  "Czech Rep": "CZ",
  Germany: "DE",
  Denmark: "DK",
  Estonia: "EE",
  Finland: "FI",
  "United Kingdom": "GB",
  Greece: "GR",
  Croatia: "HR",
  Hungary: "HU",
  Ireland: "IE",
  Iceland: "IS",
  Italy: "IT",
  Lithuania: "LT",
  Luxembourg: "LU",
  Latvia: "LV",
  Moldova: "MD",
  Macedonia: "MK",
  Montenegro: "ME",
  Netherlands: "NL",
  Norway: "NO",
  Poland: "PL",
  Portugal: "PT",
  Romania: "RO",
  Serbia: "RS",
  Slovakia: "SK",
  Slovenia: "SI",
  Sweden: "SE",
  Ukraine: "UA",
  France: "FR",
  Spain: "ES",
  Turkey: "TR",
  Cyprus: "CY",
  Hungary: "HU",
  Armenia: "AM",
  Kosovo: "XK",
  Georgia: "GE",
};
//43 countries in total
const countryCodeAndColour = {
  AL: "#da291c",
  AT: "#EF3340",
  BE: "#FFCD00",
  BG: "#00966E",
  BA: "#EEC900",
  BY: "#00AF66",
  CH: "#DA291C",
  CZ: "#11457E",
  DE: "#000000",
  DK: "#c8102E",
  EE: "#0072CE",
  FI: "#002F6C",
  GB: "#00b140",
  GR: "#001489",
  HR: "#71C5E8",
  HU: "#477050",
  IE: "#FF8200",
  IS: "#02529C",
  IT: "#F4F9FF",
  LT: "#Be3a34",
  LU: "#51adda",
  LV: "#a4343a",
  MD: "#ad7c59",
  MK: "#d6b429",
  ME: "#DE0000",
  NL: "#FF9b00",
  NO: "#BA0C2F",
  PL: "#dc143c",
  PT: "#000000",
  RO: "#CE1126",
  RS: "#ffffff",
  SK: "#0b4ea2",
  SI: "#ffcd00",
  SE: "#fecc02",
  UA: "#FFDD00",
  FR: "#002654",
  ES: "#aa151b",
  TR: "#C8102E",
  CY: "#4e5b31",
  HU: "#477050",
  AM: "#FF9E1B",
  XK: "#D0A650",
  GE: "#DA291C",
};
const countryArray = Object.keys(countryCodeAndName);

const answerForm = document.getElementById("winnerform");
answerForm.addEventListener("submit", (event) => {
    
   
    if (counterNumber !== 43) {

       event.preventDefault();
    }
});





//   document.getElementsByClassName("answer-input");
//   const inputs = [...getElementsByClassName("answer-input")];
//   console.log(inputs);
//   const areValid = inputs.every((input) => input.classList.contains("valid"));