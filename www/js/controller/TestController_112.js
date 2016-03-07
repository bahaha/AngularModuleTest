module.exports= function($scope, $state, TestService){
		console.log('enter controller_112')
		$scope.test = TestService.getTest()
	}
