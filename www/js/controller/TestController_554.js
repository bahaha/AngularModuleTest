module.exports= function($scope, $state, TestService){
		console.log('enter controller_554')
		$scope.test = TestService.getTest()
	}
