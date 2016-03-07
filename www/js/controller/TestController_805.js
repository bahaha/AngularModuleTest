module.exports= function($scope, $state, TestService){
		console.log('enter controller_805')
		$scope.test = TestService.getTest()
	}
