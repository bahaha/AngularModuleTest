module.exports= function($scope, $state, TestService){
		console.log('enter controller_41')
		$scope.test = TestService.getTest()
	}
