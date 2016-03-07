module.exports= function($scope, $state, TestService){
		console.log('enter controller_666')
		$scope.test = TestService.getTest()
	}
