module.exports= function($scope, $state, TestService){
		console.log('enter controller_14')
		$scope.test = TestService.getTest()
	}
