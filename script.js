var searchBtn = document.getElementById('search');
var display = 0;

function hideShow()
{
  if(display == 1)
  {
    searchBtn.style.display = 'none';
    display = 0;
  }
  else
  {
    searchBtn.style.display = 'block';
    display = 1;
  }
}