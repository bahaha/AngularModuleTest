module.exports= function($scope, $state, TestService){
		console.log('enter controller_537')
		$scope.test = TestService.getTest()
	}
