module.exports= function($scope, $state, TestService){
		console.log('enter controller_13')
		$scope.test = TestService.getTest()
	}
