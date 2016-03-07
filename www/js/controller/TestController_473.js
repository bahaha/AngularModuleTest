module.exports= function($scope, $state, TestService){
		console.log('enter controller_473')
		$scope.test = TestService.getTest()
	}
