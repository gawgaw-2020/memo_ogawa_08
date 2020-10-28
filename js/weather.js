//APIのコールを関数化
const REQUEST_AJAX = async (city_id) => {

  const URL = `http://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=c19772e1524565f4c314f9e04f1814f8&lang=ja&units=metric`;
  const JSON = await fetch(URL)
      .then(res => {
          return res.json();
      }).catch(error => {
          console.log('APIへのアクセスに失敗しました');
          return null;
      });
  const WEATHER = JSON.weather[0].description;
  const WEATHER_DESCRIPTION = document.getElementById('weather_description');
  WEATHER_DESCRIPTION.textContent = `現在の天気は${WEATHER}です！！`;

}

//プルダウンで選択肢を変更したことをトリガーに、選択された都市の天気を表示する
const SELECT_CITY = document.querySelector('.city');
SELECT_CITY.addEventListener('change', (event) => {

  const CHOSEN_CITY = event.target.value;
  REQUEST_AJAX(CHOSEN_CITY);

});

//デフォルトで千葉の天気を表示する
const CHIBA_ID = 1815022;
REQUEST_AJAX(CHIBA_ID);