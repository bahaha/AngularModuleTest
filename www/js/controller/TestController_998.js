module.exports= function($scope, $state, TestService){
		console.log('enter controller_998')
		$scope.test = TestService.getTest()
	}
