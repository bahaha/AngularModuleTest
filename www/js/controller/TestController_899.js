module.exports= function($scope, $state, TestService){
		console.log('enter controller_899')
		$scope.test = TestService.getTest()
	}
