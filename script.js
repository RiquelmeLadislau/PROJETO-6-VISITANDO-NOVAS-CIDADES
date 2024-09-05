let turist = prompt('Qual seu nome turista?')
var visit = prompt('Você visitou alguma cidade? (s/n)')
let cities = []
let numberOfCities = 0


while(question == 's'){
  city[numberOfCities] = prompt('Qual o nome da cidade visitada?')
  numberOfCities += 1
  
  question = prompt('Você visitou alguma outra cidade? (ex:s/n)')

}
alert(`Turista: ${turist}
Quantidade de cidades visitadas: ${numberOfCities}
Cidades visitadas:${cities}`)