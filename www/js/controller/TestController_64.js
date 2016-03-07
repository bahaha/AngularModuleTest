module.exports= function($scope, $state, TestService){
		console.log('enter controller_64')
		$scope.test = TestService.getTest()
	}
