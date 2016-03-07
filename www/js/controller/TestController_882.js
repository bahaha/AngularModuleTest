module.exports= function($scope, $state, TestService){
		console.log('enter controller_882')
		$scope.test = TestService.getTest()
	}
