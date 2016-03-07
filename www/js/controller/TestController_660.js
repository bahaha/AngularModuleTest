module.exports= function($scope, $state, TestService){
		console.log('enter controller_660')
		$scope.test = TestService.getTest()
	}
