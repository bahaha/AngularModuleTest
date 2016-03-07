module.exports= function($scope, $state, TestService){
		console.log('enter controller_988')
		$scope.test = TestService.getTest()
	}
