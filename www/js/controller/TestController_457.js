module.exports= function($scope, $state, TestService){
		console.log('enter controller_457')
		$scope.test = TestService.getTest()
	}
