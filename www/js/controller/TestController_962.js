module.exports= function($scope, $state, TestService){
		console.log('enter controller_962')
		$scope.test = TestService.getTest()
	}
