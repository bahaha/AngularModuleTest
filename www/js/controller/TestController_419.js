module.exports= function($scope, $state, TestService){
		console.log('enter controller_419')
		$scope.test = TestService.getTest()
	}
