module.exports= function($scope, $state, TestService){
		console.log('enter controller_397')
		$scope.test = TestService.getTest()
	}
