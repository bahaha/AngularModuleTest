module.exports= function($scope, $state, TestService){
		console.log('enter controller_371')
		$scope.test = TestService.getTest()
	}
