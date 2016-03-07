module.exports= function($scope, $state, TestService){
		console.log('enter controller_482')
		$scope.test = TestService.getTest()
	}
