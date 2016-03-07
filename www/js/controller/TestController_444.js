module.exports= function($scope, $state, TestService){
		console.log('enter controller_444')
		$scope.test = TestService.getTest()
	}
