module.exports= function($scope, $state, TestService){
		console.log('enter controller_250')
		$scope.test = TestService.getTest()
	}
