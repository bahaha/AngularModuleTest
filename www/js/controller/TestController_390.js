module.exports= function($scope, $state, TestService){
		console.log('enter controller_390')
		$scope.test = TestService.getTest()
	}
