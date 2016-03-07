module.exports= function($scope, $state, TestService){
		console.log('enter controller_464')
		$scope.test = TestService.getTest()
	}
