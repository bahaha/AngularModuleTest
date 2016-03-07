module.exports= function($scope, $state, TestService){
		console.log('enter controller_301')
		$scope.test = TestService.getTest()
	}
