module.exports= function($scope, $state, TestService){
		console.log('enter controller_648')
		$scope.test = TestService.getTest()
	}
