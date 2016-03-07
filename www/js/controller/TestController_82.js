module.exports= function($scope, $state, TestService){
		console.log('enter controller_82')
		$scope.test = TestService.getTest()
	}
