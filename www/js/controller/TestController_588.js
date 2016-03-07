module.exports= function($scope, $state, TestService){
		console.log('enter controller_588')
		$scope.test = TestService.getTest()
	}
