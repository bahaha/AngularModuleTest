module.exports= function($scope, $state, TestService){
		console.log('enter controller_135')
		$scope.test = TestService.getTest()
	}
