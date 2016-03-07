module.exports= function($scope, $state, TestService){
		console.log('enter controller_757')
		$scope.test = TestService.getTest()
	}
