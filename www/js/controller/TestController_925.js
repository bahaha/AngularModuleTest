module.exports= function($scope, $state, TestService){
		console.log('enter controller_925')
		$scope.test = TestService.getTest()
	}
