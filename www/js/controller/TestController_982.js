module.exports= function($scope, $state, TestService){
		console.log('enter controller_982')
		$scope.test = TestService.getTest()
	}
