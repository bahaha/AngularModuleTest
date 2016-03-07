module.exports= function($scope, $state, TestService){
		console.log('enter controller_791')
		$scope.test = TestService.getTest()
	}
