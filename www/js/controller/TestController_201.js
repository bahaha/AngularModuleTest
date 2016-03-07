module.exports= function($scope, $state, TestService){
		console.log('enter controller_201')
		$scope.test = TestService.getTest()
	}
