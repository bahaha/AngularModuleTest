module.exports= function($scope, $state, TestService){
		console.log('enter controller_469')
		$scope.test = TestService.getTest()
	}
