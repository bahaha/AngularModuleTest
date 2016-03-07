module.exports= function($scope, $state, TestService){
		console.log('enter controller_937')
		$scope.test = TestService.getTest()
	}
