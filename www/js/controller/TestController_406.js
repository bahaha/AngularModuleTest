module.exports= function($scope, $state, TestService){
		console.log('enter controller_406')
		$scope.test = TestService.getTest()
	}
