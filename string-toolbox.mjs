// string toolbox.mjs

//capitalise
export function capitalise(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

//truncate
export function truncate(string, length) {
  if (string.length <= length) return string;
  {
    return string.slice(0, length) + "...";
  }

  //camel case
  export function camelCase(string) {
    return string
      .split(" ")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }

  //reverse (string)
  export function reverse(string) {
    return string.split("").reverse().join("");
  }
}

//isPalindrome
export function isPalindrome(string) {
  const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedString === cleanedString.split("").reverse().join("");
}
