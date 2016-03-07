module.exports= function($scope, $state, TestService){
		console.log('enter controller_136')
		$scope.test = TestService.getTest()
	}
