module.exports= function($scope, $state, TestService){
		console.log('enter controller_430')
		$scope.test = TestService.getTest()
	}
