module.exports= function($scope, $state, TestService){
		console.log('enter controller_749')
		$scope.test = TestService.getTest()
	}
