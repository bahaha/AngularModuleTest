module.exports= function($scope, $state, TestService){
		console.log('enter controller_694')
		$scope.test = TestService.getTest()
	}
