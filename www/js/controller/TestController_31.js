module.exports= function($scope, $state, TestService){
		console.log('enter controller_31')
		$scope.test = TestService.getTest()
	}
