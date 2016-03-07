module.exports= function($scope, $state, TestService){
		console.log('enter controller_874')
		$scope.test = TestService.getTest()
	}
