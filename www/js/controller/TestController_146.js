module.exports= function($scope, $state, TestService){
		console.log('enter controller_146')
		$scope.test = TestService.getTest()
	}
