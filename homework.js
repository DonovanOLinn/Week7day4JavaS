let getf1data = async (year, round) => {
    console.log(year, round)
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    return response.data
}

let loadf1data = async (year, round) => {
    let data = await getf1data(year, round);
    //let x = document.createElement('p');
    //console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0])
    let my_table = 
    `<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Position</th>
        <th scope="col">Name</th>
        <th scope="col">Nationality</th>
        <th scope="col">Sponsor</th>
        <th scope="col">Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].constructorId}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points}</td>
      </tr>
      <tr>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].constructorId}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points}</td>
      </tr>
      <tr>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position} </td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].constructorId}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points}</td>
      </tr>
      <tr>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].constructorId}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points}</td>
      </tr>
      <tr>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].constructorId}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points}</td>
      </tr>
      <tr>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].constructorId}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points}</td>
      </tr>
      <tr>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].constructorId}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points}</td>
      </tr>
      <tr>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].position}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Constructors[0].constructorId}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].points}</td>
      </tr>
    </tbody>
  </table>`;
    document.getElementById("contentr").insertAdjacentHTML('beforeend', my_table);
    //x.innerHTML = data.year;
    //y.innerHTML = data.round;
    //y.innerHTML = data.round;
    //document.body.append(y);
}
let form = document.getElementById('pform')

form.addEventListener('submit', event => {
    event.preventDefault();
    let driver_data = event.path[0][0].value;
    let driver_data2 = event.path[0][1].value;
    console.log(driver_data + ' hello')
    console.log(driver_data2 + ' hello2')

    loadf1data(driver_data, driver_data2)
})