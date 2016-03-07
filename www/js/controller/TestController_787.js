module.exports= function($scope, $state, TestService){
		console.log('enter controller_787')
		$scope.test = TestService.getTest()
	}
