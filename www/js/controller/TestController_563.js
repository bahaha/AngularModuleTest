module.exports= function($scope, $state, TestService){
		console.log('enter controller_563')
		$scope.test = TestService.getTest()
	}
