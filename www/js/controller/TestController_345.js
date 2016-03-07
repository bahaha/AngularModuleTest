module.exports= function($scope, $state, TestService){
		console.log('enter controller_345')
		$scope.test = TestService.getTest()
	}
