function formatAsSecondsAsString(seconds) {
  if (seconds <= 60) {
    if (seconds === 1) {
      return `${seconds} second`;
    } else {
      return `${seconds} seconds`;
    }
  } else {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (remainingSeconds === 0) {
      return `${minutes} minute`;
    } else if (remainingSeconds === 1) {
      return `${minutes} minute ${remainingSeconds} second`;
    } else {
      return `${minutes} minute ${remainingSeconds} seconds`;
    }
  }
}
console.log(formatAsSecondsAsString(30)); // "30 seconds"
console.log(formatAsSecondsAsString(60)); // "1 minute"
console.log(formatAsSecondsAsString(70)); // "1 minute 10 seconds"
console.log(formatAsSecondsAsString(120)); //  "2 minutes"
/*
function formatAsSecondsAsString(seconds) {
  const formatted = (num) => String(num).padStart(2, "0");

  // num => ifadesi, bir arrow function tanımlar. Yani, bu bir parametre alır (num).
  // String(num) ifadesi, num parametresini alıp bir stringe çevirir. Yani, herhangi bir sayıyı alır ve bunu bir dizeye dönüştürür.
  // padStart(2, '0') ifadesi, bu dizeyi en az 2 karakter uzunluğuna getirir. Eğer dize 2 karakterden kısa ise, başına '0' karakterleri ekler. formatted(5) çağrısı yapıldığında, sonuç '05' olacaktır.formatted(12) çağrısı yapıldığında, sonuç '12' olacaktır.

  const h = formatted(Math.floor(seconds / 3600));
  const m = formatted(Math.floor((seconds % 3600) / 60));
  const s = formatted(seconds % 60);
  return `${h}:${m}:${s}`;
} */
