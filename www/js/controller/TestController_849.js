module.exports= function($scope, $state, TestService){
		console.log('enter controller_849')
		$scope.test = TestService.getTest()
	}
