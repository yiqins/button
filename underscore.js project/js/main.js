

	/*

	url,name,line
	http://www.mta.info/nyct/service/,Smith St & Bergen St At Ne Corner (To Manhattan And Queens Only),F-G
	http://www.mta.info/nyct/service/,Court St & Montague St At Sw Corner,2-3-4-5-N-R
	http://www.mta.info/nyct/service/,Court St & Montague St At Sw Corner,2-3-4-5-N-R

	*/

	// An alternative to usind d3 would be to convert our csv to json and use jQuery's $.getJSON function.
	d3.csv('data/DOITT_SUBWAY_ENTRANCE_01_13SEPT2010.csv', function(error, subwayStations){
		if (error){
			console.log(error);
		}
		// console.log(error, subwayData);
		subwayStations.forEach(function(subwayStation){
			var delimiter = '(';
			var subway_station_name_parts = subwayStation.name.split(delimiter);
			var subway_direction = subway_station_name_parts[1];

			if (subway_direction){
				subway_direction = subway_direction.replace(/\)/g, '');
				subwayStation.direction = subway_direction;	
			}

			subwayStation.name=subway_station_name_parts[0].trim();
			subwayStation.linelist=subwayStation.line.split('-');	
		
		});

		//var filtered_entrances=subwayStations.filter(function(subwayStation){
			//return true && true && trues
		//	return (_.contains(subwayStation.lineList,'2') && _.contains(subwayStation.lineList,'3')) || _.contains(subwayStation.lineList,'A');
		//	//if (return _.contains(subwayStation.linelist,'2')=true or (return _.contains(subwayStation.linelist,'3')= true){
		//	});

			
		//	subwayStation.entrance2=subwayStation.linelist.indexOf('2')!=-1; 
			//_.contains(subwayStation.linelist,'2');
			//return subwayStation.lineList.indexOf('2') != -1;
		//});

		//function showEntrancesByLine(Linename)

		//var filtered_direction=subwayStations.filter(function(subwayStation){
		//return _.contains(subwayStation.linelist,'3');
		//});

		//$('#canvas').append('<div>'+subwayStations[1].name + ',' + subwayStations[1].direction + ' ' + subwayStations[1].linelist.join('-') + '</div>')
	//	console.log(filtered_entrances);
	//	console.log(subwayStations.length);
		

		
		
		//console.log(lineCstops);
	

	$('.button').on('click', function(){
		$('#canvas').html('');

		var id = $(this).attr('data-which');
		
		var selectedstops=subwayStations.filter(function(subwayStation){	
			return _.contains(subwayStation.linelist,id);
		});


		// if (id =='A'){
		selectedstops.forEach(function(subwayStation){
			$('#canvas').append("<div>" + subwayStation.name + 
				' ' +subwayStation.linelist.join(' - ')+'</div>');
		

		// if (id=='B'){
		// 	$('#canvas').append('<div>'+lineBstops+ '</div>');
		// }

		// if (id=='C'){
		// 	$('#canvas').append('<div>'+lineCstops+ '</div>');
		// }

		});

	});

});

	

		//console.log(lineAstops);

		// var lineBstops=subwayStations.filter(function(subwayStation){	
		// 	return _.contains(subwayStation.lineList,'B');
		// });

		// //console.log(lineBstops);

		// var lineCstops=subwayStations.filter(function(subwayStation){	
		// 	return _.contains(subwayStation.lineList,'C');
		// });

