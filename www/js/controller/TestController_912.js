module.exports= function($scope, $state, TestService){
		console.log('enter controller_912')
		$scope.test = TestService.getTest()
	}
