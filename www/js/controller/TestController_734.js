module.exports= function($scope, $state, TestService){
		console.log('enter controller_734')
		$scope.test = TestService.getTest()
	}
