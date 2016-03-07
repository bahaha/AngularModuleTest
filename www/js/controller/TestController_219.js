module.exports= function($scope, $state, TestService){
		console.log('enter controller_219')
		$scope.test = TestService.getTest()
	}
