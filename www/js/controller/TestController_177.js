module.exports= function($scope, $state, TestService){
		console.log('enter controller_177')
		$scope.test = TestService.getTest()
	}
