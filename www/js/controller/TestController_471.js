module.exports= function($scope, $state, TestService){
		console.log('enter controller_471')
		$scope.test = TestService.getTest()
	}
