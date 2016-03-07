module.exports= function($scope, $state, TestService){
		console.log('enter controller_526')
		$scope.test = TestService.getTest()
	}
