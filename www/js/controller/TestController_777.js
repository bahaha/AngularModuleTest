module.exports= function($scope, $state, TestService){
		console.log('enter controller_777')
		$scope.test = TestService.getTest()
	}
