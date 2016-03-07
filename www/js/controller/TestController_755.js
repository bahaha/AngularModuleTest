module.exports= function($scope, $state, TestService){
		console.log('enter controller_755')
		$scope.test = TestService.getTest()
	}
