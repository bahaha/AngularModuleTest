module.exports= function($scope, $state, TestService){
		console.log('enter controller_631')
		$scope.test = TestService.getTest()
	}
