module.exports= function($scope, $state, TestService){
		console.log('enter controller_726')
		$scope.test = TestService.getTest()
	}
