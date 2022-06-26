module.exports = function toReadable(number) {
    return toReadableStr(number).toLowerCase();
};
function switchItUp(num) {
    switch (num) {
      case 0: {
        return 'Zero';

      }
      case 1: {
        return 'One';

      }
      case 2: {
        return 'Two';

      }
      case 3: {
        return 'Three';

      }
      case 4: {
        return 'Four';

      }
      case 5: {
        return 'Five';

      }
      case 6: {
        return 'Six';

      }
      case 7: {
        return 'Seven';

      }
      case 8: {
        return 'Eight';

      }
      case 9: {
        return 'Nine';

      }
    }
  }

  function toSecondRow(num) {
    switch (num) {
      case 10: {
        return 'Ten';

      }
      case 11: {
        return 'Eleven';

      }
      case 12: {
        return 'Twelve';

      }
      case 13: {
        return 'Thirteen';

      }
      case 14: {
        return 'Fourteen';

      }
      case 15: {
        return 'Fifteen';

      }
      case 16: {
        return 'Sixteen';

      }
      case 17: {
        return 'Seventeen';

      }
      case 18: {
        return 'Eighteen';

      }
      case 19: {
        return 'Nineteen';

      }
    }
  }

  function toDecRow(num) {
    switch (num) {
      case 10: {
        return 'Ten';
      }
      case 20: {
        return 'Twenty';
      }
      case 30: {
        return 'Thirty';

      }
      case 40: {
        return 'Forty';

      }
      case 50: {
        return 'Fifty';

      }
      case 60: {
        return 'Sixty';

      }
      case 70: {
        return 'Seventy';

      }
      case 80: {
        return 'Eighty';

      }
      case 90: {
        return 'Ninety';

      }
    }
  }

  function toHandRow(num) {
    switch (num) {
      case 100: {
        return 'one hundred';

      }
      case 200: {
        return 'Two hundred';

      }
      case 300: {
        return 'Three hundred';

      }
      case 400: {
        return 'Four hundred';

      }
      case 500: {
        return 'Five hundred';

      }
      case 600: {
        return 'Six hundred';

      }
      case 700: {
        return 'Seven hundred';

      }
      case 800: {
        return 'Eight hundred';

      }
      case 900: {
        return 'Nine hundred';

      }
    }
  }

  function toReadableStr(number) {
    if (number <= 9) {
      return switchItUp(number);
    } else {
      if (number <= 19) {
        return toSecondRow(number);
      } else {
        if (number <= 99) {
          if (number % 10 == 0) {
            return toDecRow(number);
          }
          return toDecRow(Math.floor(number / 10) * 10) + ' ' + switchItUp(number % 10);
        } else {
          if (number % 100 == 0) {
            return toHandRow(number);
          }
          if (number % 10 == 0) {
            return toHandRow(Math.floor(number / 100) * 100) + ' ' + toDecRow(number - Math.floor(number / 100) * 100);
          } else {
            let lem = number - Math.floor(number / 100) * 100;
             if (lem <= 9) {return toHandRow(Math.floor(number / 100) * 100) + ' '+ switchItUp(lem);}
             else if (lem <= 19) {return toHandRow(Math.floor(number / 100) * 100) + ' '+  toSecondRow(lem);}
             else
              return toHandRow(Math.floor(number / 100) * 100) + ' ' + toDecRow(number - Math.floor(number / 100) *
                100 - number % 10) + ' ' + switchItUp(number % 10);
          }

        }
      }
    }
  }
