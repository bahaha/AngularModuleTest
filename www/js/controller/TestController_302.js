module.exports= function($scope, $state, TestService){
		console.log('enter controller_302')
		$scope.test = TestService.getTest()
	}
