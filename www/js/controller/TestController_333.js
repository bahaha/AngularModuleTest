module.exports= function($scope, $state, TestService){
		console.log('enter controller_333')
		$scope.test = TestService.getTest()
	}
