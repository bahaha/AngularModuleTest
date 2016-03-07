module.exports= function($scope, $state, TestService){
		console.log('enter controller_420')
		$scope.test = TestService.getTest()
	}
