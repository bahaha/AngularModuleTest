module.exports= function($scope, $state, TestService){
		console.log('enter controller_771')
		$scope.test = TestService.getTest()
	}
