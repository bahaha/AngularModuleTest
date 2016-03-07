module.exports= function($scope, $state, TestService){
		console.log('enter controller_432')
		$scope.test = TestService.getTest()
	}
