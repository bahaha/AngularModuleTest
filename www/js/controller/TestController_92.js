module.exports= function($scope, $state, TestService){
		console.log('enter controller_92')
		$scope.test = TestService.getTest()
	}
