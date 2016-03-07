module.exports= function($scope, $state, TestService){
		console.log('enter controller_95')
		$scope.test = TestService.getTest()
	}
