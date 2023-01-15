$.ajax({

  type: 'get',
  url: 'https://api.covid19api.com/summary',
  success: function(response)
  {
    console.log(response)

    for(var i=0 ; i<response.Countries.length ; i++){
      // console.log(response.Countries[i].Country);

      var tableRow = `<tr>
        <td> ${response.Countries[i].Country} </td>
        <td> ${response.Countries[i].TotalConfirmed} </td>
        <td> ${response.Countries[i].TotalConfirmed - response.Countries[i].TotalRecovered} </td>
        <td> ${response.Countries[i].TotalRecovered} </td>
        <td> ${response.Countries[i].TotalDeaths} </td>

        </tr>`
      // var tableRow = '<tr> <td>' + response.Countries[i].Country + '</td> </tr>'

      $('#tbody').append(tableRow)
    }

    $('#covidtable').DataTable()

  },
  error: function(error)
  {
    console.log(error);
  }
})
