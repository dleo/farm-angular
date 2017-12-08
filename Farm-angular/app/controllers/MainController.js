app.controller('MainController', ['$scope', '$state', '$http', '$timeout', function($scope, $state, $http, $timeout){

	var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI4YTEwNjliZDYwMTBjOWFmNTI2NTFkMzEzOGNhOWQ2YTE4ZDUwMjJhZmNmOWU2MWRjZTMzOGM3OTQ0MmQ2OTFmZDhhNDZjMDIyOWRiMjU4In0.eyJhdWQiOiIxIiwianRpIjoiYjhhMTA2OWJkNjAxMGM5YWY1MjY1MWQzMTM4Y2E5ZDZhMThkNTAyMmFmY2Y5ZTYxZGNlMzM4Yzc5NDQyZDY5MWZkOGE0NmMwMjI5ZGIyNTgiLCJpYXQiOjE1MTIwNTIxMTksIm5iZiI6MTUxMjA1MjExOSwiZXhwIjoxNTQzNTg4MTE5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eB5p8NY6-GKbh1KT_Qk5fS6GA1t95uMM3z6pLLEGnXNhyL54D9MVsWopFmMk_3P7qm8CVtO0OguaiAj3pSoC-Bglq9oz_5d6PPYvIiwQpYrygCr9qeE7enHU_wFN4HRrYn4zG6ekUxSkPcMFDOahy14n0PEyfqUEMjeV34310AYFrwORFXawH3sNYs90VB1eZBQ9NPf-aWIoj8xDeMLPH9PrpJQGma-IQj7FH8dzZNpYnO978QJpQ8GhIgILTTdut8DqTBLzZ62sXqdmcBHhfbKQV-jBLeWmtm_XFyzR_4gK7oOB4OHBXa85IgjQiHCyFW55M2Xf9H3lmv_wUnbU6h1p6hOqcT1zXutRjAZzv9XeyMvPfV523Dau9Dgz3ooXySXPV4foHrX_ELNnbGyxnqQEpUA4DT_mKoCGzV3bkmGpwSqy6uCEd3Kw-vMppPZJzqeTFT0VG-Ds0TnluH5C3Rxn563Tj6NAnMaLY6cAWHYAnIYYjW-1qc__fUO3WvxErPqrwP1IQdK_ROlhH6mKOwzjQL7MUcOk7VhsV-zN7xu4lX1dV-7I2P07KcMfZCePxmgPAQayFcTe6DSBMmoEKORu14AY0rhi2dHCLrU6p5mZrQoDqMu2WGEOxrNR3XVvwOE5yfoXFyilA5A1a06QrnK79LTAV1lOQq8LZvpt2tc';


	if($state.current.name == 'home'){

		$scope.itemlist = [{}];
		$scope.lista = [{}];
		$scope.lista_aux = [{}];

		$scope.joinList = function(){
			
			$scope.itemlist = $scope.lista;
			
		}

		var function_get = function(i){
			$http({
				method: 'GET',
				url: "https://stormy-coast-32294.herokuapp.com/api/varieties/"+$scope.lista[i].variety_id,
				headers:{
					'Authorization' : 'Bearer '+token
				}
			}).then(function successCallback(data) {
				$scope.lista[i].variety_id = data.data;
				$timeout(function(){
					
					$('.table').DataTable();
				});
			}, function errorCallback(response) {
				console.log(response.statusText);
			});
			// console.log($scope.lista[i]);
		}

		$http({
			method: 'GET',
			url: "https://stormy-coast-32294.herokuapp.com/api/saleitems",
			headers:{
				'Authorization' : 'Bearer '+token
			}
		}).then(function successCallback(response) {
			$scope.lista = response.data.data;

			for (var i = 0; i < $scope.lista.length; i++) {

				function_get(i);

			}
			
			$scope.joinList();

		}, function errorCallback(response) {
			console.log(response.statusText);
		});
 
	}

	if($state.current.name == 'crearitems'){

		$scope.array_presentation = [{name:'KG'},{name:'LTS'}];
		$scope.form = {
		 	"name": "",
			"code": "",
		  	"price": 0,
		  	"presentation": $scope.array_presentation
		}

		console.log($scope.form);

		$scope.variety_selected = {};
		$scope.presentation_selected = {};

		$http({
			method: 'GET',
			url: "https://stormy-coast-32294.herokuapp.com/api/varieties",
			headers:{
				'Authorization' : 'Bearer '+token
			}
		}).then(function successCallback(response) {

			$scope.form.variety_id = response.data.data;
			
		}, function errorCallback(response) {
			console.log(response.statusText);
		});


		$scope.save = function(){
			$scope.form.variety_id = $scope.variety_selected.id;
			$scope.form.presentation = $scope.presentation_selected.name;

			$http({
				method: 'POST',
				url: "https://stormy-coast-32294.herokuapp.com/api/saleitems",
				data: $scope.form,
				headers:{
					'Authorization' : 'Bearer '+token
				},
			}).then(function successCallback(response) {
				// console.log(response.data);
				$state.go('home');
			}, function errorCallback(response) {
				console.log(response);
			});


		}
		
	}


}])
