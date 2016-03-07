module.exports= function($scope, $state, TestService){
		console.log('enter controller_931')
		$scope.test = TestService.getTest()
	}
