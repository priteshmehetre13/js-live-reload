//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

//To replace all matches, use a regular expression with a /g flag (global match):
let text1 = "Please visit Microsoft and Microsoft!";
let newText1 = text.replace(/Microsoft/g, "W3Schools");