module.exports= function($scope, $state, TestService){
		console.log('enter controller_65')
		$scope.test = TestService.getTest()
	}
