module.exports= function($scope, $state, TestService){
		console.log('enter controller_991')
		$scope.test = TestService.getTest()
	}
