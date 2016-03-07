module.exports= function($scope, $state, TestService){
		console.log('enter controller_231')
		$scope.test = TestService.getTest()
	}
