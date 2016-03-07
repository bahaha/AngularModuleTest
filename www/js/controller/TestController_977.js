module.exports= function($scope, $state, TestService){
		console.log('enter controller_977')
		$scope.test = TestService.getTest()
	}
