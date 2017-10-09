var string = "?q=hex"

function searchFilter(string) {
  const firstString = string[0] + string[1] + string[2]
  if( firstString === '?q=')
    return string.split('').slice(3).join('')
}

searchFilter(string);

console.log(Boolean(searchFilter(string)));