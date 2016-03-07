module.exports= function($scope, $state, TestService){
		console.log('enter controller_145')
		$scope.test = TestService.getTest()
	}
