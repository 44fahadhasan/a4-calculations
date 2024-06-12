function calculateMoney(ticketSale) {
  if (!(ticketSale >= 0)) {
    return "Invalid Number";
  }

  const ticketPrice = ticketSale * 120;

  const janitorPrice = 500;

  const staffPrice = 8 * 50;

  const totalExpenditure = janitorPrice + staffPrice;

  const availableMoneyOfBaker = ticketPrice - totalExpenditure;

  return availableMoneyOfBaker;
}

function checkName(name) {
  if (!(typeof name === "string")) {
    return "invalid";
  }

  const char = name.split("");

  const lastCharOfName = char[char.length - 1].toLowerCase();

  if (
    lastCharOfName === "a" ||
    lastCharOfName === "y" ||
    lastCharOfName === "i" ||
    lastCharOfName === "e" ||
    lastCharOfName === "o" ||
    lastCharOfName === "u" ||
    lastCharOfName === "w"
  ) {
    return "Good Name";
  }

  return "Bad Name";
}

function deleteInvalids(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Array";
  }

  const OnlyNumArr = [];

  for (const element of arr) {
    if (typeof element === "number") {
      if (!isNaN(element)) {
        OnlyNumArr.push(element);
      }
    }
  }

  return OnlyNumArr;
}

function password(obj) {
  if (!(typeof obj === "object")) {
    return "invalid";
  } else if (!obj.siteName || !obj.name || !obj.birthYear) {
    return "invalid";
  }

  const birthYearSize = obj.birthYear.toString().length;

  if (birthYearSize < 4 || birthYearSize > 4) {
    return "invalid";
  }

  const siteNameFastChar = obj.siteName.split("").at(0).toUpperCase();

  const siteNameOthersChar = obj.siteName.slice(1);

  const modifySiteName = `${siteNameFastChar}${siteNameOthersChar}`;

  const generatePassword = `${modifySiteName}#${obj.name}@${obj.birthYear}`;

  return generatePassword;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || !(typeof livingCost === "number")) {
    return "invalid input";
  }

  let allMonthSalary = 0;

  let allTxt = 0;

  for (const eachMonthSalary of arr) {
    if (eachMonthSalary >= 3000) {
      allTxt += (eachMonthSalary * 20) / 100;
    }

    allMonthSalary += eachMonthSalary;
  }

  const taxLivingCost = allTxt + livingCost;

  const totalSavings = allMonthSalary - taxLivingCost;

  if (totalSavings >= 0) {
    return totalSavings;
  }

  return "earn more";
}
