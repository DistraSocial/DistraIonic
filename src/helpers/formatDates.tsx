export const formatPostedTime = (date: Date) => {
  var oneYear = 365 * 24 * 60 * 60 * 1000;
  var twoDays = 48 * 60 * 60 * 1000;
  var oneDay = 24 * 60 * 60 * 1000;
  var oneHour = 60 * 60 * 1000;
  var threeMinutes = (60 * 60 * 1000) * 3;

  var timeDiff = (Number(new Date()) - Number(date))

  if (timeDiff > oneYear) {
    return date.toLocaleDateString('en-us', { month:"short", day: "2-digit", year: 'numeric', hour: 'numeric', minute: 'numeric'})
  }
  if (timeDiff > twoDays) {
    return date.toLocaleDateString('en-us', { month:"short", day: "2-digit", hour: 'numeric', minute: 'numeric'})
  }
  else if (timeDiff > oneDay) {
    return 'Yesterday , ' + date.toLocaleTimeString('en-us', { hour: 'numeric', minute: 'numeric'})
  }
  else if (timeDiff > oneHour) {
    return new Date(timeDiff).getHours() + ' Hours Ago'
  }
  else if (timeDiff > threeMinutes) {
    return new Date(timeDiff).getMinutes() + ' Min Ago'
  }
  else if (timeDiff < threeMinutes) {
    return 'Just Now'
  }
  else return 'FAILURE TO READ DATE'
  //for the first 3 minutes...display as 'now'
  //Until first hour display 'X min ago'
  //After an hour display 'X hours ago'
  //After first day display 'Yesterday, XX:XX xx'
  //After Second day display 'Month Day, XX:XX xx'
  //After First Year display Month Day, Year, XX:XX xx

}