module.exports= function($scope, $state, TestService){
		console.log('enter controller_855')
		$scope.test = TestService.getTest()
	}
