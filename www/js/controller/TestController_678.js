module.exports= function($scope, $state, TestService){
		console.log('enter controller_678')
		$scope.test = TestService.getTest()
	}
