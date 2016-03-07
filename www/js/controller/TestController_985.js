module.exports= function($scope, $state, TestService){
		console.log('enter controller_985')
		$scope.test = TestService.getTest()
	}
