module.exports= function($scope, $state, TestService){
		console.log('enter controller_247')
		$scope.test = TestService.getTest()
	}
