module.exports= function($scope, $state, TestService){
		console.log('enter controller_407')
		$scope.test = TestService.getTest()
	}
