const $ = require('jQuery');

let numClicks = 0;
const handleClick = () => {
  alert(++numClicks);
}

module.exports = {
  countClicks: () => {
    $(document).on('click', handleClick);
  }
}
