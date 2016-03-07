module.exports= function($scope, $state, TestService){
		console.log('enter controller_293')
		$scope.test = TestService.getTest()
	}
