module.exports= function($scope, $state, TestService){
		console.log('enter controller_792')
		$scope.test = TestService.getTest()
	}
