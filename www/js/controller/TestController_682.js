module.exports= function($scope, $state, TestService){
		console.log('enter controller_682')
		$scope.test = TestService.getTest()
	}
