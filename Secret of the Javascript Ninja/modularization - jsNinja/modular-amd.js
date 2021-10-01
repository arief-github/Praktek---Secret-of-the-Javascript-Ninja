define('MouseCounterModule', ['jQuery'], $ => {
  let numClicks = 0;
  const handleClick = () => {
    alert(++numClicks)
  };

  return{
    countClicks: () => {
      $(document).on("click", handleClick);
    }
  }
})
