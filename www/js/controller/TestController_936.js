module.exports= function($scope, $state, TestService){
		console.log('enter controller_936')
		$scope.test = TestService.getTest()
	}
