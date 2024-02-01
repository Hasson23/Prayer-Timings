let cities = [
    "Banaadir","Bari","Bay","Galguduud","Gedo",
    "Jubbada Dhexe","Jubbada Hoose","Mudug","Nugaal","Sanaag","Bakool","Awdal",
    "Shabeellaha Dhexe","Shabeellaha Hoose","Sool","Togdheer","Woqooyi Galbeed"
]

for(let city of cities){
    const content = `
    <option>${city}</option>
    `

    document.getElementById("citySelect").innerHTML += content
}

document.getElementById("citySelect").addEventListener("change", function(){
    document.getElementById("city").innerHTML = this.value
    if(this.value == "Banaadir"){
        getPray("Banaadir")
    } else if(this.value == "Bari"){
        getPray("Bari")
    } else if(this.value == "Woqooyi Galbeed"){
        getPray("Woqooyi Galbeed")
    } else if(this.value == "Bay"){
        getPray("Bay")
    } else if(this.value == "Galguduud"){
        getPray("Galguduud")
    } else if(this.value == "Gedo"){
        getPray("Gedo")
    } else if(this.value == "Jubbada Dhexe"){
        getPray("Jubbada Dhexe")
    } else if(this.value == "Jubbada Hoose"){
        getPray("Jubbada Hoose")
    } else if(this.value == "Mudug"){
        getPray("Mudug")
    } else if(this.value == "Sanaag"){
        getPray("Sanaag")
    } else if(this.value == "Nugaal"){
        getPray("Nugaal")
    } else if(this.value == "Bakool"){
        getPray("Bakool")
    } else if(this.value == "Awdal"){
        getPray("Awdal")
    } else if(this.value == "Shabeellaha Dhexe"){
        getPray("Shabeellaha Dhexe")
    } else if(this.value == "Shabeellaha Hoose"){
        getPray("Shabeellaha Hoose")
    } else if(this.value == "Sool"){
        getPray("Sool")
    } else if(this.value == "Togdheer"){
        getPray("Togdheer")
    } else if(this.value == "Woqooyi Galbeed"){
        getPray("Woqooyi Galbeed")
    } 
})

function getPray(cityname){
    let params = {
        country: "SO",
        city: cityname
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
      })
      .then(function (response) {
        console.log(response.data.data.timings.Fajr);
        const timings = response.data.data.timings
        time("fjr", timings.Fajr)
        time("shr", timings.Sunrise)
        time("duh", timings.Dhuhr)
        time("csr", timings.Asr)
        time("mqr", timings.Sunset)
        time("csh", timings.Isha)
    
        const read = response.data.data.date.readable
        const weekDay = response.data.data.date.hijri.weekday.en
    
        document.getElementById("date").innerHTML = read + " " + weekDay
        console.log(read + " " + weekDay)
      })
      .catch(function (error) {
        console.log(error);
      })
}

getPray("Mogadishu")

  function time(id,time){
    document.getElementById(id).innerHTML = time
  }
