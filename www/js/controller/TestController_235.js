module.exports= function($scope, $state, TestService){
		console.log('enter controller_235')
		$scope.test = TestService.getTest()
	}
