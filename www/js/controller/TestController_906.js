module.exports= function($scope, $state, TestService){
		console.log('enter controller_906')
		$scope.test = TestService.getTest()
	}
