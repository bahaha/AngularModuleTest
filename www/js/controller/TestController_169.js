module.exports= function($scope, $state, TestService){
		console.log('enter controller_169')
		$scope.test = TestService.getTest()
	}
