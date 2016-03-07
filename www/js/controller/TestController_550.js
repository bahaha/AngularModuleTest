module.exports= function($scope, $state, TestService){
		console.log('enter controller_550')
		$scope.test = TestService.getTest()
	}
