module.exports= function($scope, $state, TestService){
		console.log('enter controller_894')
		$scope.test = TestService.getTest()
	}
