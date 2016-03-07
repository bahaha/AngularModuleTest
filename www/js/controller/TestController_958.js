module.exports= function($scope, $state, TestService){
		console.log('enter controller_958')
		$scope.test = TestService.getTest()
	}
