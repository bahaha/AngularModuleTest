module.exports= function($scope, $state, TestService){
		console.log('enter controller_276')
		$scope.test = TestService.getTest()
	}
