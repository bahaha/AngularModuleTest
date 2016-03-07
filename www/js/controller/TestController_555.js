module.exports= function($scope, $state, TestService){
		console.log('enter controller_555')
		$scope.test = TestService.getTest()
	}
