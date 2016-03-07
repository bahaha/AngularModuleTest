module.exports= function($scope, $state, TestService){
		console.log('enter controller_356')
		$scope.test = TestService.getTest()
	}
