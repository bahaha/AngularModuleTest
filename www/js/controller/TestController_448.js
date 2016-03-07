module.exports= function($scope, $state, TestService){
		console.log('enter controller_448')
		$scope.test = TestService.getTest()
	}
