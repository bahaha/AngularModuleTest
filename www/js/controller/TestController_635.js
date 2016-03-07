module.exports= function($scope, $state, TestService){
		console.log('enter controller_635')
		$scope.test = TestService.getTest()
	}
