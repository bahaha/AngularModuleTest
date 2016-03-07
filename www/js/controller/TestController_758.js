module.exports= function($scope, $state, TestService){
		console.log('enter controller_758')
		$scope.test = TestService.getTest()
	}
