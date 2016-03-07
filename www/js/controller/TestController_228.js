module.exports= function($scope, $state, TestService){
		console.log('enter controller_228')
		$scope.test = TestService.getTest()
	}
