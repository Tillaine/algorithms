function humanReadable(seconds) {
    let sec = seconds;
    let result = '';
    if (sec >= 3600) {
        const hours = Math.floor(sec / 3600)
        result += paddedNum(hours) + ':'; 
        sec = sec - convertToSec(hours, 'hours');
    } else {
        result += paddedNum(0) + ':';
    }
    if(sec >= 60) {
        const min = Math.floor(sec / 60);
        result += paddedNum(min) + ':'; 
        sec = sec - convertToSec(min, 'min');
    } else {
        result += paddedNum(0) + ':';
    }
    if(sec > 0) {
        result += paddedNum(sec);
    } else {
        result += paddedNum(0);
    }
    return result
  }

  const convertToSec = (amount, type) => {
    return type === 'hours' ? amount * 3600 : amount * 60;  
  }

  const paddedNum = (num) => {
      return num >= 10 ? num.toString() : '0' + num.toString()
  }

  const result = convertToSec(4, 'hours');

  console.log('result', humanReadable(3610));